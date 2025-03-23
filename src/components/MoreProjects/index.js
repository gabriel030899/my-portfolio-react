import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJsSquare, faReact, faSass, faJava } from '@fortawesome/free-brands-svg-icons'
import { useParams, useLocation, Link } from "react-router-dom";
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

const skillIcons = {
    HTML: faHtml5,
    CSS: faCss3,
    JAVASCRIPT: faJsSquare,
    SASS: faSass,
    REACT: faReact,
    JAVA: faJava,
  };


const MoreProjects = () => {
    const { id } = useParams();
    const location = useLocation();
    const project = location.state?.project;
    
    if (!project){
        return <div className="project-empty"><h2>Projeto não encontrado</h2></div>
    } else {
        return (
            <div key={id} className="more-projects">
                <Link className="back-to-projects" to={`/projects-gallery`}><FontAwesomeIcon icon={faLeftLong} className="back-button" color="#ffd700"/></Link>
                <div className="p-header">
                    <h1>{project.name}</h1>
                    <a target="_blank" rel="noreferrer" href={project.link}>{project.linkName}</a>
                </div>
                <div className="p-content">
                    <div className="p-image">
                        <img src={project.image} alt={project.name} />
                    </div>
                    <div className="p-description">
                        <p>{project.description}</p>
                        <a target="_blank" rel="noreferrer" href={project.github}> <FontAwesomeIcon icon={faGithub} /> Github</a>
                        <div className="skills-gallery">
                            {project.skills.map(({name}) => (
                                <span><FontAwesomeIcon icon={skillIcons[name]} color="#022c43"/> {name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default MoreProjects;