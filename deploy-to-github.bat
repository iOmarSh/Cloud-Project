@echo off
echo.
echo ==========================================
echo   Deploying Frontend to GitHub Pages
echo ==========================================
echo.

cd frontend

echo Step 1: Installing dependencies...
call npm install

echo Step 2: Building and deploying to GitHub Pages...
call npm run deploy

echo.
echo ==========================================
echo   Deployment complete!
echo   Your site should be available at:
echo   https://iOmarSh.github.io/Cloud-Project/
echo ==========================================
echo.
pause
