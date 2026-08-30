import React from "react"
import type { Metadata } from "next"
import SingleProject from "@/components/SingleProject"
import styles from "./Projects.module.css"
import {
  dotEaterDescription,
  recipixDescription,
  twelveStepsDescription,
  dotEaterTags,
  recipixTags,
  twelveStepsTags,
  dotEaterBullets,
  twelveStepsBullets,
  recipixBullets,
} from "@/constants/projectvariables"

export const metadata: Metadata = {
  title: "Projects — Ann-Marie Kemp",
  description: "Personal software projects built by Ann-Marie Kemp.",
}

const Projects = () => {
  return (
    <div className="main-page-container">
      <h1 className="page-header">Projects</h1>
      <div className={styles['projects-grid']}>
        <SingleProject
          projectName={"Dot Eater"}
          description={dotEaterDescription}
          bullets={dotEaterBullets}
          github={"https://github.com/Team-Blade/Capstone-Project"}
          src="https://www.youtube.com/embed/3pskwXDw2nQ"
          tags={dotEaterTags}
        />
        <SingleProject
          projectName={"Recipix"}
          github="https://github.com/Ann-MarieKemp/Recipix"
          description={recipixDescription}
          bullets={recipixBullets}
          src="https://www.youtube.com/embed/oWoqoSWUoTA"
          tags={recipixTags}
        />
        <SingleProject
          projectName={"12Steps.video"}
          description={twelveStepsDescription}
          bullets={twelveStepsBullets}
          deployLink="https://www.12steps.video/en/"
          linkText="Visit Site"
          tags={twelveStepsTags}
        />
      </div>
    </div>
  )
}

export default Projects
