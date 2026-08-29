import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, getCategoryForSlug } from "@/hooks/postHooks";
import PostLayout from "@/components/PostLayout";

export const generateStaticParams = () => {
  return getAllSlugs().map(({ slug }) => ({ slug }));
};

interface IndividualPostProps {
  params: Promise<{ slug: string }>;
}

const IndividualPost = async ({ params }: IndividualPostProps) => {
  const { slug } = await params;
  const category = getCategoryForSlug(slug);

  if (!category) {
    notFound();
  }

  const { meta, content } = await getPostBySlug(slug, category);

  return <PostLayout meta={meta} content={content} />;
};

export default IndividualPost;
