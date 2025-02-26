import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Fiona Mutiso Kasoa</h1>
        <p>Software Developer | UI/UX Enthusiast | Blockchain Innovator</p>
      </header>
      
      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>
            I am a passionate software developer specializing in UI/UX design, web development, 
            and blockchain technology. I strive to create intuitive, user-friendly digital experiences 
            that make a difference.
          </p>
        </section>

        <section className="skills">
          <h2>Technical Skills</h2>
          <ul>
            <li>UI/UX Design (Figma, Adobe XD, Wireframing, Prototyping)</li>
            <li>Front-End Development (React.js, HTML, CSS, JavaScript)</li>
            <li>Back-End Development (Node.js, Express.js, Databases)</li>
            <li>Blockchain Development (Internet Computer Protocol - ICP)</li>
          </ul>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li><strong>Mental Health Awareness Web App</strong> - A platform to promote mental wellness.</li>
            <li><strong>Hospital-Patient Management System</strong> - A system linking hospitals, doctors, and patients.</li>
            <li><strong>Portfolio Website</strong> - A personal website showcasing my work and skills.</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>Contact: <a href="+254796494683" target="_blank" rel="nooener noreferrer">+254796494683</a></p>
          <p>Email: <a href="mailto:fionamutiso83@gmail.com">fionamutiso83@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/hackmugisii" target="_blank" rel="noopener noreferrer">github.com/hackmugisii</a></p>

        </section>
      </main>
    </div>
  );
}

export default App;
