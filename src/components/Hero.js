import React from "react";
import './hero.css';
import img from "../images/yo.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm Youssef George</h1>
        <p>Frontend Developer | React.js</p>
        <a href="#contact" className="cta-button">Contact Me</a>
      </div>
      
      <div className="hero-image">
        <img src={img} alt="Youssef George" />
      </div>
    </section>
  );
}

export default Hero;
