import React from "react"
import styles from "@/styles/BakingWeeks.module.css"
import PostInfo from "@/components/PostInfo"
import { getAllPostsMeta } from "@/hooks/postHooks"

const Spinning = async () => {
  const posts = await getAllPostsMeta('spinning');
  return (
      <div className="main-page-container">
        <div className={styles["baking-page"]}>
          <p className="page-header">Spinning Projects</p>
          <p className={`description-text ${styles['baking']}`}>
            Ann-Marie spins her own yarn on a spinning wheel, turning raw and prepared fiber into yarn she can knit, crochet, or weave with.
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

export default Spinning
