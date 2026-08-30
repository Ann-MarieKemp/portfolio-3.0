import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, getCategoryForSlug } from "@/hooks/postHooks";
import PostLayout from "@/components/PostLayout";

export const generateStaticParams = () => {
  return getAllSlugs().map(({ slug }) => ({ slug }));
};

interface IndividualPostProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: IndividualPostProps): Promise<Metadata> => {
  const { slug } = await params;
  const category = getCategoryForSlug(slug);
  if (!category) {
    return {};
  }
  const { meta } = await getPostBySlug(slug, category);
  return {
    title: `${meta.title} — Ann-Marie Kemp`,
    description: `${meta.title} — a ${category} project by Ann-Marie Kemp.`,
  };
};

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
