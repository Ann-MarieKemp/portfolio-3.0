import React from "react"
import styles from "@/styles/SingleProject.module.css";

interface SingleProjectProps {
  projectName: string;
  description?: string;
  github?: string;
  src?: string;
  additionalText?: string[];
  linkText?: string;
  deployLink?: string;
}

const SingleProject = ({projectName, description, github, src, additionalText, linkText, deployLink }: SingleProjectProps) => {
  return (
    <div className={styles['single-project-box']}>
      <div className={styles['link-title-align']}>
        <p className="sub-header-red-large">{projectName}</p>
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
      <p className={styles['project-github']}>{description}</p>
      {additionalText ? additionalText.map((description: string) => {
     return <p className={styles['project-github']} key={description}>- {description}</p>
      })
 : null}
      { src ? <iframe width="560" height="315" src={src}title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className={`${styles['video']}`}></iframe> : null }
    </div>
  )
}
export default SingleProject
