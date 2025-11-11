#!/bin/bash
# EC2 Backend Deployment Script for Amazon Linux

echo "📦 Installing Node.js and dependencies..."
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

echo "📁 Navigating to backend directory..."
cd /home/ec2-user/backend

echo "📥 Installing Node.js dependencies..."
npm install

echo "🔧 Setting up environment variables..."
cat > .env << 'EOF'
PORT=5000
NODE_ENV=production
FRONTEND_URL=http://omar-shawky.s3-website.eu-north-1.amazonaws.com
EMAIL_USER=omargenius2013@gmail.com
EMAIL_PASS=oncyqmxkmqocbwgk
EMAIL_TO=omargenius2013@gmail.com
EOF

echo "🔒 Setting up PM2 for process management..."
sudo npm install -g pm2

echo "🚀 Starting backend server..."
pm2 stop portfolio-backend 2>/dev/null || true
pm2 delete portfolio-backend 2>/dev/null || true
pm2 start server.js --name portfolio-backend
pm2 startup
pm2 save

echo "🔥 Configuring firewall (if available)..."
if command -v firewall-cmd &> /dev/null; then
    sudo firewall-cmd --permanent --add-port=5000/tcp
    sudo firewall-cmd --reload
fi

echo "✅ Backend deployed successfully!"
echo "🌐 Backend URL: http://13.61.151.242:5000"
echo "🔍 Health Check: http://13.61.151.242:5000/api/health"
pm2 status
