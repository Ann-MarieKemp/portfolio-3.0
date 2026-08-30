import React from "react"
import type { ReactNode } from "react"
import LightboxImage from "@/components/LightboxImage"
import styles from "@/styles/CraftPostCard.module.css"
import type { PostFrontmatter } from "@/hooks/postHooks"

interface CraftPostCardProps {
  meta: PostFrontmatter & { slug: string };
  content: ReactNode;
}

const CraftPostCard = ({ meta, content }: CraftPostCardProps) => {
  const images = [meta.image, ...(meta.images ?? [])]

  return (
    <div className={styles["craft-post-card"]}>
      <LightboxImage images={images} alt={meta.title} rotate={meta.rotate} />
      <h3 className={`sub-header-red-large ${styles["craft-post-title"]}`}>{meta.title}</h3>
      {content}
    </div>
  )
}

export default CraftPostCard
