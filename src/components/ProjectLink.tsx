import { Link } from 'react-router-dom';
import styles from '../styles/ProjectLink.module.css'

interface ProjectLinkProps {
  linkTo: string;
  linkText: string;
  last?: boolean;
}

const ProjectLink = ({ linkTo, linkText, last}: ProjectLinkProps) => {
  return (
    <Link className={styles['category-link']} to={linkTo}>
      <button
        tabIndex={-1}
        className={last ? "link-container fade-in last-row" : "link-container fade-in"}
      >{linkText}
      </button>
    </Link>
  )
}

export default ProjectLink
