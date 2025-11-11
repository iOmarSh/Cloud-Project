@echo off
echo Building frontend...
cd frontend
call npm run build

echo.
echo Deploying to S3...
aws s3 sync dist/ s3://omar-shawky --delete --region eu-north-1

echo.
echo Frontend deployed successfully!
echo URL: http://omar-shawky.s3-website.eu-north-1.amazonaws.com
pause
