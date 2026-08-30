import React from "react"
import styles from "@/styles/SingleProject.module.css";
import experienceStyles from "@/styles/ExperienceEntry.module.css";

interface SingleProjectProps {
  projectName: string;
  description?: string;
  github?: string;
  src?: string;
  bullets?: string[];
  linkText?: string;
  deployLink?: string;
  tags?: string[];
}

const SingleProject = ({projectName, description, github, src, bullets, linkText, deployLink, tags }: SingleProjectProps) => {
  return (
    <div className={styles['single-project-box']}>
      <div className={styles['link-title-align']}>
        <h3 className="sub-header-red-large">{projectName}</h3>
        <div className={styles['project-link-container']}>
          {deployLink ? (
            <a
              className={styles['project-github']}
              target="_blank"
              rel="noopener noreferrer"
              href={deployLink}
            >
              {linkText || "View"}
            </a>
          ) : null}
          {github ? (
            <a
              className={styles['project-github']}
              target="_blank"
              rel="noopener noreferrer"
              href={github}
            >
              Github
            </a>
          ) : null}
        </div>
      </div>
      {tags && tags.length > 0 ? (
        <div className={styles['project-tags']}>
          {tags.map((tag) => (
            <span className="tag-chip" key={tag}>{tag}</span>
          ))}
        </div>
      ) : null}
      <p className={styles['project-github']}>{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className={experienceStyles['experience-bullets']}>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      { src ? <iframe width="560" height="315" src={src}title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className={`${styles['video']}`}></iframe> : null }
    </div>
  )
}
export default SingleProject
