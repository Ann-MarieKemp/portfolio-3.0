import React from "react"
import styles from "@/styles/BakingWeeks.module.css"
import PostInfo from "@/components/PostInfo"
import { getAllPostsMeta } from "@/hooks/postHooks"

const PaperCrafts = async () => {
  const posts = await getAllPostsMeta('paper');
  return (
      <div className="main-page-container">
        <div className={styles["baking-page"]}>
          <p className="page-header">Paper/Other Materials</p>

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

export default PaperCrafts
