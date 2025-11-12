import './About.css'

const About = () => {
  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'C++', icon: '⚙️' },
    { name: 'Java', icon: '☕' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'Scikit-learn', icon: '🤖' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'Matplotlib', icon: '📊' },
    { name: 'Machine Learning', icon: '🧠' },
    { name: 'Data Science', icon: '📈' },
    { name: 'Computer Vision', icon: '👁️' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Flutter', icon: '📱' },
  ]

  return (
    <div className="about section">
      <div className="container fade-in">
        <div className="about-header">
          <h2>About Me</h2>
          <div className="header-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>My Story</h3>
              <p>
                I'm a passionate AI engineer with a deep fascination for building intelligent 
                systems that can learn, adapt, and solve complex problems. My journey in artificial 
                intelligence began with exploring machine learning algorithms, and it has evolved 
                into a career dedicated to creating impactful AI-driven solutions.
              </p>
              <p>
                With expertise in machine learning, data science, and computer vision, I specialize 
                in developing AI models that deliver real-world value. From predictive analytics to 
                intelligent automation, I focus on building solutions that are both powerful and practical. 
                I believe in data-driven decision making and continuous learning in this rapidly evolving field.
              </p>
              <p>
                When I'm not training models, you'll find me exploring cutting-edge AI research, 
                experimenting with new frameworks, or contributing to the AI community. I'm always 
                excited to tackle challenging problems and push the boundaries of what's possible with AI.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <h4>Mission</h4>
                <p>Building solutions that make a difference</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">💡</div>
                <h4>Approach</h4>
                <p>Clean code, innovative thinking</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <h4>Goal</h4>
                <p>Continuous learning and growth</p>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <div className="skills-card">
              <h3>Tech Stack</h3>
              <p className="skills-intro">
                Technologies and tools I work with to bring ideas to life
              </p>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="skill-item"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
