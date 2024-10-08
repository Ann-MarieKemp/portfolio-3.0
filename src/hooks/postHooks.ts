import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

export const getPostBySlug = async (slug: string, category: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const categoryRoot = path.join(process.cwd(),'src', 'app', 'PostPage', category);
  const filePath = path.join(categoryRoot, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8'});

  const { frontmatter, content} = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return { meta: {...frontmatter, slug: realSlug }, content }
}

export const getAllPostsMeta = async (category: string) => {
  const categoryRoot = path.join(process.cwd(),'src', 'app', 'PostPage', category);
  const files = fs.readdirSync(categoryRoot);
  const posts = []

  for (const file of files) {
    const { meta } =  await getPostBySlug(file, category);
    posts.push(meta)
  }

  return posts;
}
