import React from 'react';
import './Skills.css'; // تأكد من أن المسار صحيح

const skills = [
    "Frontend Development","HTML5","CSS","Tailwind","Bootstrap 4 | 5","JavaScript - ES6","React.js","JSON - AJAX",".NET","Version Control","Git", "GitHub","Python","C#","C++","SQL","Problem Solving","LeaderShip","TeamWork"

];

const Projects = [
    "Frontend Web Page for E Commerce",
    "Frontend Web Page for Cafe",
    "Frontend Web Page for  Pizza Restaurant ",
    "Face Recognition Neural Network Project using Python and AI concepts",
    "Gym database system project",
    "Obstacle avoiding car",
    "Fingerprint Device Attendance and Exit",
    "Smart Home Project",
    "Amplifier Sound System",
];

const Skills = () => {
    return (
        <div id="skills" className="skills-section"> {/* إضافة الكلاس هنا */}
            <h2>Skills</h2>
            <p>I am proficient and open to several programming languages, these are some of the ones I use the most.</p>
            <div className="skills-list"> {/* إضافة الكلاس هنا */}
                {skills.map((skill, index) => (
                    <span key={index} className="skill"> {/* إضافة الكلاس هنا */}
                        {skill}
                    </span>
                ))}
            </div>
            <h2>Projects</h2>
            <p>These are some samples of the work I've done so far.</p>
            <div className="projects-list"> {/* إضافة الكلاس هنا */}
                {Projects.map((project, index) => (
                    <span key={index} className="project"> {/* إضافة الكلاس هنا */}
                        {project}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Skills;
