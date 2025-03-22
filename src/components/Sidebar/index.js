import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoG from '../../assets/images/G.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoG} alt='logo' />
        </Link>
        <p>Gabriel</p>
        <p>Zanella</p>
        <nav>
            <NavLink exact="true" activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color="#4e4e4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4e4e4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4e4e4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabrielzanella99/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4e4e4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.github.com/gabriel030899/">
                    <FontAwesomeIcon icon={faGithub} color="#4e4e4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://wa.me/5519999009796">
                    <FontAwesomeIcon icon={faWhatsapp} color="#4e4e4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar