import type { ReactNode } from "react";
import Image from "next/image";
import ProjectLink from "@/components/ProjectLink";
import Carousel from "@/components/Carousel";
import styles from "@/styles/Posts.module.css";
import type { PostFrontmatter } from "@/hooks/postHooks";

// Baking is the only category with individual post pages — the other craft
// categories show full post content directly on their category page.
const CATEGORY_DISPLAY: Record<string, { route: string; label: string }> = {
  baking: { route: "BakingWeeks", label: "All Bakes" },
};

interface PostLayoutProps {
  meta: PostFrontmatter & { slug: string };
  content: ReactNode;
}

const PostLayout = ({ meta, content }: PostLayoutProps) => {
  const categoryInfo = CATEGORY_DISPLAY[meta.category];

  return (
    <div className="main-page-container">
      <Image
        src={meta.image}
        alt={meta.title}
        width={800}
        height={600}
        className={`${styles["post-image"]} ${meta.rotate ? styles["post-image-rotate"] : ""}`}
      />
      {content}
      {meta.images && meta.images.length > 0 && (
        <Carousel images={meta.images} altPrefix={meta.title} />
      )}
      {categoryInfo && (
        <ProjectLink
          linkTo={`/${categoryInfo.route}`}
          linkText={`Back to ${categoryInfo.label}`}
          variant="craft"
        />
      )}
    </div>
  );
};

export default PostLayout;
