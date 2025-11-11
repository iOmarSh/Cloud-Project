@echo off
echo ========================================
echo Deploying to S3: omar-shawky
echo ========================================
echo.

SET BUCKET_NAME=omar-shawky

echo Step 1: Building frontend...
cd frontend
call npm run build

if errorlevel 1 (
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo.
echo ✓ Build completed successfully!
echo.

echo Step 2: Enabling S3 static website hosting...
aws s3 website s3://%BUCKET_NAME% --index-document index.html --error-document index.html

echo.
echo Step 3: Uploading files to S3...
aws s3 sync dist/ s3://%BUCKET_NAME% --delete

if errorlevel 1 (
    echo ❌ Upload failed!
    pause
    exit /b 1
)

echo.
echo ✓ Upload completed successfully!
echo.

echo Step 4: Setting bucket policy for public access...
cd ..
aws s3api put-bucket-policy --bucket %BUCKET_NAME% --policy file://aws/s3-bucket-policy.json

echo.
echo ========================================
echo ✨ Deployment Complete!
echo ========================================
echo.
echo Your portfolio is live at:
echo http://%BUCKET_NAME%.s3-website-eu-north-1.amazonaws.com
echo.
pause
