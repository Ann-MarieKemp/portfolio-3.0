import React from "react"
import Link from "next/link";
import Image from "next/image";
import "@/styles/Posts.module.css"
import ProjectLink from "@/components/ProjectLink"
import { type Metadata } from 'next/types'
import { type MDXLayoutProps } from 'mdx/types'
import { useMDXComponent } from 'next-mdx-remote/rsc'

// const Post = ({ data: { mdx: post } }) => {
//   let imageClass = "post-image"
//   let newCategory = post.frontmatter.category
//   let display = post.frontmatter.category
//   if (post.frontmatter.category === "baking") {
//     newCategory = "BakingWeeks"
//     display = "All Bakes"
//   } else if (post.frontmatter.category === "paper") {
//     newCategory = "PaperCrafts"
//     display = "All Paper/Other"
//   } else if (post.frontmatter.category === "weaving") {
//     newCategory = "Weaving"
//     display = "All Weaving"
//   } else if (post.frontmatter.category === "spinning") {
//     newCategory = "Spinning"
//     display = "All Spinning"
//   } else if (post.frontmatter.category === "crochet") {
//     newCategory = "Crochet"
//     display = "All Crochet"
//   } else if (post.frontmatter.category === "knitting") {
//     newCategory = "Knitting"
//     display = "All Knitting"
//   }
//   if (post.frontmatter.rotate && post.frontmatter.rotate === true) {
//     imageClass = "post-image-rotate"
//   }
//   return (
//       <div className="main-page-container">
//         <Image
//           className={imageClass}
//           image={post.frontmatter.image.childImageSharp.fluid}
//           alt="image"
//         />
//         <MDXRenderer>{post.body}</MDXRenderer>

//         {post.frontmatter.images !== null && (
//           <Carousel images={post.frontmatter.images} />
//         )}
//         <ProjectLink
//           className="category-link"
//           linkTo={`/${newCategory}`}
//           linkText={`Back to ${display}`}
//         />
//       </div>
//   )
// }

// export default Post


export default function PostLayout({
  children,
  params,
}: MDXLayoutProps) {
  const MDXContent = useMDXComponent(children)

  return (
    <div>
      <h1>{params?.slug?.join('/')}</h1>
      <MDXContent />
    </div>
  )
}
