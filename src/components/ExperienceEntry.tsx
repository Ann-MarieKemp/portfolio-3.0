import React from "react"
import styles from "@/styles/ExperienceEntry.module.css"

interface ExperienceEntryProps {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

const ExperienceEntry = ({ role, company, dates, bullets }: ExperienceEntryProps) => {
  return (
    <div className={styles['experience-entry']}>
      <div className={styles['experience-header']}>
        <span className={styles['experience-role']}>{role}</span>
        <span className={styles['experience-company']}>{company}</span>
        <span className={styles['experience-dates']}>{dates}</span>
      </div>
      <ul className={styles['experience-bullets']}>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceEntry
