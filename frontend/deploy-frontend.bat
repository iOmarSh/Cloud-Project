@echo off
REM Portfolio Frontend S3 Deployment Script (Windows)
REM This script builds and deploys the React frontend to AWS S3

echo ==================================
echo Portfolio Frontend Deployment
echo ==================================
echo.

if "%1"=="" (
    echo Error: S3 bucket name is required
    echo Usage: deploy-frontend.bat bucket-name
    echo Example: deploy-frontend.bat my-portfolio-bucket
    exit /b 1
)

set S3_BUCKET=%1

echo Building frontend...
call npm run build

if errorlevel 1 (
    echo Build failed!
    exit /b 1
)

echo Build completed successfully!
echo.

echo Uploading to S3 bucket: %S3_BUCKET%

aws s3 sync dist/ s3://%S3_BUCKET% --delete

if errorlevel 1 (
    echo Upload failed!
    exit /b 1
)

echo Upload completed successfully!
echo.

REM Optional: Invalidate CloudFront cache if distribution ID is provided
if not "%2"=="" (
    set DISTRIBUTION_ID=%2
    echo Invalidating CloudFront cache...
    aws cloudfront create-invalidation --distribution-id %DISTRIBUTION_ID% --paths "/*"
    echo CloudFront cache invalidated!
)

echo.
echo ==================================
echo Deployment Complete!
echo ==================================
echo Your portfolio is now live at:
echo http://%S3_BUCKET%.s3-website-us-east-1.amazonaws.com
echo.
