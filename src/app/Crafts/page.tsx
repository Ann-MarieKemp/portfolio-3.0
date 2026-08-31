import React from "react"
import Image from "next/image"
import type { Metadata } from "next"
import ProjectLink from "@/components/ProjectLink"
import { getAllPostsMeta, CRAFT_CATEGORY_META } from "@/hooks/postHooks"
import styles from "./Crafts.module.css"

export const metadata: Metadata = {
  title: "Craft Projects — Ann-Marie Kemp",
  description: "Baking, weaving, knitting, crochet, spinning, and paper craft projects made by Ann-Marie Kemp.",
}

const craftCategories = ["paper", "baking", "crochet", "spinning", "weaving"] as const

const craftArray = craftCategories.map((category) => ({
  category,
  ...CRAFT_CATEGORY_META[category],
}))

const Crafts = async () => {
  const craftsWithThumbnails = await Promise.all(
    craftArray.map(async (craft) => {
      const posts = await getAllPostsMeta(craft.category);
      const thumbnail = posts[0]?.image as string | undefined;
      return { ...craft, thumbnail };
    })
  );

  return (
      <div className="main-page-container">
        <h1 className="page-header">Craft Projects</h1>
        <div className="mainpage-project-link-container">
          <div className="craft-category-div">
            {craftsWithThumbnails.map((craft) => (
              <div key={craft.linkTo} className={styles["craft-category-item"]}>
                <ProjectLink
                  linkTo={craft.linkTo}
                  linkText={craft.linkText}
                  variant="craft"
                />
                {craft.thumbnail && (
                  <Image
                    src={craft.thumbnail}
                    alt={craft.alt}
                    width={300}
                    height={300}
                    className={styles["craft-category-image"]}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Crafts
