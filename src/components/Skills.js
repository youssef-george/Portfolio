import React from 'react';
import './Skills.css';
import { FaLink } from 'react-icons/fa';

const technicalSkills = [
    { name: "Frontend Development", link: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259520&code=Gek7vD8gKi&qrcode=1", level: 90 },
    { name: "HTML5", level: 100 },
    { name: "CSS", level: 100 },
    { name: "WordPress", level: 95 },
    { name: "Tailwind", level: 75 },
    { name: "Bootstrap 4 | 5", level: 70 },
    { name: "JavaScript - ES6", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 60 },
    { name: ".NET", level: 65 },
    { name: "Version Control", level: 100 },
    { name: "Git", level: 100 },
    { name: "GitHub", level: 100 },
    { name: "Python", level: 80 },
    { name: "C#", level: 65 },
    { name: "C++", level: 60 },
    { name: "SQL", level: 70 }
];

const softSkills = [
    { name: "Problem Solving" },
    { name: "Leadership" },
    { name: "Teamwork" },
    { name: "Communication" },
    { name: "Time Management" },
    { name: "Adaptability" },
    { name: "Creativity" },        
    { name: "Critical Thinking" }  
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
    {
        name: "Frontend Web Page for Cafe",
        link: "https://youssef-george.github.io/ReactProject/"
    },
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
            <p>I Am Proficient In A Variety of Technical & Soft Skills.</p>
            
            <div className="skills-column">
                <h3>Technical Skills</h3>
                <div className="skills-list">
                    {technicalSkills.map((skill, index) => (
                        <div key={index} className="skill">
                            <span style={{ flex: '1', textAlign: 'left' }}>
                                {skill.name}
                                {skill.link && (
                                    <a href={skill.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px', color: '#007bff' }}>
                                        <FaLink />
                                    </a>
                                )}
                            </span>
                            <div className="progress-bar" style={{ width: '50%', marginLeft: '20px' }}>
                                <div className="progress" style={{ width: `${skill.level}%`, height: '20px', backgroundColor: 'green' }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skills-column" style={{ marginTop: '30px' }}>
                <h3>Soft Skills</h3>
                <div className="skills-list">
                    {softSkills.map((skill, index) => (
                        <span key={index} className="skill" style={{ display: 'block', marginBottom: '10px' }}>
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>

            <h1 style={{ marginTop: '40px' }}>Projects</h1>
            <p>These are some samples of the work I've done so far.</p>
            <div id="projects" className="projects-list">
                {Projects.map((project, index) => (
                    <span key={index} className="project" style={{ display: 'block', marginBottom: '10px' }}>
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
