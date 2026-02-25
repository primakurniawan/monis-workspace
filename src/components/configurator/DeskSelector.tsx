"use client"

import { desks } from "../../data/products"
import { useWorkspaceStore } from "../../store/useWorkspaceStore"

export default function DeskSelector() {
  const { setDesk, desk } = useWorkspaceStore()

  return (
    <div>
      <p
        className="text-xs uppercase tracking-widest mb-3"
        style={{ color: "var(--color-bark-600)", fontWeight: 600 }}
      >
        Desk
      </p>

      <div className="flex flex-col gap-2">
        {desks.map((d) => {
          const selected = desk?.id === d.id
          return (
            <button
              key={d.id}
              onClick={() => setDesk(d)}
              className="item-card w-full text-left rounded-xl px-4 py-3 flex justify-between items-center"
              style={{
                background: selected ? "var(--color-bark-900)" : "var(--color-sand-50)",
                border: `1.5px solid ${selected ? "var(--color-bark-900)" : "var(--color-sand-200)"}`,
                color: selected ? "white" : "var(--color-bark-900)",
                boxShadow: selected ? "0 4px 16px rgba(42,31,21,0.18)" : "none",
              }}
            >
              <span style={{ fontWeight: 500, fontSize: "14px" }}>{d.name}</span>
              <span
                style={{
                  fontSize: "12px",
                  opacity: 0.65,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                ${d.price}/mo
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
