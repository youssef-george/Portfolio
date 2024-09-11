import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm Youssef George</h1>
        <p>Frontend Developer | React.js</p>
        <a href="#contact" className="cta-button">Contact Me</a>
      </div>
      
      <div className="hero-image">
        <img src="public\yo.png" alt="Youssef George" /> {/* تأكد من أن الصورة في public */}
      </div>
    </section>
  );
}

export default Hero;
