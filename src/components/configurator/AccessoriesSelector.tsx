"use client"

import { accessories } from "@/data/products"
import { useWorkspaceStore } from "@/store/useWorkspaceStore"

export default function AccessoriesSelector() {
  const { accessories: selected, toggleAccessory } = useWorkspaceStore()

  return (
    <div>
      <p
        className="text-xs uppercase tracking-widest mb-3"
        style={{ color: "var(--color-bark-600)", fontWeight: 600 }}
      >
        Accessories
      </p>

      <div className="flex flex-col gap-2">
        {accessories.map((a) => {
          const isSelected = !!selected.find((item) => item.id === a.id)

          return (
            <button
              key={a.id}
              onClick={() => toggleAccessory(a)}
              className="item-card w-full flex justify-between items-center rounded-xl px-4 py-3"
              style={{
                background: isSelected ? "var(--color-bark-900)" : "var(--color-sand-50)",
                border: `1.5px solid ${isSelected ? "var(--color-bark-900)" : "var(--color-sand-200)"}`,
                color: isSelected ? "white" : "var(--color-bark-900)",
                boxShadow: isSelected ? "0 4px 16px rgba(42,31,21,0.18)" : "none",
              }}
            >
              <span style={{ fontWeight: 500, fontSize: "14px" }}>{a.name}</span>
              <span style={{ fontSize: "12px", opacity: 0.65 }}>
                +${a.price}/mo
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
