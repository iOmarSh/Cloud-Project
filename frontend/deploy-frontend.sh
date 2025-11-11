#!/bin/bash

# Portfolio Frontend S3 Deployment Script
# This script builds and deploys the React frontend to AWS S3

echo "=================================="
echo "Portfolio Frontend Deployment"
echo "=================================="
echo ""

# Check if S3 bucket name is provided
if [ -z "$1" ]; then
    echo "❌ Error: S3 bucket name is required"
    echo "Usage: ./deploy-frontend.sh <bucket-name>"
    echo "Example: ./deploy-frontend.sh my-portfolio-bucket"
    exit 1
fi

S3_BUCKET=$1

echo "📦 Building frontend..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""

echo "☁️  Uploading to S3 bucket: $S3_BUCKET"

# Upload to S3
aws s3 sync dist/ s3://$S3_BUCKET --delete

if [ $? -ne 0 ]; then
    echo "❌ Upload failed!"
    exit 1
fi

echo "✅ Upload completed successfully!"
echo ""

# Optional: Invalidate CloudFront cache if distribution ID is provided
if [ ! -z "$2" ]; then
    DISTRIBUTION_ID=$2
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
    echo "✅ CloudFront cache invalidated!"
fi

echo ""
echo "=================================="
echo "✨ Deployment Complete!"
echo "=================================="
echo "Your portfolio is now live at:"
echo "http://$S3_BUCKET.s3-website-us-east-1.amazonaws.com"
echo ""
