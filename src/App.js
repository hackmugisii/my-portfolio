import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Fiona Mutiso Kasoa</h1>
        <p>Software Developer | Blockchain Enthusiast</p>
      </header>
      <main>
        <section className="content">
          <h2>About Me</h2>
          <p>
            Passionate software developer with experience in web and blockchain
            technologies. Enthusiastic about building innovative solutions for
            healthcare and mental health awareness.
          </p>
          <h2>Skills</h2>
          <ul>
            <li>React.js & JavaScript</li>
            <li>Node.js & Express</li>
            <li>Blockchain Development (ICP)</li>
            <li>UI/UX Design</li>
          </ul>
          <h2>Projects</h2>
          <ul>
            <li>Mental Health Awareness Campaign Web App</li>
            <li>Hospital-Patient Management System</li>
            <li>Personal Portfolio</li>
          </ul>
          <h2>Contact</h2>
          <p>Email: fiona@example.com</p>
          <p>GitHub: github.com/fiona</p>
          <p>LinkedIn: linkedin.com/in/fiona</p>
        </section>
      </main>
    </div>
  );
}

export default App;
