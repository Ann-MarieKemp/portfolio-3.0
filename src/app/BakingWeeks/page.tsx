import React from "react"
import styles from "@/styles/BakingWeeks.module.css"
import PostInfo from "@/components/PostInfo"

const BakingWeeks = () => {
  return (
      <div className="main-page-container">
        <div className={`${styles["baking-page"]} ${styles['baking-links']}`}>
          <p className="page-header">52 Weeks of Baking 2015</p>
          <p className={`description-text ${styles['baking']}`}>
            In 2015 Ann-Marie participated in a reddit challenge where she baked
            a different dessert every week for a year. These are the posts she
            made on reddit from that year.
          </p>

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

export default BakingWeeks
