import React from "react"
import styles from "@/styles/BakingWeeks.module.css"
import PostInfo from "@/components/PostInfo"
import { getAllPostsMeta } from "@/hooks/postHooks"

const Knitting = async () => {
  const posts = await getAllPostsMeta('knitting');
  return (
      <div className="main-page-container">
        <div className={styles["baking-page"]}>
          <p className="page-header">Knitting Projects</p>
          <p className={`description-text ${styles['baking']}`}>
            Ann-Marie&apos;s knitting projects &mdash; small, wearable pieces made one stitch at a time.
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

export default Knitting
