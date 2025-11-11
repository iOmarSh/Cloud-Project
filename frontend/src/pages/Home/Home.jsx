import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const scrollToProjects = () => {
    window.location.href = '/projects'
  }

  return (
    <div className="home">
      <div className="home-container fade-in">
        <div className="home-content">
          <div className="home-text">
            <h2 className="home-greeting">Hi, I'm</h2>
            <h1 className="home-name">Your Name</h1>
            <h3 className="home-title">
              <span className="gradient-text">AI Engineer</span>
            </h3>
            <p className="home-description">
              Building intelligent systems that learn and adapt. Specializing in machine learning, 
              data science, and AI-driven solutions to solve complex real-world problems.
            </p>
            <div className="home-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                View Projects
              </button>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
          
          <div className="home-image">
            <div className="image-container">
              <div className="image-glow"></div>
              {/* 
                TO ADD YOUR IMAGE:
                1. Place your image in: frontend/public/images/profile.jpg
                2. The image will automatically appear here
                3. Supported formats: jpg, png, webp
                4. Recommended size: 500x500px or larger (square)
              */}
              <img 
                src="/images/profile.jpg" 
                alt="Profile" 
                className="profile-image"
                onError={(e) => {
                  // Show placeholder if image not found
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{display: 'none'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="home-scroll">
          <div className="scroll-indicator">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
