import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

const root = path.join(process.cwd(),'src', 'app', 'PostPage', 'posts');

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  console.log(realSlug,' is slug')
  const filePath = path.join(root, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8'});

  const { frontmatter, content} = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return { meta: {...frontmatter, slug: realSlug }, content }
}

export const getAllPostsMeta =  async() => {
  const files = fs.readdirSync(root);
  const posts = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta)
  }

  return posts;
}
