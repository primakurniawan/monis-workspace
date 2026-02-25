import WorkspaceCanvas from "@/components/workspace/WorkspaceCanvas"
import DeskSelector from "@/components/configurator/DeskSelector"
import ChairSelector from "@/components/configurator/ChairSelector"
import AccessoriesSelector from "@/components/configurator/AccessoriesSelector"
import SummaryPanel from "@/components/summary/SummaryPanel"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-100 to-neutral-200 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">
          Design Your Workspace
        </h1>
        <p className="text-center text-neutral-500 mb-10">
          Create your perfect Bali setup ☀️
        </p>

        <div className="grid grid-cols-12 gap-8">
          {/* LEFT PANEL */}
          <div className="col-span-3 bg-white rounded-2xl shadow-lg p-6 space-y-8">
            <DeskSelector />
            <ChairSelector />
            <AccessoriesSelector />
          </div>

          {/* CENTER CANVAS */}
          <div className="col-span-6">
            <WorkspaceCanvas />
          </div>

          {/* RIGHT SUMMARY */}
          <div className="col-span-3">
            <SummaryPanel />
          </div>
        </div>
      </div>
    </main>
  )
}