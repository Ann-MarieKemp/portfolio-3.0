import React from "react"
import styles from "@/styles/ExperienceEntry.module.css"

interface ExperienceEntryProps {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
  note?: string;
  url?: string;
}

const ExperienceEntry = ({ role, company, dates, bullets, note, url }: ExperienceEntryProps) => {
  return (
    <div className={styles['experience-entry']}>
      <div className={styles['experience-header']}>
        {url ? (
          <a className={styles['experience-role-link']} href={url} target="_blank" rel="noopener noreferrer">
            {role}
          </a>
        ) : (
          <span className={styles['experience-role']}>{role}</span>
        )}
        <span className={styles['experience-company']}>{company}</span>
        <span className={styles['experience-dates']}>{dates}</span>
      </div>
      {note && <p className={styles['experience-note']}>{note}</p>}
      <ul className={styles['experience-bullets']}>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceEntry
