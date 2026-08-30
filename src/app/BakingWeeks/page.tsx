import React from "react"
import type { Metadata } from "next"
import styles from "@/styles/BakingWeeks.module.css"
import PostInfo from "@/components/PostInfo"
import { getAllPostsMeta } from "@/hooks/postHooks"

export const metadata: Metadata = {
  title: "52 Weeks of Baking — Ann-Marie Kemp",
  description: "A different dessert every week for a year, as part of a 2015 reddit baking challenge.",
}

const BakingWeeks = async () => {
  const posts = await getAllPostsMeta('baking');
  return (
      <div className="main-page-container">
        <div className={`${styles["baking-page"]} ${styles['baking-links']}`}>
          <h1 className="page-header">52 Weeks of Baking 2015</h1>
          <p className={`description-text ${styles['baking']}`}>
            In 2015, Ann-Marie baked a different dessert every week for a year as part of a reddit challenge &mdash; these are the posts from that year.
          </p>

          <div className={styles["baking-box"]}>
            {posts.length ? (
              <PostInfo posts={posts} />
            ) : (
              <p className="sub-header">
                Sorry, there are no posts to display right now
              </p>
            )}
          </div>
        </div>
      </div>
  )
}

export default BakingWeeks
