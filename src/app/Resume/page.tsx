import React from "react"
import type { Metadata } from "next"
import { FaFileDownload } from "react-icons/fa"
import ExperienceEntry from "@/components/ExperienceEntry"
import styles from "./Resume.module.css"
import {
  centeneLeadDescription,
  centeneSeniorDescription,
  ibmBand07Description,
  ibmBand06Description
} from "@/constants/projectvariables"

export const metadata: Metadata = {
  title: "Experience — Ann-Marie Kemp",
  description: "Ann-Marie Kemp's work history and resume — Mobile Engineering Lead specializing in React Native, mobile architecture, and accessibility.",
}

const Resume = () => {
  return (
      <div className="main-page-container">
        <h1 className="page-header">Experience &amp; Resume</h1>
        <a
          className="sub-header resume"
          target="_blank"
          href="/Ann-MarieKemp_Resume.pdf"
          rel="noopener noreferrer"
        >
          <FaFileDownload size="24" /> Download PDF version of Ann-Marie&apos;s Resume
        </a>
        <div className={styles['experience-section']}>
          <ExperienceEntry
            role="Lead Application Development Engineer"
            company="Centene"
            dates="Sept 2025 - Present"
            bullets={centeneLeadDescription}
          />
          <ExperienceEntry
            role="Senior Application Development Engineer"
            company="Centene / Apex Systems"
            dates="Jan 2025 - Sept 2025"
            bullets={centeneSeniorDescription}
          />
          <ExperienceEntry
            role="Software Developer, Band 07"
            company="IBM"
            dates="Oct 2021 - Jan 2025"
            bullets={ibmBand07Description}
          />
          <ExperienceEntry
            role="Software Developer, Band 06"
            company="IBM"
            dates="Aug 2020 - Oct 2021"
            bullets={ibmBand06Description}
          />
        </div>
      </div>
  )
}
export default Resume
