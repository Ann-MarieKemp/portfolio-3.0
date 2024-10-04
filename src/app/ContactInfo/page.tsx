import React from "react"
import styles from "./ContactInfo.module.css"
import navStyles from "@/styles/Navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
// import { faFileDownload } from "@fortawesome/free-solid-svg-icons"
// import resumeFile from "@/constants/Ann-MarieKemp_Resume.pdf"

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
              <FontAwesomeIcon className={navStyles["site-icons"]} icon={faGithub} />
            </a>
            <a
              target="_blank"
              href="https://medium.com/@amkemp"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={navStyles["site-icons"]} icon={faMedium} />
            </a>

            <a
              className="page-link"
              href="https://www.linkedin.com/in/ann-mariekemp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={navStyles["site-icons"]} icon={faLinkedin} />
            </a>
            {/* <a target="_blank" href={resumeFile} rel="noopener noreferrer"> */}
              {/* <FontAwesomeIcon className={navStyles["site-icons"]} icon={faFileDownload} /> */}
            {/* </a> */}
          </div>
        </div>
        <div className="main-page-container"></div>
      </div>
  )
}
export default ContactInfo
