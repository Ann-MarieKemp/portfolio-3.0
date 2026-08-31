import type { Metadata } from "next"
import CraftCategoryContent from "@/components/CraftCategoryContent"

export const metadata: Metadata = {
  title: "Paper & Other Crafts — Ann-Marie Kemp",
  description: "Ann-Marie Kemp's paper and mixed-media projects — handmade wedding decor, Hardanger embroidery, and other one-off crafts.",
}

const PaperCrafts = () => (
  <CraftCategoryContent
    category="paper"
    title="Paper/Other Materials"
    description="Ann-Marie's paper and mixed-media projects — handmade wedding flowers and decor, Hardanger embroidery, and other one-off craft projects that don't fit neatly into a fiber-arts category."
  />
)

export default PaperCrafts
