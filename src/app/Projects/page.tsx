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
          additionalText={graphAndHomepage}
          last
        />
        <SingleProject
          projectName={"IBM - w3 Graph/w3 Homepage"}
          additionalText={notificationsAndSettingsDescription}
          last
        />
        <SingleProject
          projectName={"IBM - w3 Notifications/w3 Settings"}
          additionalText={notificationsAndSettingsDescription}
          last
        />
      <SingleProject
          projectName={"Dot Eater"}
          github={"https://github.com/Team-Blade/Capstone-Project"}
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
