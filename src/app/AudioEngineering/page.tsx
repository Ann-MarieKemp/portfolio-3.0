import React from "react"
import type { Metadata } from "next"
import ExperienceEntry from "@/components/ExperienceEntry"
import { broadcastRoles, theaterRoles, audioEngineeringSkills } from "@/constants/audioEngineeringVariables"
import styles from "./AudioEngineering.module.css"

export const metadata: Metadata = {
  title: "Audio Engineering — Ann-Marie Kemp",
  description: "Ann-Marie Kemp's decade-plus career in professional theater and broadcast audio engineering.",
}

const AudioEngineering = () => {
  return (
    <div className="main-page-container">
      <h1 className="page-header">Audio Engineering</h1>
      <p className="description-text">
        For more than a decade before becoming a software engineer, I worked as a professional audio engineer
        across live theater and broadcast television&mdash;troubleshooting complex systems live, working
        independently, and staying level-headed under real, un-repeatable pressure.
      </p>
      <h2 className={styles["section-heading"]}>Broadcast &amp; Live Television</h2>
      <div className={styles["timeline-section"]}>
        {broadcastRoles.map((item) => (
          <ExperienceEntry key={`${item.role}-${item.dates}`} {...item} />
        ))}
      </div>
      <h2 className={styles["section-heading"]}>Theater</h2>
      <div className={styles["timeline-section"]}>
        {theaterRoles.map((item) => (
          <ExperienceEntry key={`${item.role}-${item.dates}`} {...item} />
        ))}
      </div>
      <h2 className={styles["skills-heading"]}>Technical Skills</h2>
      <div className={styles["skills-list"]}>
        {audioEngineeringSkills.map((skill) => (
          <span className="tag-chip" key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default AudioEngineering
