import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['G', 'a', 'b', 'r', 'i', 'e', 'l', ' ', 'Z', 'a', 'n', 'e', 'l', 'l', 'a']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }
    , [])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <span className="my-name"> <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    </span>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={30}/>
                </h1>
                <h2>Frontend Developer / Data Analyst</h2>
            
            
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <div className="my-projects">
                <NavLink exact="true" activeclassname="active" className="projects-gallery" to='/projects-gallery'>
                    <span>MY PROJECTS <FontAwesomeIcon icon={faChevronRight} color="#ffd700"/></span>
                </NavLink>
                </div>
        </div>
    )
}

export default Home