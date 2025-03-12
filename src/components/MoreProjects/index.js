import './index.scss'
import comicreaders1 from '../../assets/images/comicreaders1.png'
import comicreaders2 from '../../assets/images/comicreaders2.png'
import logoHtml from '../../assets/images/logo1.png'
import logoCss from '../../assets/images/logo2.png'
import logoJs from '../../assets/images/logo3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const MoreProjects = () => {
    return (
        <div className="more-projects">
            <div className="comic-readers">
                <div className="project-header">
                    <div className="project-title">
                        <h2>Comic Readers</h2>
                        <a target='_blank' rel="noreferrer" href='https://comicreaders.netlify.app/'><span>comicreaders.netlify.app</span></a>
                    </div>
                    <div className="next_project">
                        
                    </div>
                    
                </div>
                <div className="project-body">
                    <div className="project-images">
                        <img className="image-pos-1" src={comicreaders1} alt="Comic Readers 1" />
                        <img className="image-pos-2" src={comicreaders2} alt="Comic Readers 2" />
                    </div>
                    <div className="project-description">
                        <div className="project-description-text">
                            <h3>Project Description</h3>
                            <p>I developed Comic Readers, a website designed to enhance the user experience in book searches. Using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, I created an intuitive interface with advanced filters that make searches faster and more efficient. Additionally, I developed a book recommendation algorithm that suggests options based on user choices, creating a dynamic and personalized experience. This solution offers multiple combinations of suggestions, making it easier to choose books that match the user's interests. The project not only improves interaction but also integrates features that make the literary discovery process more engaging and accurate.</p>
                            <FontAwesomeIcon icon={faGithub} /> <a target='_blank' rel="noreferrer" href='https://github.com/gabriel030899/comicreaders'>Github repository</a>
                        </div>
                        <div className="project-description-tech">
                        <h3>Project Technologies</h3>
                            <div className="tech-percentage">
                                <img src={logoHtml} alt="HTML" />
                                <div className="percentage-bar">
                                    <div className="percentage-fill" style={{width: '9.8%'}}></div>
                                </div>
                            </div>
                            <div className="tech-percentage">
                                <img src={logoCss} alt="CSS" />
                                <div className="percentage-bar">
                                    <div className="percentage-fill" style={{width: '15.7%'}}></div>
                                </div>
                            </div>
                            <div className="tech-percentage">
                                <img src={logoJs} alt="JAVASCRIPT" />
                                <div className="percentage-bar">
                                    <div className="percentage-fill" style={{width: '74.5%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreProjects;