@echo off
echo Uploading backend to EC2...
echo yes | scp -i Lab.pem -r backend ubuntu@13.61.151.242:/home/ubuntu/

echo.
echo Connecting to EC2 to deploy...
echo Please run these commands on EC2:
echo.
echo cd /home/ubuntu/backend
echo chmod +x deploy-ec2.sh
echo ./deploy-ec2.sh
echo.
echo Opening SSH connection...
echo yes | ssh -i Lab.pem ubuntu@13.61.151.242
