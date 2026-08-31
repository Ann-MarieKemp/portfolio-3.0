import React from "react"
import styles from "./page.module.css";
import ProjectLink from "@/components/ProjectLink";
import profileImage from '@/images/mainPortfolioImage.jpg'
import Image from 'next/image';

const Home = () => {
  return (
    <div className="main-page-container" >
      <Image src={profileImage} alt="Picture of Ann-Marie Kemp" height="315" width="315" className="portfolio-photo"/>
      <h1 className="main-page-header">Hello, my name is Ann-Marie Kemp</h1>
      <div className={`${styles['about-me-tag']} ${styles['index']}`}>
        <p>
          I am a <span className={styles['fade-in']}>Mobile Engineering Lead</span> — React Native, mobile architecture, and accessibility at scale.
        </p>
        <div className={styles['mainpage-project-link-container']}>
          <ProjectLink
            linkTo="/AboutMe"
            linkText="About Ann-Marie"
          />
          <ProjectLink
            linkTo="/Resume"
            linkText="Experience"
          />
          <ProjectLink
            linkTo="/Education"
            linkText="Education"
          />
          <ProjectLink
            linkTo="/AudioEngineering"
            linkText="Audio Engineering"
          />
          <ProjectLink
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
          />
        </div>
      </div>
    </div>
  )
}

export default Home;
