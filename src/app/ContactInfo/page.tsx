import React from "react"
import styles from "./ContactInfo.module.css"
import navStyles from "@/styles/Navbar.module.css"
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaFileDownload
} from "react-icons/fa"

const ContactInfo = () => {
  return (
      <div className="main-page-container">
        <p className="page-header">Contact Ann-Marie</p>
        <div className={styles["contact-link-container"]}>
          <div className={navStyles["icons-box"]}>
            <p className={styles["contact-email"]}>aedalenb@gmail.com</p>
            <a
              className={navStyles["page-link"]}
              href="https://github.com/Ann-MarieKemp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="24" />
            </a>
            <a
              target="_blank"
              href="https://medium.com/@amkemp"
              rel="noopener noreferrer"
            >
              <FaMedium size="24" />
            </a>

            <a
              className={navStyles["page-link"]}
              href="https://www.linkedin.com/in/ann-mariekemp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size="24" />
            </a>
            <a target="_blank" href={"/Ann-MarieKemp_Resume.pdf"} rel="noopener noreferrer">
              <FaFileDownload size="24" />
            </a>
          </div>
        </div>
        <div className="main-page-container"></div>
      </div>
  )
}
export default ContactInfo
