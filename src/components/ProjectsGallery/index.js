import './index.scss'
import projectsList from '../Lists/projectsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectsGallery = () => {
    return(
    
        <div className="container projects-page">
            <h1>My Projects</h1>
            <div className="gallery-container">
                {projectsList.map((project) => (
                    <div className="project-card">
                        <img src={project.image} alt={project.name} />
                        <span className="project-name">{project.name}</span>
                        <a target="_blank" rel="noreferrer" href={project.link}>{project.linkName}</a>
                        <div className="skills-container">
                            {project.skills.map((skills) => (
                                 <span>{skills.icon} {skills.name}</span>
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

