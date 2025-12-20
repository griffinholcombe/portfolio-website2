import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Griffin Holcombe</div>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Griffin</h1>
          <p className="hero-subtitle">Full-stack developer creating beautiful and functional web experiences</p>
          <a href="#projects" className="cta-button">View My Work</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About</h2>
          <p className="about-text">
            I'm a passionate developer with a love for creating clean, efficient code and intuitive user interfaces. 
            With experience in React, JavaScript, and modern web technologies, I enjoy building projects that solve 
            real-world problems. When I'm not coding, you can find me exploring new technologies or contributing to 
            open source projects.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2>Experience</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <h3>Senior Developer</h3>
              <p className="company">Tech Company Inc. • 2022 - Present</p>
              <ul>
                <li>Led development of React-based applications serving 10k+ users</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Optimized performance, reducing load times by 40%</li>
              </ul>
            </div>

            <div className="experience-card">
              <h3>Full Stack Developer</h3>
              <p className="company">StartUp Co. • 2020 - 2022</p>
              <ul>
                <li>Developed full-stack web applications using React and Node.js</li>
                <li>Implemented responsive designs and improved UX</li>
                <li>Collaborated with design and product teams</li>
              </ul>
            </div>

            <div className="experience-card">
              <h3>Junior Developer</h3>
              <p className="company">Digital Agency • 2019 - 2020</p>
              <ul>
                <li>Built responsive websites for clients</li>
                <li>Fixed bugs and improved existing features</li>
                <li>Learned modern web development practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>E-Commerce Platform</h3>
                <p className="tech-stack">React • Node.js • MongoDB</p>
              </div>
              <p className="project-description">
                A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">View Live</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Task Management App</h3>
                <p className="tech-stack">React • Firebase • Tailwind CSS</p>
              </div>
              <p className="project-description">
                A collaborative task management tool with real-time updates and team collaboration features.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">View Live</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Weather Dashboard</h3>
                <p className="tech-stack">React • API Integration • Chart.js</p>
              </div>
              <p className="project-description">
                Interactive weather dashboard with real-time data, forecasts, and beautiful visualizations.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">View Live</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Blog Platform</h3>
                <p className="tech-stack">React • Markdown • CSS Grid</p>
              </div>
              <p className="project-description">
                A modern blogging platform with markdown support, categories, and a clean reading experience.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">View Live</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>I'm always open to new opportunities and interesting projects. Feel free to reach out!</p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">Email</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Griffin Holcombe. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
