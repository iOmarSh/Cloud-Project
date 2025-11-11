@echo off
echo ========================================
echo AWS Portfolio Deployment Setup
echo ========================================
echo.

REM Configure AWS CLI
echo Configuring AWS CLI...
aws configure set aws_access_key_id AKIAVHPQ4U4H3B3IFYBV
aws configure set aws_secret_access_key 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
aws configure set default.region eu-north-1
aws configure set default.output json

echo.
echo ✓ AWS CLI configured successfully!
echo.

REM Test AWS connection
echo Testing AWS connection...
aws s3 ls

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Your S3 bucket: omar-shawky
echo Region: eu-north-1 (Europe - Stockholm)
echo ARN: arn:aws:s3:::omar-shawky
echo.
echo Next steps:
echo 1. cd frontend
echo 2. npm install
echo 3. npm run build
echo 4. Run deploy-to-s3.bat
echo.
pause
