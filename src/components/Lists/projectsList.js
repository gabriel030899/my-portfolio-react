import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import comicreaders1 from '../../assets/images/comicreaders1.png'
import myportfolio from '../../assets/images/my-portfolio.png'


const projectsList = [
    {
        name: 'My Portfolio',
        link: 'https://www.gabrielzanella.com.br',
        linkName: 'gabrielzanella.com.br',
        skills: [
            {name:'HTML', icon: <FontAwesomeIcon icon={faHtml5} color="#022c43"/>}, 
            {name:'SASS', icon: <FontAwesomeIcon icon={faSass} color="#022c43"/>},
            {name:'REACT', icon: <FontAwesomeIcon icon={faReact} color="#022c43"/>}
        ],
        github: 'https://github.com/gabriel030899/my-portfolio-react',
        image: myportfolio
    },
    {
        name: 'Comic Readers',
        link: 'https://comicreaders.netlify.app/',
        linkName: 'comicreaders.netlify.app',
        skills: [
            {name:'HTML', icon: <FontAwesomeIcon icon={faHtml5} color="#022c43"/>}, 
            {name:'CSS', icon: <FontAwesomeIcon icon={faCss3} color="#022c43"/>},
            {name:'JAVASCRIPT', icon: <FontAwesomeIcon icon={faJsSquare} color="#022c43"/>}
        ],
        github: 'https://github.com/gabriel030899/comicreaders',
        image: comicreaders1
    }
]

export default projectsList