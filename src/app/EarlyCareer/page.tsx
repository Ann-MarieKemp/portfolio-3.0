import React from "react"
import type { Metadata } from "next"
import ExperienceEntry from "@/components/ExperienceEntry"
import { earlyCareerRoles, earlyCareerSkills } from "@/constants/earlyCareerVariables"
import styles from "./EarlyCareer.module.css"

export const metadata: Metadata = {
  title: "Early Career — Ann-Marie Kemp",
  description: "Ann-Marie Kemp's career in professional theater and broadcast audio engineering before software engineering.",
}

const EarlyCareer = () => {
  return (
    <div className="main-page-container">
      <h1 className="page-header">Before Software Engineering</h1>
      <p className="description-text">
        Before becoming a software engineer, I spent more than a decade in professional theater and broadcast
        audio engineering. It&apos;s where I learned to troubleshoot complex systems live, work independently, and
        stay level-headed under real, un-repeatable pressure&mdash;skills that carried directly into engineering.
      </p>
      <div className={styles["timeline-section"]}>
        {earlyCareerRoles.map((item) => (
          <ExperienceEntry key={`${item.role}-${item.company}`} {...item} />
        ))}
      </div>
      <h2 className={styles["skills-heading"]}>Technical Skills</h2>
      <div className={styles["skills-list"]}>
        {earlyCareerSkills.map((skill) => (
          <span className="tag-chip" key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default EarlyCareer
