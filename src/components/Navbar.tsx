import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import { faFileDownload } from "@fortawesome/free-solid-svg-icons"
// import resumeFile from "@/constants/Ann-MarieKemp_Resume.pdf"
import styles from "@/styles/Navbar.module.css"

const Navbar = () => {
  return (
    <nav role="navigation" id={styles["nav-bar-container"]}>
      <div className={styles["nav-title-container"]}>
        {/* <StaticImage src="../images/mainPortfolioImage.JPG" className="portfolio-photo small" /> */}
        <p className={styles["name-spacing"]}>Ann-Marie Kemp</p>
      </div>
      <div className={styles['links-and-icons-container']}>
        <div>
          <Link className={styles["page-link"]} href="/">
            Home
          </Link>
          <Link className={styles["page-link"]} href="/AboutMe">
            About
          </Link>
          <Link className={styles["page-link"]} href="/Projects">
            Projects
          </Link>
          {/* <Link className="page-link" to="/Crafts">
            Crafts
          </Link> */}
          {/* <Link className="page-link" to="/ContactInfo">
            Contact
          </Link> */}
        </div>
        <div className="icons-box">
          <a
            target="_blank"
            href="https://medium.com/@amkemp"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="site-icons" icon={faMedium} />
          </a>
          <a
            className="page-link"
            href="https://github.com/Ann-MarieKemp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={styles["site-icons"]} icon={faGithub} />
          </a>
          <a
            className="page-link"
            href="https://www.linkedin.com/in/ann-mariekemp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={styles["site-icons"]} icon={faLinkedin} />
          </a>
          <a target="_blank" href={""} rel="noopener noreferrer">
            <FontAwesomeIcon className={styles["site-icons"]} icon={faFileDownload} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
