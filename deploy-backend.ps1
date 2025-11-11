# PowerShell deployment script for EC2
Write-Host "Uploading backend to EC2..." -ForegroundColor Green

# Upload backend folder
scp -i Lab.pem -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -r backend ubuntu@13.61.151.242:/home/ubuntu/

Write-Host ""
Write-Host "Backend uploaded successfully!" -ForegroundColor Green
Write-Host "Connecting to EC2..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Once connected, run these commands:" -ForegroundColor Cyan
Write-Host "  cd /home/ubuntu/backend" -ForegroundColor White
Write-Host "  chmod +x deploy-ec2.sh" -ForegroundColor White
Write-Host "  ./deploy-ec2.sh" -ForegroundColor White
Write-Host ""

# Connect to EC2
ssh -i Lab.pem -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null ubuntu@13.61.151.242
