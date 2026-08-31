import type { Metadata } from "next"
import CraftCategoryContent from "@/components/CraftCategoryContent"

export const metadata: Metadata = {
  title: "Spinning Projects — Ann-Marie Kemp",
  description: "Ann-Marie Kemp spins her own yarn, turning raw and prepared fiber into yarn she can knit, crochet, or weave with.",
}

const Spinning = () => (
  <CraftCategoryContent
    category="spinning"
    title="Spinning Projects"
    description="Ann-Marie spins her own yarn on a spinning wheel, turning raw and prepared fiber into yarn she can knit, crochet, or weave with."
  />
)

export default Spinning
