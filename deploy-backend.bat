@echo off
echo Uploading backend to EC2...
scp -i Lab.pem -o StrictHostKeyChecking=no -r backend ec2-user@13.61.151.242:/home/ec2-user/

echo.
echo Connecting to EC2 to deploy...
echo Please run these commands on EC2:
echo.
echo cd /home/ec2-user/backend
echo chmod +x deploy-ec2.sh
echo ./deploy-ec2.sh
echo.
echo Opening SSH connection...
ssh -i Lab.pem -o StrictHostKeyChecking=no ec2-user@13.61.151.242
