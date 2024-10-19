/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-mdx-frontmatter'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: '/\.mdx?$/',
  remarkPlugins: [remarkFrontmatter],
  rehypePlugins: [],
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)

