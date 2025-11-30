import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Hi, I'm Owen 👋</h1>
        <p>Software Developer | Java | Web3 Enthusiast</p>
        <a href="mailto:keowen375@gmail.com" className="btn">Get In Touch</a>
      </header>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer skilled in building modern web apps,
          backends, and exploring Web3. I love solving problems and creating
          impactful software solutions.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Java</li>
          <li>Spring Boot</li>
          <li>React</li>
          <li>Web3</li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project">
          <h3>Insurance Management System</h3>
          <p>
            A Java + Spring Boot project for managing vehicle insurance
            policies with JWT authentication.
          </p>
          <a href="https://github.com/your-username/insurance-system" target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </div>

        <div className="project">
          <h3>Crypto Trading Dashboard</h3>
          <p>
            A dashboard that tracks meme coins using RSI and support/resistance
            strategies.
          </p>
          <a href="https://github.com/your-username/crypto-dashboard" target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>
        <div className="links">
          <span className="email">keowen375@gmail.com</span>
          <a href="https://github.com/keowen375" target="_blank" rel="noreferrer" className="contact-link">github.com/keowen375</a>
          <a href="https://www.linkedin.com/in/michael-owen-2a869424b" target="_blank" rel="noreferrer" className="contact-link">linkedin.com/in/michael-owen-2a869424b</a>
        </div>
      </section>
    </div>
  );
}

export default App;
