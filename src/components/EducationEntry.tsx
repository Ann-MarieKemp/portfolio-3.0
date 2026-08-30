import React from "react"
import styles from "@/styles/ExperienceEntry.module.css"
import type { EducationItem } from "@/constants/educationvariables"

const EducationEntry = ({ degree, institution, dates, coursework }: EducationItem) => {
  return (
    <div className={styles['experience-entry']}>
      <div className={styles['experience-header']}>
        <span className={styles['experience-role']}>{degree}</span>
        <span className={styles['experience-company']}>{institution}</span>
        {dates && <span className={styles['experience-dates']}>{dates}</span>}
      </div>
      {coursework && coursework.length > 0 && (
        <ul className={styles['experience-bullets']}>
          {coursework.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default EducationEntry
