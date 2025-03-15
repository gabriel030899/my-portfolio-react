import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSwift } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
            setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
        }
        , [])

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>Sobre
                I am a Data Analyst and Web Developer, currently working as a Mid Level Data Analyst at NBS Latam, where I develop applications and software using Microsoft's Power Platform (Power BI, Power Apps, and Power Automate), optimizing processes and improving operational efficiency. I work directly with clients and stakeholders to define requirements, model process flows, and develop mockups, applying agile methodologies such as SCRUM.</p>
                <p>My expertise extends beyond the Power Platform. I have solid knowledge in web development, with proficiency in HTML, CSS, JavaScript, ReactJS, TypeScript, Next.js, PHP, and Python.</p>
                <p>I am pursuing a Bachelor’s degree in Systems Analysis and Development at Universidade Paulista, expected to graduate in 2026. I believe in the power of collaboration, communication, and continuous learning to drive innovation and create a positive impact on the projects I work on.
                Skills & Experience
                ✅ Power BI, Power Apps, Power Automate
                ✅ HTML, CSS, JavaScript, ReactJS, TypeScript, Next.js
                ✅ PHP, Python, SQL, Azure
                ✅ Web Development
                ✅ Agile Methodologies (SCRUM)
                ✅ Data Analysis and Process Automation
                ✅ UX/UI, Prototyping, and Process Modeling
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faSwift} color="#E06529"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;