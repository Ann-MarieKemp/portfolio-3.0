import React from "react"
import type { Metadata } from "next"
import { getMediumArticles } from "@/hooks/mediumHooks"
import styles from "./Writing.module.css"

export const metadata: Metadata = {
  title: "Writing — Ann-Marie Kemp",
  description: "Articles by Ann-Marie Kemp on software development and things learned along the way.",
}

const formatPubDate = (pubDate: string) => {
  const date = new Date(pubDate)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

const Writing = async () => {
  const articles = await getMediumArticles()

  return (
    <div className="main-page-container">
      <h1 className="page-header">Writing</h1>
      <p className="description-text">
        I occasionally write about software development and things I&apos;ve learned along the way.
      </p>
      {articles.length > 0 ? (
        <ul className={styles["article-list"]}>
          {articles.map((article) => {
            const date = formatPubDate(article.pubDate)
            return (
              <li key={article.link} className={styles["article-item"]}>
                <a
                  className={styles["article-title"]}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title}
                </a>
                {date && <span className={styles["article-date"]}>{date}</span>}
              </li>
            )
          })}
        </ul>
      ) : (
        <p className="sub-header">Sorry, there are no posts to display right now</p>
      )}
      <p className={styles["medium-cta"]}>
        <a href="https://medium.com/@amkemp" target="_blank" rel="noopener noreferrer">
          Follow along on Medium
        </a>
      </p>
    </div>
  )
}

export default Writing
