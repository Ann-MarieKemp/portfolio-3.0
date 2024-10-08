import { getAllPostsMeta } from "@/hooks/postHooks";

const Posts = async () => {

  const posts = await getAllPostsMeta('weaving');
  console.log(posts, 'is posts')
  return (<>
  {posts.map((post) => {
    return (<div>{post.title}</div>)
  })}

  </>)
}

export default Posts;
