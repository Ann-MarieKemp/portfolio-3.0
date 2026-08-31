import type { Metadata } from "next"
import CraftCategoryContent from "@/components/CraftCategoryContent"

export const metadata: Metadata = {
  title: "Weaving & Knitting Projects — Ann-Marie Kemp",
  description: "Ann-Marie Kemp's weaving and knitting projects, made on a rigid heddle loom and with needles alike.",
}

const Weaving = () => (
  <CraftCategoryContent
    category="weaving"
    title="Weaving & Knitting Projects"
    description="Ann-Marie's weaving projects, made on a rigid heddle loom with hand-spun and store-bought yarn — from simple scarves to pick-up-stick texture patterns like waffle weave — along with the occasional knitting project."
  />
)

export default Weaving
