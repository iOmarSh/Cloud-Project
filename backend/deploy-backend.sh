#!/bin/bash

# Portfolio Backend EC2 Deployment Script
# This script deploys the Node.js backend to EC2 instance

echo "=================================="
echo "Portfolio Backend Deployment"
echo "=================================="
echo ""

# Configuration
if [ -z "$1" ] || [ -z "$2" ]; then
    echo "❌ Error: EC2 details required"
    echo "Usage: ./deploy-backend.sh <ec2-user@ip-address> <path-to-pem-key>"
    echo "Example: ./deploy-backend.sh ec2-user@12.34.56.78 ~/keys/my-key.pem"
    exit 1
fi

EC2_HOST=$1
PEM_KEY=$2
REMOTE_DIR="/home/ec2-user/portfolio-backend"

echo "📦 Preparing backend files..."

# Create temporary deployment package
mkdir -p deploy-temp
cp package.json deploy-temp/
cp server.js deploy-temp/
cp .env.template deploy-temp/

echo "✅ Files prepared!"
echo ""

echo "🚀 Deploying to EC2: $EC2_HOST"

# Create directory on EC2 if it doesn't exist
ssh -i $PEM_KEY $EC2_HOST "mkdir -p $REMOTE_DIR"

# Copy files to EC2
scp -i $PEM_KEY -r deploy-temp/* $EC2_HOST:$REMOTE_DIR/

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed!"
    rm -rf deploy-temp
    exit 1
fi

echo "✅ Files copied to EC2!"
echo ""

# Clean up local temp files
rm -rf deploy-temp

echo "📦 Installing dependencies on EC2..."

# SSH into EC2 and setup
ssh -i $PEM_KEY $EC2_HOST << 'ENDSSH'
cd /home/ec2-user/portfolio-backend

# Install Node.js if not installed
if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
    sudo yum install -y nodejs
fi

# Install dependencies
npm install

# Setup PM2 if not installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    sudo npm install -g pm2
fi

# Create .env from template if it doesn't exist
if [ ! -f .env ]; then
    cp .env.template .env
    echo "⚠️  Created .env file - Please update with your configuration!"
fi

# Stop existing process
pm2 stop portfolio-api 2>/dev/null || true

# Start the application
pm2 start server.js --name portfolio-api

# Save PM2 process list
pm2 save

# Setup PM2 to start on system boot
pm2 startup | tail -n 1 | sudo bash

echo "✅ Application started with PM2!"
ENDSSH

echo ""
echo "=================================="
echo "✨ Deployment Complete!"
echo "=================================="
echo "Backend is running on EC2!"
echo "Check status: ssh -i $PEM_KEY $EC2_HOST 'pm2 status'"
echo "View logs: ssh -i $PEM_KEY $EC2_HOST 'pm2 logs portfolio-api'"
echo ""
echo "⚠️  Important: Update .env file on EC2 with:"
echo "   - PORT (default: 5000)"
echo "   - FRONTEND_URL (your S3 bucket URL)"
echo "   - Email configuration (if needed)"
echo ""
