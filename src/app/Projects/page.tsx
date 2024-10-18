import React from "react"
import SingleProject from "@/components/SingleProject"
import styles from "./Projects.module.css"
import {
  dotEaterDescription,
  recipixDescription,

  IBMProjectOverview,
  IBMProjectDescriptions,
  twelveStepsDescription,
  slackApp,
  slackAppDescription,
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
          description = {slackAppDescription}
          additionalText={slackApp}
          last
        />
        <SingleProject
          projectName={"IBM - w3 Mobile Application"}
          description = {""}
          additionalText={mobile}
          last
        />
        <SingleProject
          projectName={"IBM - w3 Graph/w3 Homepage"}
          description = {""}
          additionalText={graphAndHomepage}
          last
        />
        <SingleProject
          projectName={"IBM - w3 Graph/w3 Homepage"}
          description = {""}
          additionalText={notificationsAndSettingsDescription}
          last
        />
        <SingleProject
          projectName={"IBM - w3 Notifications/w3 Settings"}
          description = {""}
          additionalText={notificationsAndSettingsDescription}
          last
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
          src="https://www.youtube.com/embed/oWoqoSWUoTA"
          // video={videos[1]}
        />
      </div>
      </>
  )
}

export default Projects
