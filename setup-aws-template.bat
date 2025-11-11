@echo off
echo ========================================
echo AWS Portfolio Deployment Setup
echo ========================================
echo.

REM Configure AWS CLI
echo Configuring AWS CLI...
echo.
echo Please enter your AWS credentials:
echo.
set /p AWS_ACCESS_KEY="AWS Access Key ID: "
set /p AWS_SECRET_KEY="AWS Secret Access Key: "
set /p AWS_REGION="AWS Region (default: eu-north-1): "

if "%AWS_REGION%"=="" set AWS_REGION=eu-north-1

aws configure set aws_access_key_id %AWS_ACCESS_KEY%
aws configure set aws_secret_access_key %AWS_SECRET_KEY%
aws configure set default.region %AWS_REGION%
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
echo Region: %AWS_REGION%
echo.
echo Next steps:
echo 1. cd frontend
echo 2. npm install
echo 3. npm run build
echo 4. Run deploy-to-s3.bat
echo.
pause
