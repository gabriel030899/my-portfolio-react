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
                <p>I am a Data Analyst and Web Developer passionate about creating digital solutions that optimize processes and improve efficiency. Currently, I work as a PL Data Analyst at NBS Latam, where I develop applications and software using Microsoft's Power Platform, with expertise in <b>Power BI</b>, <b>Power Apps</b>, and <b>Power Automate</b>. I collaborate directly with clients and partners to define requirements, process flows, and mockups, applying agile methodologies such as SCRUM.</p>
                <p>In addition to the Power Platform, I have extensive knowledge in <b>HTML</b>, <b>CSS</b>, <b>Javascript</b>, <b>React.js</b>, <b>PHP</b>, <b>Python</b>, <b>Swift</b>, and <b>SwiftUI</b>, which allows me to think creatively and offer innovative approaches to problem-solving. 
Currently, I am expanding my skills in iOS Development and ReactJS at CodeCademy and have certifications in PHP, HTML, and JavaScript from DevMedia. 
I am pursuing a Bachelor's degree in Systems Analysis and Development at Universidade Paulista, with an expected graduation date in 2026.</p>
                <p>I enjoy working in a team, believing in the power of knowledge exchange, communication, and collaboration to achieve organizational goals.</p>
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