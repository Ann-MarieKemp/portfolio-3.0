"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaFileDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa"
import  styles from "@/styles/Navbar.module.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav role="navigation" className={styles["nav-bar-container"]}>
      <div className={styles["nav-title-container"]}>
        <p className={styles["name-spacing"]}>Ann-Marie Kemp</p>
      </div>
      <button
        className={styles["menu-toggle"]}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes size="22" /> : <FaBars size="22" />}
      </button>
      <div
        className={`${styles['links-and-icons-container']} ${menuOpen ? styles['menu-open'] : ""}`}
      >
        <div className={styles["page-links"]}>
          <Link className={styles["page-link"]} href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link className={styles["page-link"]} href="/AboutMe" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link className={styles["page-link"]} href="/Projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link className={styles["page-link"]} href="/Crafts" onClick={() => setMenuOpen(false)}>
            Crafts
          </Link>
          <Link className={styles["page-link"]} href="/ContactInfo" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
        <div className={styles["icons-box"]}>
          <a
            target="_blank"
            href="https://medium.com/@amkemp"
            rel="noopener noreferrer"
            aria-label="Medium"
          >
            <FaMedium size="24" />
          </a>
          <a
            className={styles["page-link"]}
            href="https://github.com/Ann-MarieKemp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size="24" />
          </a>
          <a
            className={styles["page-link"]}
            href="https://www.linkedin.com/in/ann-mariekemp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size="24" />
          </a>
          <a
            target="_blank"
            href={"/Ann-MarieKemp_Resume.pdf"}
            rel="noopener noreferrer"
            aria-label="Download resume"
          >
            <FaFileDownload size="24" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
