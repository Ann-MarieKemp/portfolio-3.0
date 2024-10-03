import Link from 'next/link';
import styles from '../styles/ProjectLink.module.css'

interface ProjectLinkProps {
  linkTo: string;
  linkText: string;
  last?: boolean;
}

const ProjectLink = ({ linkTo, linkText, last}: ProjectLinkProps) => {
  return (
    <Link className="category-link" href={linkTo}>
      <button
        tabIndex={-1}
        className={last ? `${styles['link-container']} ${styles['fade-in']} ${styles['last-row']}` : `${styles['link-container']} ${styles['fade-in']}`}
      >{linkText}
      </button>
    </Link>
  )
}

export default ProjectLink
