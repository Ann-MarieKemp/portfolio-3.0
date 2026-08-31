import Link from 'next/link';
import styles from '../styles/ProjectLink.module.css'

interface ProjectLinkProps {
  linkTo: string;
  linkText: string;
  last?: boolean;
  variant?: "craft";
}

const ProjectLink = ({ linkTo, linkText, last, variant }: ProjectLinkProps) => {
  const className = [
    'category-link',
    styles['link-wrapper'],
    styles['link-container'],
    styles['fade-in'],
    last ? styles['last-row'] : '',
    variant === 'craft' ? styles['craft'] : '',
  ].filter(Boolean).join(' ')

  return (
    <Link className={className} href={linkTo}>
      {linkText}
    </Link>
  )
}

export default ProjectLink
