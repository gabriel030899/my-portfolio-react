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
                <p>
                I am a <b>Data Analyst</b> and <b>Front-End Web Developer</b>, currently working as a Mid Level Data Analyst at NBS Latam, where I develop applications and software using Microsoft's Power Platform (<b>Power BI</b>, <b>Power Apps</b>, and <b>Power Automate</b>), optimizing processes and improving operational efficiency. I work directly with clients and stakeholders to define requirements, model process flows, and develop mockups, applying agile methodologies such as SCRUM.</p>
                <p>My expertise extends beyond the Power Platform. I have solid knowledge in web development, with proficiency in <b>HTML</b>, <b>CSS</b>, <b>Javascript</b>, <b>React.js</b>, <b>Typescript</b>, <b>Next.js</b>, <b>PHP</b>, and <b>Python</b>.</p>
                <p>I am pursuing a Bachelor’s degree in Systems Analysis and Development at Universidade Paulista, expected to graduate in 2026. I believe in the power of collaboration, communication, and continuous learning to drive innovation and create a positive impact on the projects I work on.</p>
                <h2>Skills & Experience</h2>
                <ul>
                    <li>✅ Power BI, Power Apps, Power Automate</li>
                    <li>✅ HTML, CSS, JavaScript, ReactJS, TypeScript, Next.js</li>
                    <li>✅ PHP, Python, SQL, Azure</li>
                    <li>✅ Agile Methodologies (SCRUM)</li>
                    <li>✅ Data Analysis and Process Automation</li>
                    <li>✅ UX/UI, Prototyping, and Process Modeling</li>
                </ul>
                
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