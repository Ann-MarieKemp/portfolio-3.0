import type { Metadata } from "next"
import CraftCategoryContent from "@/components/CraftCategoryContent"

export const metadata: Metadata = {
  title: "Crochet Projects — Ann-Marie Kemp",
  description: "Ann-Marie Kemp's crochet projects, from holiday decor and amigurumi to a full-sized Harry Potter–themed blanket.",
}

const Crochet = () => (
  <CraftCategoryContent
    category="crochet"
    title="Crochet Projects"
    description="Ann-Marie's crochet projects, ranging from holiday decor and amigurumi characters to a full-sized Harry Potter–themed blanket."
  />
)

export default Crochet
