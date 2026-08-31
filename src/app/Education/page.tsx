import React from "react"
import type { Metadata } from "next"
import EducationEntry from "@/components/EducationEntry"
import { education, certifications } from "@/constants/educationvariables"
import styles from "./Education.module.css"

export const metadata: Metadata = {
  title: "Education — Ann-Marie Kemp",
  description: "Ann-Marie Kemp's education and certifications, including an in-progress M.S. in Computer Science at the University of Colorado Boulder.",
}

const Education = () => {
  return (
    <div className="main-page-container">
      <h1 className="page-header">Education &amp; Certifications</h1>
      <div className={styles['education-section']}>
        {education.map((item) => (
          <EducationEntry key={item.degree} {...item} />
        ))}
      </div>
      <ul className={styles['certifications-list']}>
        {certifications.map((cert) => (
          <li key={cert.url}>
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Education
