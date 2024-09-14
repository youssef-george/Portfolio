import React from 'react';
import './Skills.css'; // تأكد من أن المسار صحيح
import { FaLink } from 'react-icons/fa'; // استيراد أيقونة الرابط من react-icons

const technicalSkills = [
    { name: "Frontend Development", link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259520&code=Gek7vD8gKi&qrcode=1" },
    { name: "HTML5" },
    { name: "CSS" },
    { name: "Tailwind" },
    { name: "Bootstrap 4 | 5" },
    { name: "JavaScript - ES6" },
    { name: "React.js" },
    { name: "JSON - AJAX" },
    { name: "Next.js" },
    { name: ".NET" },
    { name: "Version Control" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Python" },
    { name: "C#" },
    { name: "C++" },
    { name: "SQL" }
];

const softSkills = [
    { name: "Problem Solving" },
    { name: "Leadership" },
    { name: "Teamwork" },
    { name: "Communication" },
    { name: "Time Management" },
    { name: "Adaptability" },
    { name: "Creativity" },        // إضافة Creativity
    { name: "Critical Thinking" }  // إضافة Critical Thinking
];

const Projects = [
    {
        name: "Frontend Web Page for Portfolio",
        link: "https://youssef-george.github.io/Portfolio/"
    },
    {
        name: "Frontend Web Page for E-Commerce",
        link: "https://youssef-george.github.io/Ecommerce/"
    },
    {
        name: "Frontend Web Page for To-Do App",
        link: "https://youssef-george.github.io/To-Do-App/"
    },
    { name: "Frontend Web Page for Cafe" },
    { name: "Frontend Web Page for Pizza Restaurant" },
    { name: "Face Recognition Neural Network Project using Python and AI concepts" },
    { name: "Gym database system project" },
    { name: "Obstacle avoiding car" },
    { name: "Fingerprint Device Attendance and Exit" },
    { name: "Smart Home Project" },
    { name: "Amplifier Sound System" }
];

const Skills = () => {
    return (
        <div id="skills" className="skills-section">
            <h1>Skills</h1>
            <p>I am proficient in a variety of technical and soft skills.</p>
            <div className="skills-container">
                {/* قائمة المهارات التقنية */}
                <div className="skills-column">
                    <h3>Technical Skills</h3>
                    <div className="skills-list">
                        {technicalSkills.map((skill, index) => (
                            <span key={index} className="skill" style={{ display: 'flex', alignItems: 'center' }}>
                                {skill.name}
                                {skill.link && (
                                    <a href={skill.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px', color: '#007bff' }}>
                                        <FaLink />
                                    </a>
                                )}
                            </span>
                        ))}
                    </div>
                </div>

                {/* قائمة المهارات الشخصية */}
                <div className="skills-column">
                    <h3>Soft Skills</h3>
                    <div className="skills-list">
                        {softSkills.map((skill, index) => (
                            <span key={index} className="skill" style={{ display: 'flex', alignItems: 'center' }}>
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <h1>Projects</h1>
            <p>These are some samples of the work I've done so far.</p>
            <div id="projects" className="projects-list">
                {Projects.map((project, index) => (
                    <span key={index} className="project" style={{ display: 'flex', alignItems: 'center' }}>
                        {project.name}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px', color: '#007bff' }}>
                                <FaLink />
                            </a>
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Skills;
