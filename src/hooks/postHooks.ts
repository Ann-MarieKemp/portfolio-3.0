import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

export const POST_CATEGORIES = ['baking', 'weaving', 'crochet', 'paper', 'spinning'] as const;
export type PostCategory = (typeof POST_CATEGORIES)[number];

export const CRAFT_CATEGORY_META: Record<PostCategory, { linkTo: string; linkText: string; alt: string }> = {
  baking: { linkTo: '/BakingWeeks', linkText: '52 Weeks of Baking', alt: 'baked goods' },
  weaving: { linkTo: '/Weaving', linkText: 'Weaving & Knitting', alt: 'woven blanket' },
  crochet: { linkTo: '/Crochet', linkText: 'Crochet', alt: 'crochet project' },
  paper: { linkTo: '/PaperCrafts', linkText: 'Paper/Other', alt: 'wedding table sign' },
  spinning: { linkTo: '/Spinning', linkText: 'Spinning', alt: 'spinning wheel bobbin' },
};

export interface PostFrontmatter {
  title: string;
  image: string;
  images?: string[];
  category: PostCategory;
  author?: string;
  id?: number;
  rotate?: boolean;
}

const categoryRootPath = (category: string) =>
  path.join(process.cwd(), 'src', 'app', 'PostPage', category);

const listCategoryFiles = (category: string) => {
  try {
    return fs.readdirSync(categoryRootPath(category));
  } catch {
    return [];
  }
};

export const getPostBySlug = async (slug: string, category: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(categoryRootPath(category), `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8'});

  const { frontmatter, content} = await compileMDX<PostFrontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return { meta: {...frontmatter, slug: realSlug }, content }
}

export const getAllPosts = async (category: string) => {
  const files = listCategoryFiles(category);
  const posts = await Promise.all(files.map((file) => getPostBySlug(file, category)));
  return posts.sort((a, b) => (a.meta.id ?? 0) - (b.meta.id ?? 0));
}

export const getAllPostsMeta = async (category: string) => {
  const posts = await getAllPosts(category);
  return posts.map((post) => post.meta);
}

// Only baking has individual post pages ("/[slug]") — the other craft
// categories show full post content directly on their category page.
const DETAIL_PAGE_CATEGORIES: PostCategory[] = ['baking'];

export const getAllSlugs = () => {
  const slugs: { slug: string; category: PostCategory }[] = [];
  for (const category of DETAIL_PAGE_CATEGORIES) {
    for (const file of listCategoryFiles(category)) {
      slugs.push({ slug: file.replace(/\.mdx$/, ''), category });
    }
  }
  return slugs;
}

export const getCategoryForSlug = (slug: string) =>
  getAllSlugs().find((entry) => entry.slug === slug)?.category;
