import './index.scss'
import projectsList from '../Lists/projectsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJava, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const skillIcons = {
    HTML: faHtml5,
    CSS: faCss3,
    JAVASCRIPT: faJsSquare,
    SASS: faSass,
    REACT: faReact,
    JAVA: faJava,
  };

const ProjectsGallery = () => {
    return(
        <div className="container projects-page">
            <h1>My Projects</h1>
            <div className="gallery-container">
                {projectsList.map((project) => (
                    <div key={project.id} className="project-card">
                        <Link to={`/more-projects/${project.id}`} state={{project}}>
                        <img src={project.image} alt={project.name} />
                        <span className="project-name">{project.name}</span></Link>
                        <a target="_blank" rel="noreferrer" href={project.link}>{project.linkName}</a>
                        <div className="skills-container">
                            {project.skills.map(({name}) => (
                                 <span><FontAwesomeIcon icon={skillIcons[name]} color="#022c43"/> {name}</span>
                            ))}
                        </div>
                        <a target="_blank" rel="noreferrer" href={project.github}> <FontAwesomeIcon icon={faGithub} color="#022c43" /> Github</a>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ProjectsGallery

