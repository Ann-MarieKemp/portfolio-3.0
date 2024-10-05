import React from "react"
import SingleProject from "@/components/SingleProject"
import styles from "./Projects.module.css"
import {
  dotEaterDescription,
  recipixDescription,
  rateYourRepDescription,
  IBMProjectOverview,
  IBMProjectDescriptions,
  twelveStepsDescription
} from "@/constants/projectvariables"

const Projects = () => {
  return (
    <>
      <p className="page-header">Projects </p>
      <div className={styles['all-projects-box']}>
        <SingleProject
          projectName={"IBM Software Developer"}
          description={IBMProjectOverview}
          additionalText={IBMProjectDescriptions}
        />
        <SingleProject
          projectName={"12Steps.video"}
          description={twelveStepsDescription}
        />
        <SingleProject
          projectName={"Dot Eater"}
          github={"https://github.com/Team-Blade/Capstone-Project"}
          description={dotEaterDescription}
          linkText="Play The Game!"
          deployLink="http://dot-eater.herokuapp.com/"
          src="https://www.youtube.com/embed/3pskwXDw2nQ"
          // video={videos[0]}
        />
        <SingleProject
          projectName={"Recipix"}
          github="https://github.com/Ann-MarieKemp/Recipix"
          description={recipixDescription}
          last
          src="https://www.youtube.com/embed/oWoqoSWUoTA"
          // video={videos[1]}
        />
      </div>
      </>
  )
}

export default Projects
