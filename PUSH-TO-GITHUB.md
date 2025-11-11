# 🚀 Safe GitHub Push Guide

## ⚠️ BEFORE YOU PUSH - IMPORTANT!

These files contain sensitive information and should **NEVER** be pushed to GitHub:

### 🔒 Sensitive Files (Already in .gitignore)
- ✅ `*.pem` - SSH private keys
- ✅ `*.ppk` - PuTTY private keys  
- ✅ `AWS-CREDENTIALS.txt` - AWS credentials
- ✅ `backend/.env` - Email password and API keys
- ✅ `frontend/.env` - API endpoints
- ✅ `aws/` folder - AWS configuration
- ✅ `*.mp4` - Large audio/video files (undertaker.mp4, johncena.mp4)

## 📋 Safe Push Steps

### Option 1: Use the Automated Script (Recommended)
```cmd
safe-push-to-github.bat
```

This script will:
1. Remove any sensitive files from Git tracking
2. Stage all safe changes
3. Show you what will be committed
4. Ask for confirmation before pushing

### Option 2: Manual Push
1. **Check what will be committed:**
   ```cmd
   git status
   ```

2. **Remove any sensitive files from tracking (if needed):**
   ```cmd
   git rm --cached *.pem
   git rm --cached AWS-CREDENTIALS.txt
   git rm --cached backend/.env
   git rm --cached frontend/.env
   ```

3. **Stage changes:**
   ```cmd
   git add .
   ```

4. **Commit:**
   ```cmd
   git commit -m "Your commit message here"
   ```

5. **Push:**
   ```cmd
   git push origin main
   ```

## ✅ What's Safe to Push

These files are safe and should be in your repository:
- ✅ `backend/.env.template` - Environment variable template (no actual values)
- ✅ `frontend/.env` template comments
- ✅ `deploy-backend.bat` - Deployment scripts (now updated with .gitignore)
- ✅ Source code (`.js`, `.jsx`, `.css` files)
- ✅ `package.json` files
- ✅ `README.md` and documentation
- ✅ `.gitignore` file

## 🔍 Double Check Before Pushing

Always run this command and review the output:
```cmd
git status
```

Make sure you don't see:
- ❌ `.pem` files
- ❌ `.ppk` files
- ❌ `.env` files (backend/.env, frontend/.env)
- ❌ `AWS-CREDENTIALS.txt`
- ❌ `*.mp4` files

## 🆘 If You Accidentally Pushed Sensitive Data

1. **Remove from repository:**
   ```cmd
   git rm --cached <sensitive-file>
   git commit -m "Remove sensitive file"
   git push
   ```

2. **Rotate all exposed credentials immediately:**
   - Change AWS Access Keys
   - Change email app password
   - Generate new SSH keys

3. **Use BFG Repo-Cleaner to remove from history:**
   https://rtyley.github.io/bfg-repo-cleaner/

## 📝 Recommended Commit Message Format

```
feat: Add portfolio backend deployment to EC2
- Configure Express API with contact form
- Add PM2 process manager setup
- Deploy to EC2 instance
- Connect S3 frontend to EC2 backend
```

---

**Remember:** Once sensitive data is pushed to GitHub, consider it compromised, even if you delete it later!
