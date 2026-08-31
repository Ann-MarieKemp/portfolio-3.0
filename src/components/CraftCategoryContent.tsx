import React from "react"
import CraftPostCard from "@/components/CraftPostCard"
import ProjectLink from "@/components/ProjectLink"
import { getAllPosts } from "@/hooks/postHooks"
import bakingStyles from "@/styles/BakingWeeks.module.css"
import craftStyles from "@/styles/CraftPostCard.module.css"

type SparsePostCategory = "weaving" | "crochet" | "paper" | "spinning";

interface CraftCategoryContentProps {
  category: SparsePostCategory;
  title: string;
  description: string;
}

const CraftCategoryContent = async ({ category, title, description }: CraftCategoryContentProps) => {
  const posts = await getAllPosts(category)

  return (
    <div className="main-page-container">
      <div className={bakingStyles["baking-page"]}>
        <h1 className="page-header">{title}</h1>
        <p className={`description-text ${bakingStyles["baking"]}`}>{description}</p>
        <div className={craftStyles["craft-grid"]}>
          {posts.length ? (
            posts.map(({ meta, content }) => (
              <CraftPostCard key={meta.slug} meta={meta} content={content} />
            ))
          ) : (
            <p className="sub-header">Sorry, there are no posts to display right now</p>
          )}
        </div>
        <ProjectLink linkTo="/Crafts" linkText="Back to Crafts" variant="craft" />
      </div>
    </div>
  )
}

export default CraftCategoryContent
