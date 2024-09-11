import React from 'react';
import { FaLinkedin, FaGithub, FaFileAlt, FaWhatsapp } from 'react-icons/fa'; // استيراد الأيقونات

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        {/* رابط LinkedIn */}
        <a href="https://www.linkedin.com/in/youssef-george-0ba509298/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={50} />
        </a>

        {/* رابط GitHub */}
        <a href="https://github.com/youssef-george" target="_blank" rel="noopener noreferrer">
          <FaGithub size={50} />
        </a>

        {/*   whatsapp  */}
        <a href="https://drive.google.com/file/d/1e5_fqQGTllKbOTiLppvK6KgfKFXXKijG/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <FaFileAlt size={50} />
        </a>
        
        <a href="https://wa.me/+201277970458" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={50} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
