import { getAllPostsMeta } from "@/hooks/postHooks";

const Posts = async () => {

  const posts = await getAllPostsMeta();
  console.log(posts, 'is posts')
  return <div>{ posts[0].title }</div>
}

export default Posts;
