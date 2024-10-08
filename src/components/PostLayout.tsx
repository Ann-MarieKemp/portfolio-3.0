import React from "react"
import Link from "next/link";
import "@/styles/Posts.module.css"
import Image from "next/image";
import ProjectLink from "@/components/ProjectLink"

const PostLayout = () => {
  // let imageClass = "post-image"
  // let newCategory = post.frontmatter.category
  // let display = post.frontmatter.category
  // if (post.frontmatter.category === "baking") {
  //   newCategory = "BakingWeeks"
  //   display = "All Bakes"
  // } else if (post.frontmatter.category === "paper") {
  //   newCategory = "PaperCrafts"
  //   display = "All Paper/Other"
  // } else if (post.frontmatter.category === "weaving") {
  //   newCategory = "Weaving"
  //   display = "All Weaving"
  // } else if (post.frontmatter.category === "spinning") {
  //   newCategory = "Spinning"
  //   display = "All Spinning"
  // } else if (post.frontmatter.category === "crochet") {
  //   newCategory = "Crochet"
  //   display = "All Crochet"
  // } else if (post.frontmatter.category === "knitting") {
  //   newCategory = "Knitting"
  //   display = "All Knitting"
  // }
  // if (post.frontmatter.rotate && post.frontmatter.rotate === true) {
  //   imageClass = "post-image-rotate"
  // }
  return (
      <div className="main-page-container">
        {/* <Image
          // className={imageClass}
          image={post.frontmatter.image.childImageSharp.fluid}
        /> */}
        {/* <MDXRenderer>{post.body}</MDXRenderer> */}

        {/* {post.frontmatter.images !== null && (
          <Carousel images={post.frontmatter.images} />
        )} */}
        {/* <ProjectLink
          className="category-link"
          linkTo={`/${newCategory}`}
          linkText={`Back to ${display}`}
        /> */}
      </div>
  )
}

export default PostLayout;
