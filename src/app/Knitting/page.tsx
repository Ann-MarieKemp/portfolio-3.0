import type { Metadata } from "next"
import CraftCategoryContent from "@/components/CraftCategoryContent"

export const metadata: Metadata = {
  title: "Knitting Projects — Ann-Marie Kemp",
  description: "Ann-Marie Kemp's knitting projects — small, wearable pieces made one stitch at a time.",
}

const Knitting = () => (
  <CraftCategoryContent
    category="knitting"
    title="Knitting Projects"
    description="Ann-Marie's knitting projects — small, wearable pieces made one stitch at a time."
  />
)

export default Knitting
