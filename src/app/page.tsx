import React from "react"
import Link from "next/link"
import styles from "./page.module.css";
import ProjectLink from "@/components/ProjectLink";
import profileImage from '@/images/mainPortfolioImage.jpg'
import Image from 'next/image';
import { getAllPostsMeta, CRAFT_CATEGORY_META } from "@/hooks/postHooks"

const craftStripCategories = ["baking", "weaving", "crochet", "knitting", "paper", "spinning"] as const

const craftStripItems = craftStripCategories.map((category) => ({
  category,
  ...CRAFT_CATEGORY_META[category],
}))

const Home = async () => {
  const craftsWithThumbnails = await Promise.all(
    craftStripItems.map(async (craft) => {
      const posts = await getAllPostsMeta(craft.category);
      const thumbnail = posts[0]?.image as string | undefined;
      return { ...craft, thumbnail };
    })
  );

  return (
    <div className="main-page-container" >
      <Image src={profileImage} alt="Picture of Ann-Marie Kemp" height="315" width="315" className="portfolio-photo"/>
      <h1 className="main-page-header">Hello, my name is Ann-Marie Kemp</h1>
      <div className={`${styles['about-me-tag']} ${styles['index']}`}>
        <p>
          I am a <span className={styles['fade-in']}>Mobile Engineering Lead</span> — React Native, mobile architecture, and accessibility at scale.
        </p>
        <div className={styles['mainpage-project-link-container']}>
          <ProjectLink
            linkTo="/AboutMe"
            linkText="About Ann-Marie"
          />
          <ProjectLink
            linkTo="/Projects"
            linkText="Projects"
          />
          <ProjectLink
            linkTo="/Crafts"
            linkText="Crafts"
          />
          <ProjectLink
            linkTo="/ContactInfo"
            linkText="Contact Info"
          />
        </div>
      </div>
      <div className={styles['craft-strip']}>
        {craftsWithThumbnails.map((craft) => (
          craft.thumbnail ? (
            <Link key={craft.linkTo} href={craft.linkTo} className={styles['craft-strip-item']}>
              <Image
                src={craft.thumbnail}
                alt={craft.alt}
                width={80}
                height={80}
                className={styles['craft-strip-image']}
              />
              <span className={styles['craft-strip-label']}>{craft.linkText}</span>
            </Link>
          ) : null
        ))}
      </div>
      <Link href="/Crafts" className={styles['see-all-crafts-link']}>
        See all crafts
      </Link>
    </div>
  )
}

export default Home;
