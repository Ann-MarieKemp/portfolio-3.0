import React from "react"
import { FaFileDownload } from "react-icons/fa"

const Resume = () => {
  return (
      <div className="main-page-container">
        <p className="page-header">Resume</p>
        <a
          className="sub-header resume"
          target="_blank"
          href="/Ann-MarieKemp_Resume.pdf"
          rel="noopener noreferrer"
        >
          <FaFileDownload size="24" /> Download PDF version of Ann-Marie&apos;s Resume
        </a>
      </div>
  )
}
export default Resume
