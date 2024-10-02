import React from "react"
import styles from "./page.module.css";
import ProjectLink from "@/components/ProjectLink";
// import ProjectLink from "../components/ProjectLink"
// import usePortfolioPhoto from "../hooks/usePortfolioPhoto"

const Home =  () => {
  // const portfolioPhoto = usePortfolioPhoto()
  return (
    <div className="main-page-container" >
      <h1 className="main-page-header">Hello, my name is Ann-Marie Kemp</h1>
      <div className={`${styles['about-me-tag']} ${styles['index']}`}>
        <p>
          I am a <span className={styles['fade-in']}>Full Stack Software Developer</span> who enjoys <span className={styles['fade-in']}>troubleshooting</span>, <span className={styles['fade-in']}>testing</span> and <span className={styles['fade-in']}>documentation</span>.
        </p>
        <div className={styles['mainpage-project-link-container']}>
          <ProjectLink
            linkTo="/AboutMe"
            linkText="About Ann-Marie"
          />
          {/* <ProjectLink
            linkTo="/Projects"
            linkText="Projects"
          />
          <ProjectLink
            linkTo="/Crafts"
            linkText="Crafts"
          />
          <ProjectLink
            linkTo="/ContactInfo"
            linkText="Contact Info"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Home;
