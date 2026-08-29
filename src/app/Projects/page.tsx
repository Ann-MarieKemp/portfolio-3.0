import React from "react"
import SingleProject from "@/components/SingleProject"
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
      <p className="page-header">Projects </p>
      <div className={styles['all-projects-box']}>
      <SingleProject
          projectName={"Centene - Lead Application Development Engineer (Sept 2025 - Present)"}
          additionalText={centeneLeadDescription}
        />
      <SingleProject
          projectName={"Centene / Apex Systems - Senior Application Development Engineer (Jan 2025 - Sept 2025)"}
          additionalText={centeneSeniorDescription}
        />
      <SingleProject
          projectName={"IBM - Software Developer, Band 07 (Oct 2021 - Jan 2025)"}
          additionalText={ibmBand07Description}
        />
        <SingleProject
          projectName={"IBM - Software Developer, Band 06 (Aug 2020 - Oct 2021)"}
          additionalText={ibmBand06Description}
        />
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
