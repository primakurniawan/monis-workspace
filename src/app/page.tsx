import WorkspaceCanvas from "@/components/workspace/WorkspaceCanvas"
import DeskSelector from "@/components/configurator/DeskSelector"
import ChairSelector from "@/components/configurator/ChairSelector"
import AccessoriesSelector from "@/components/configurator/AccessoriesSelector"
import SummaryPanel from "@/components/summary/SummaryPanel"

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--color-sand-50)" }}>
      {/* Top Nav / Header */}
      <header className="border-b px-8 py-4 flex items-center justify-between"
        style={{ borderColor: "var(--color-sand-200)", background: "rgba(250,248,245,0.8)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 100 }}>
        <div className="flex items-center gap-2">
          <span className="text-lg" style={{ fontFamily: "var(--font-dm-serif)", color: "var(--color-bark-900)" }}>
            monis
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: "var(--color-sand-200)", color: "var(--color-bark-600)", fontWeight: 500 }}>
            workspace
          </span>
        </div>
        <span className="text-xs" style={{ color: "var(--color-bark-600)" }}>
          Bali-inspired remote setups ☀️
        </span>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl mb-3 leading-tight"
            style={{ fontFamily: "var(--font-dm-serif)", color: "var(--color-bark-900)" }}>
            Design Your Workspace
          </h1>
          <p className="text-base" style={{ color: "var(--color-bark-600)" }}>
            Handpick every piece — desk, chair & accessories — to build your perfect setup.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* LEFT PANEL — Configurator */}
          <div className="col-span-3 flex flex-col gap-4">
            <div className="rounded-2xl p-5"
              style={{ background: "white", border: "1px solid var(--color-sand-200)", boxShadow: "0 2px 16px rgba(42,31,21,0.06)" }}>
              <DeskSelector />
            </div>
            <div className="rounded-2xl p-5"
              style={{ background: "white", border: "1px solid var(--color-sand-200)", boxShadow: "0 2px 16px rgba(42,31,21,0.06)" }}>
              <ChairSelector />
            </div>
            <div className="rounded-2xl p-5"
              style={{ background: "white", border: "1px solid var(--color-sand-200)", boxShadow: "0 2px 16px rgba(42,31,21,0.06)" }}>
              <AccessoriesSelector />
            </div>
          </div>

          {/* CENTER CANVAS */}
          <div className="col-span-6">
            <WorkspaceCanvas />
          </div>

          {/* RIGHT — Summary */}
          <div className="col-span-3">
            <SummaryPanel />
          </div>
        </div>
      </div>
    </main>
  )
}
