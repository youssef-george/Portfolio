import React from 'react';
import '../App.css';

function About() {
  return (

    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>Proficient in HTML, CSS, and JavaScript.</p>
          <p>Skilled in transforming design concepts into functional websites and web applications.</p>
          <p>I have experience with React and some knowledge of Vue and Angular frontend frameworks.</p>
          <p>Focus on creating visually appealing and user-friendly interfaces.</p>
          <p>Expertise in optimizing website performance and responsiveness.</p>
          <p>Detail-oriented with a strong emphasis on clean and maintainable code.</p>
          <p>Ability to handle multiple projects, meet deadlines, and adapt to changing priorities.</p>
          <p>Committed to continuous learning and staying up-to-date with industry trends.</p>
          <a href="https://drive.google.com/file/d/1CCE24-n8vDOUoUJAvtflneEC5T-zUaHZ/view?usp=sharing" 
          className="cv-button" target="_blank" rel="noopener noreferrer">
            Check My CV
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;
