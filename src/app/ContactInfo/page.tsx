import React from "react"
import type { Metadata } from "next"
import styles from "./ContactInfo.module.css"
import navStyles from "@/styles/Navbar.module.css"
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaFileDownload
} from "react-icons/fa"

export const metadata: Metadata = {
  title: "Contact — Ann-Marie Kemp",
  description: "Get in touch with Ann-Marie Kemp via email, GitHub, LinkedIn, or Medium.",
}

const ContactInfo = () => {
  return (
      <div className="main-page-container">
        <h1 className="page-header">Contact Ann-Marie</h1>
        <div className={styles["contact-link-container"]}>
            <a className={styles["contact-email"]} href="mailto:aedalenb@gmail.com">email: aedalenb@gmail.com</a>
            <div className={navStyles["icons-box"]}>
              <a
                className={navStyles["page-link"]}
                href="https://github.com/Ann-MarieKemp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size="28" />
              </a>
              <a
                target="_blank"
                href="https://medium.com/@amkemp"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <FaMedium size="28" />
              </a>
              <a
                className={navStyles["page-link"]}
                href="https://www.linkedin.com/in/ann-mariekemp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size="28" />
              </a>
              <a
                target="_blank"
                href={"/Ann-MarieKemp_Resume.pdf"}
                rel="noopener noreferrer"
                aria-label="Download resume"
              >
                <FaFileDownload size="28" />
              </a>
          </div>
        </div>
      </div>
  )
}
export default ContactInfo
