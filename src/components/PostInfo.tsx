import React from "react"
import styles from "@/styles/BakingWeeks.module.css"
import Link from "next/link"
import type { PostFrontmatter } from "@/hooks/postHooks"

interface PostInfoProps {
  posts: (PostFrontmatter & { slug: string })[];
}

const PostInfo = ({ posts }:PostInfoProps) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <div className={styles['weeks-of-baking-container']} key={post.slug}>
            <div className={styles["post-preview-container"]}>
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
