@echo off
echo ====================================
echo Safe GitHub Push Script
echo ====================================
echo.

echo Step 1: Removing sensitive files from tracking...
git rm --cached *.pem 2>nul
git rm --cached *.ppk 2>nul
git rm --cached AWS-CREDENTIALS.txt 2>nul
git rm --cached aws/ -r 2>nul
git rm --cached backend/.env 2>nul
git rm --cached frontend/.env 2>nul
git rm --cached frontend/public/undertaker.mp4 2>nul
git rm --cached frontend/public/johncena.mp4 2>nul

echo.
echo Step 2: Staging all changes...
git add .

echo.
echo Step 3: Checking what will be committed...
git status

echo.
echo ====================================
echo Review the files above carefully!
echo ====================================
echo.
echo Make sure NO sensitive files are listed (like .pem, .env, credentials, etc.)
echo.
set /p confirm="Do you want to commit and push? (yes/no): "

if /i "%confirm%"=="yes" (
    echo.
    set /p message="Enter commit message: "
    
    echo.
    echo Committing changes...
    git commit -m "%message%"
    
    echo.
    echo Pushing to GitHub...
    git push origin main
    
    echo.
    echo ====================================
    echo Successfully pushed to GitHub!
    echo ====================================
) else (
    echo.
    echo Push cancelled. No changes were committed.
)

pause
