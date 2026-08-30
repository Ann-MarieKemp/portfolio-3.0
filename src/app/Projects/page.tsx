import React from "react"
import SingleProject from "@/components/SingleProject"
import ExperienceEntry from "@/components/ExperienceEntry"
import styles from "./Projects.module.css"
import {
  dotEaterDescription,
  recipixDescription,
  twelveStepsDescription,
  centeneLeadDescription,
  centeneSeniorDescription,
  ibmBand07Description,
  ibmBand06Description
} from "@/constants/projectvariables"

const Projects = () => {
  return (
    <>
      <p className="page-header">Experience</p>
      <div className={styles['experience-section']}>
        <ExperienceEntry
          role="Lead Application Development Engineer"
          company="Centene"
          dates="Sept 2025 - Present"
          bullets={centeneLeadDescription}
        />
        <ExperienceEntry
          role="Senior Application Development Engineer"
          company="Centene / Apex Systems"
          dates="Jan 2025 - Sept 2025"
          bullets={centeneSeniorDescription}
        />
        <ExperienceEntry
          role="Software Developer, Band 07"
          company="IBM"
          dates="Oct 2021 - Jan 2025"
          bullets={ibmBand07Description}
        />
        <ExperienceEntry
          role="Software Developer, Band 06"
          company="IBM"
          dates="Aug 2020 - Oct 2021"
          bullets={ibmBand06Description}
        />
      </div>

      <p className={`page-header ${styles['projects-header']}`}>Projects</p>
      <div className={styles['all-projects-box']}>
        <SingleProject
          projectName={"Dot Eater"}
          description={dotEaterDescription}
          github={"https://github.com/Team-Blade/Capstone-Project"}
          linkText="Play The Game!"
          deployLink="http://dot-eater.herokuapp.com/"
          src="https://www.youtube.com/embed/3pskwXDw2nQ"
        />
        <SingleProject
          projectName={"Recipix"}
          github="https://github.com/Ann-MarieKemp/Recipix"
          description={recipixDescription}
          src="https://www.youtube.com/embed/oWoqoSWUoTA"
        />
        <SingleProject
          projectName={"12Steps.video"}
          description={twelveStepsDescription}
        />
      </div>
    </>
  )
}

export default Projects
