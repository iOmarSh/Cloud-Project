# 🌟 AI Engineer Portfolio Website

A modern, dark-themed personal portfolio built with React and Node.js, designed for AWS deployment. Features a sleek, professional design with smooth animations and full responsiveness.

## ✨ Features

- 🎨 **Dark, Modern Design** - Professional theme with gradient accents and subtle glow effects
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations** - Lightweight transitions and hover effects
- 📧 **Contact Form** - Functional contact form with backend API
- ☁️ **AWS Ready** - Pre-configured for S3 and EC2 deployment
- 🤖 **AI Focus** - Showcases AI/ML projects and technical skills

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with functional components and hooks
- **Vite** - Next-generation frontend tooling
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **CSS3** - Custom styling with CSS variables and animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email sending (optional)
- **CORS** - Cross-origin resource sharing

### AWS Services
- **S3** - Static website hosting for frontend
- **EC2** - Backend API hosting
- **GitHub Pages** - Alternative static hosting for frontend

## 🚀 Deployment

### GitHub Pages (Frontend Only)

This project is configured for easy deployment to GitHub Pages.

#### 1. Quick Deploy
Run the following script in the root directory:
```powershell
.\deploy-to-github.bat
```

#### 2. Automatic Deployment (GitHub Actions)
A GitHub Action is included that will automatically deploy your frontend whenever you push to the `main` branch.

#### 3. Backend on GitHub Pages
Note: GitHub Pages **does not** support Node.js backends. If you host the frontend on GitHub Pages, you must host the backend elsewhere (e.g., Render, Railway, or EC2) and update `VITE_API_URL` in your frontend environment.

## 🎯 Skills Showcased

- **Programming:** Python, C++, C, Java, JavaScript
- **Frameworks:** Scikit-learn, Pandas, Matplotlib, Flutter
- **Databases:** MySQL, Microsoft SQL
- **AI/ML:** Machine Learning, Data Science, Computer Vision, AI Training
- **Other:** Agile/Scrum, Data Analysis

## 📁 Project Structure

```
Cloud-Project/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Navbar/
│   │   │   └── Footer/
│   │   ├── pages/           # Page components
│   │   │   ├── Home/
│   │   │   ├── About/
│   │   │   ├── Projects/
│   │   │   └── Contact/
│   │   ├── data/            # Static data (projects.json)
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── deploy-frontend.sh   # S3 deployment script (Linux/Mac)
│   ├── deploy-frontend.bat  # S3 deployment script (Windows)
│   ├── .env.template        # Environment variables template
│   ├── package.json
│   └── vite.config.js
│
├── backend/                 # Express backend API
│   ├── server.js           # Main server file
│   ├── deploy-backend.sh   # EC2 deployment script
│   ├── .env.template       # Environment variables template
│   └── package.json
│
├── aws/                    # AWS configuration files
│   ├── S3-SETUP.md        # S3 setup guide
│   ├── EC2-SETUP.md       # EC2 setup guide
│   ├── s3-bucket-policy.json
│   └── s3-cors-config.json
│
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git
- AWS Account with S3 and EC2 access

**AWS Credentials:**
Your AWS credentials are already configured:
- Access Key ID: AKIAVHPQ4U4H3B3IFYBV
- Secret Key: (stored securely)
- Region: us-east-1

**Note:** To use AWS CLI, install it from: https://aws.amazon.com/cli/
Then run: `aws configure` and enter your credentials when prompted.

### Local Development Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd Cloud-Project
```

#### 2. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Copy environment template
cp .env.template .env

# Edit .env with your configuration
# VITE_API_URL=http://localhost:5000

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

#### 3. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Copy environment template
cp .env.template .env

# Edit .env with your configuration
# PORT=5000
# NODE_ENV=development
# FRONTEND_URL=http://localhost:3000

# Start development server
npm run dev
```

The backend API will be available at `http://localhost:5000`

#### 4. Access the Application
Open your browser and navigate to `http://localhost:3000`

## 📝 Customization

### Update Personal Information

1. **Home Page** - `frontend/src/pages/Home/Home.jsx`
   - Change "Your Name" to your actual name
   - Already set to "AI Engineer"

2. **About Page** - `frontend/src/pages/About/About.jsx`
   - Skills already updated with AI/ML technologies
   - Customize your personal story

3. **Projects** - `frontend/src/data/projects.json`
   - Already updated with AI/ML project examples
   - Replace with your actual projects

4. **Contact Info** - Update social links in:
   - `frontend/src/components/Footer/Footer.jsx`
   - `frontend/src/pages/Contact/Contact.jsx`

### Modify Theme Colors

Edit CSS variables in `frontend/src/index.css`:

```css
:root {
  --accent-primary: #6366f1;    /* Primary accent color */
  --accent-secondary: #8b5cf6;  /* Secondary accent color */
  --bg-primary: #0a0a0f;        /* Background color */
  /* ... more variables */
}
```

## 🌐 AWS Deployment

### Prerequisites
- AWS account with billing enabled
- AWS CLI installed and configured
- EC2 key pair (.pem file)
- S3 bucket created

### Frontend Deployment (S3)

#### Windows Quick Deploy
```powershell
cd frontend
npm run build
.\deploy-frontend.bat your-portfolio-bucket-name
```

#### Manual S3 Setup
See detailed instructions in `aws/S3-SETUP.md`

1. Install AWS CLI: https://aws.amazon.com/cli/
2. Configure AWS CLI: `aws configure` (use your credentials)
3. Create S3 bucket and enable static hosting
4. Build frontend: `npm run build`
5. Upload: `aws s3 sync dist/ s3://your-bucket-name --delete`

### Backend Deployment (EC2)

#### Quick Deploy (Linux/Mac)
```bash
cd backend
chmod +x deploy-backend.sh
./deploy-backend.sh ec2-user@your-ec2-ip /path/to/key.pem
```

#### Manual EC2 Setup
See detailed instructions in [`aws/EC2-SETUP.md`](aws/EC2-SETUP.md)

1. Launch EC2 instance (Amazon Linux 2 or Ubuntu)
2. Configure security groups
3. Install Node.js and PM2
4. Deploy backend code
5. Configure environment variables
6. Start application with PM2

### Environment Variables for Production

**Frontend (.env):**
```env
VITE_API_URL=http://your-ec2-public-ip:5000
```

**Backend (.env):**
```env
PORT=5000
NODE_ENV=production
FRONTEND_URL=http://your-bucket-name.s3-website-us-east-1.amazonaws.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=recipient@example.com
```

## 📧 Email Configuration (Optional)

To enable email notifications for contact form submissions:

1. **Gmail Setup:**
   - Enable 2-factor authentication
   - Generate an app password: https://myaccount.google.com/apppasswords
   - Add to backend `.env`:
     ```env
     EMAIL_USER=your.email@gmail.com
     EMAIL_PASS=your-16-char-app-password
     EMAIL_TO=recipient@example.com
     ```

2. **Other Email Providers:**
   - Update `server.js` nodemailer configuration
   - Add provider-specific SMTP settings

## 🧪 Testing

### Frontend
```bash
cd frontend
npm run build    # Test production build
npm run preview  # Preview production build
```

### Backend
```bash
cd backend

# Test health endpoint
curl http://localhost:5000/api/health

# Test contact endpoint
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

## 📱 Pages Overview

### 🏠 Home
- Hero section with name and AI Engineer title
- Professional photo placeholder
- Call-to-action buttons

### 👤 About
- Personal story focused on AI/ML background
- Skills showcase: Python, C++, Java, Scikit-learn, Pandas, etc.
- Mission and approach to AI engineering

### 💼 Projects
- AI/ML project showcase
- Filterable by technology tags
- Links to code and demos

### 📬 Contact
- Contact form with backend validation
- Social media links
- Multiple contact methods

## 🎨 Design Features

- **Dark Theme** - Easy on the eyes with professional appearance
- **Gradient Accents** - Purple-blue gradients for visual interest
- **Glow Effects** - Subtle glows on hover for interactive elements
- **Smooth Transitions** - 0.2-0.5s transitions for polished feel
- **Responsive Grid** - CSS Grid for flexible layouts
- **Custom Scrollbar** - Styled to match theme
- **Animation** - Fade-in effects and hover transformations

## 🔧 Available Scripts

### Frontend
```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend
```bash
npm start        # Start production server
npm run dev      # Start development server with auto-reload
```

### Root Directory
```bash
npm run install:all       # Install all dependencies
npm run dev:frontend      # Start frontend dev server
npm run dev:backend       # Start backend dev server
npm run build:frontend    # Build frontend for production
```

## 🐛 Troubleshooting

### AWS CLI Not Installed
If you see "aws is not recognized", install AWS CLI:
1. Download from: https://aws.amazon.com/cli/
2. Install and restart terminal
3. Run: `aws configure`
4. Enter your Access Key ID and Secret Key

### Frontend not connecting to backend
- Verify `VITE_API_URL` in `frontend/.env`
- Check backend is running on port 5000
- Ensure CORS is properly configured

### Email not sending
- Verify email credentials in `backend/.env`
- Use Gmail app password (not regular password)
- Review backend logs for errors

## � Support

For questions or issues:
- Check the `aws/S3-SETUP.md` and `aws/EC2-SETUP.md` guides
- Review backend logs: `pm2 logs portfolio-api` (on EC2)
- Test API: `curl http://localhost:5000/api/health`

---

**Built with ❤️ for AI Engineers**
