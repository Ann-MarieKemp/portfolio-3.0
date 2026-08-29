import React from "react"
import SingleProject from "@/components/SingleProject"
import styles from "./Projects.module.css"
import {
  dotEaterDescription,
  recipixDescription,
  twelveStepsDescription,
  slackApp,
  mobile,
  graphAndHomepage,
  notificationsAndSettingsDescription
} from "@/constants/projectvariables"

const Projects = () => {
  return (
    <>
      <p className="page-header">Projects </p>
      <div className={styles['all-projects-box']}>
      <SingleProject
          projectName={"IBM - IT Support Slack Application"}
          description={""}
          additionalText={slackApp}
        />
        <SingleProject
          projectName={"IBM - w3 Mobile Application"}
          description = {""}
          additionalText={mobile}
        />
        <SingleProject
          projectName={"IBM - w3 Graph/w3 Homepage"}
          additionalText={graphAndHomepage}
        />
        <SingleProject
          projectName={"IBM - w3 Notifications/w3 Settings"}
          additionalText={notificationsAndSettingsDescription}
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
