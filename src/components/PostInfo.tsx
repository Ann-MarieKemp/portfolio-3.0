import React from "react"
import styles from "@/styles/BakingWeeks.module.css"
import Link from "next/link"

interface PostInfoProps {
  posts: any;
}

const PostInfo = ({ posts }:PostInfoProps) => {
  return (
    <>
      {posts.map((post: any) => {
        // let imageClass = styles["post-preview-image"]
        return (
          <div className={styles['weeks-of-baking-container']} key={post}>
            <div className={styles["post-preview-container"]} key={post.title}>
              <Link className="category-link" href={`/${post.slug}`}>
                {post.title}
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default PostInfo
