import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const MoreProjects = () => {
  return (
    <div className="more-projects">
      <span>MY PROJECTS <FontAwesomeIcon icon={faChevronRight} color="#ffd700"/>
      </span>
    </div>
  );
};

export default MoreProjects;