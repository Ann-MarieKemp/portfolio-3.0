import React from "react"
import ProjectLink from "@/components/ProjectLink"

const Crafts = () => {
  const craftArray = [
    {linkTo: "/PaperCrafts", linkText: "Paper/Other", alt: "wedding table sign"},
    {linkTo: "/BakingWeeks", linkText: "52 Weeks of Baking", alt: "baked goods"},
    {linkTo: "/Knitting", linkText: "Knitting", alt: "socks"},
    {linkTo: "/Crochet", linkText: "Crochet", alt: "crochet project"},
    {linkTo: "/Spinning", linkText: "Spinning", alt: "spinning wheel bobbin"},
    {linkTo: "/Weaving", linkText: "Weaving", alt: "woven blanket"},
  ]

  return (
      <div className="main-page-container">
        <p className="page-header">Craft Projects</p>
        <div className="mainpage-project-link-container">
          <div className="craft-category-div">
            {craftArray.map((craft) => {
              return (
              <>
                <ProjectLink
                  linkTo={craft.linkTo}
                  linkText={craft.linkText}
                />
              </>)
            })}
          </div>
        </div>
      </div>
  )
}

export default Crafts
