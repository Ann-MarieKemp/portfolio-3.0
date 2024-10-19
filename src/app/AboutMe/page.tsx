import React from "react"
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
      <div className="main-page-container">
        <p className="page-header">About Ann-Marie</p>
        <div className="description-text">
          <p>
          Ann-Marie is currently a software developer in the CIO organization at IBM building internal tools to support and increase IBMer productivity. She has served in technical leadership roles including leading a team to build a React Native application that is a companion to the internal IBM homepage as well as coordinating deployments of the intranet homepage across multiple teams. She has contributed to the internal IBM homepage through three iterations built in React and VueJS. She has helped to build a GraphQL layer combining multiple internal support applications to enable more efficient API calls from the application&apos;s frontend. She is a strong communicator and loves to spend time helping her colleagues troubleshoot technical issues.
          </p>
          <br />
          <p>
          Ann-Marie holds a degree in theatrical production design and technology from the University of Arizona with an emphasis in Sound Design. She began her theatrical career in New York City as a sound engineer and technician for theatrical productions working at some of the city's most famous off-broadway theaters including The Public Theater, Second Stage Theater and Playwrights Horizons. Highlights of her theatrical career included mixing the pre-broadway run of Fun Home at The Public, a revival of The Last Five Years directed by Jason Robert Brown at Second Stage, and working as a microphone technician at the Delacorte Theater in Central Park.
          </p>
          <br />
          <p>
          She has also worked as a broadcast sound engineer, working as a microphone technician and stage manager with NEP Group for Al Jazeera America as well as mixing a live nightly fashion broadcast for Amazon. She also spent a few years as a staff member at Thomson Reuters mixing nightly broadcasts for a news channel called i24 News. She has also mixed national broadcasts as a freelancer at other news stations including Fox News/Fox Business.
          </p>
          <br />
          <p>
              Ann-Marie lives in Arizona with her wonderful husband, her son, and her cat Carnival.
            </p>
          <br />
          <div className={styles['skills-container']}>
              <p className="sub-header-red">Technical Skills: <br/> TypeScript, JavaScript, React, React Native, VueJS, Node, Redux, HTML, CSS, Git, SQL, Express, Jest, Github, PostgreSQL, Cassandra, GraphQL, Jira, Travis, Jenkins, RAG, LangChain, NoSQL Databases </p>
              <br/>
            <p className="sub-header-red">Audio Technical Skills:
            <br/>
              Consoles: Calrec Sigma, DiGiCo SD9/10/11, SSL C100, Studer Vista 5, Cadac J-Type, Yamaha CL Series
            <br/>
              Software: Pro Tools, Logic, Qlab, AZ Edit, iNews, ENCO
            <br/>
              Other Skills: Dante certified, XLR/CAT5 termination, soldering
            </p>
          </div>
          </div>
      </div>
  )
}

export default AboutMe
