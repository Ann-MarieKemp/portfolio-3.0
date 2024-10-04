import React from "react"
import styles from "@/styles/BakingWeeks.module.css"
import PostInfo from "@/components/PostInfo"

const Knitting = () => {
  return (
      <div className="main-page-container">
        <div className={styles["baking-page"]}>
          <p className="page-header">Knitting Projects</p>

          <div className={styles["baking-box"]}>
            {[].length ? (
              <PostInfo posts={[]} />
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
