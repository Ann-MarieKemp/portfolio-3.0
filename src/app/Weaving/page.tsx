import type { Metadata } from "next"
import CraftCategoryContent from "@/components/CraftCategoryContent"

export const metadata: Metadata = {
  title: "Weaving Projects — Ann-Marie Kemp",
  description: "Ann-Marie Kemp's weaving projects, made on a rigid heddle loom with hand-spun and store-bought yarn.",
}

const Weaving = () => (
  <CraftCategoryContent
    category="weaving"
    title="Weaving Projects"
    description="Ann-Marie's weaving projects, made on a rigid heddle loom with hand-spun and store-bought yarn — from simple scarves to pick-up-stick texture patterns like waffle weave."
  />
)

export default Weaving
