import React from "react"
import styles from "@/styles/BakingWeeks.module.css"
import PostInfo from "@/components/PostInfo"
import { getAllPostsMeta } from "@/hooks/postHooks"


const Weaving = async () => {
  const posts = await getAllPostsMeta('weaving');
  return (
      <div className="main-page-container">
        <div className={styles["baking-page"]}>
          <p className="page-header">Weaving Projects</p>
          <p className={`description-text ${styles['baking']}`}>
            Ann-Marie&apos;s weaving projects, made on a rigid heddle loom with hand-spun and store-bought yarn &mdash; from simple scarves to pick-up-stick texture patterns like waffle weave.
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

export default Weaving
