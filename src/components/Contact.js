import React from 'react';
import { FaLinkedin, FaGithub, FaFileAlt, FaWhatsapp } from 'react-icons/fa'; // استيراد الأيقونات
import img from "../images/yc.png";


function Contact() {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>     
      
      

      <div className="contact-image">
        <img src={img} alt="Youssef George" />
      </div>


      
      <div className="contact-icons">
        {/* رابط LinkedIn */}
        <a href="https://www.linkedin.com/in/youssef-george-0ba509298/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={50} />
        </a>

        {/* رابط GitHub */}
        <a href="https://github.com/youssef-george" target="_blank" rel="noopener noreferrer">
          <FaGithub size={50} />
        </a>

        {/*   cv */}
        <a href="https://drive.google.com/file/d/178pLpPbuSPBCCeSqBe-MYc0m42XNO75m/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <FaFileAlt size={50} />
        </a>
        
        {/*   whatsapp */}
        <a href="https://wa.me/+201277970458" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={50} />
        </a>
      </div>
      
    </section>
  );
}

export default Contact;
