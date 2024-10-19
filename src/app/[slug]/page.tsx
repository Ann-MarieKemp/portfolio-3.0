import { getPostBySlug } from "@/hooks/postHooks";

const IndividualPost = async({ params }) => {
  const slug = params.slug;
  const post = await getPostBySlug(slug, 'weaving')




  // const post = getPostBySlug()
  return (<div>{post.content}</div>)
}

export default IndividualPost;
