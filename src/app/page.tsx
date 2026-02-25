import WorkspaceCanvas from "@/components/workspace/WorkspaceCanvas"
import DeskSelector from "@/components/configurator/DeskSelector"
import SummaryPanel from "@/components/summary/SummaryPanel"

export default function Home() {
  return (
    <main className="p-8 grid grid-cols-3 gap-8">
      <div className="space-y-6">
        <DeskSelector />
        {/* Add ChairSelector */}
        {/* Add AccessoriesSelector */}
      </div>

      <WorkspaceCanvas />

      <SummaryPanel />
    </main>
  )
}