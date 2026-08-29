import React from "react"
import styles from "@/styles/BakingWeeks.module.css"
import PostInfo from "@/components/PostInfo"
import { getAllPostsMeta } from "@/hooks/postHooks"

const Crochet = async () => {
  const posts = await getAllPostsMeta('crochet');
  return (
      <div className="main-page-container">
        <div className={styles["baking-page"]}>
          <p className="page-header">Crochet Projects</p>
          <p className={`description-text ${styles['baking']}`}>
            Ann-Marie&apos;s crochet projects, ranging from holiday decor and amigurumi characters to a full-sized Harry Potter&ndash;themed blanket.
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

export default Crochet
