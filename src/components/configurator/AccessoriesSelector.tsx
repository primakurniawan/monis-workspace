"use client"

import { accessories } from "@/data/products"
import { useWorkspaceStore } from "@/store/useWorkspaceStore"

export default function AccessoriesSelector() {
  const { accessories: selected, toggleAccessory } =
    useWorkspaceStore()

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">
        Add Accessories
      </h2>

      <div className="space-y-3">
        {accessories.map((a) => {
          const isSelected = selected.find(
            (item) => item.id === a.id
          )

          return (
            <button
              key={a.id}
              onClick={() => toggleAccessory(a)}
              className={`
                w-full flex justify-between items-center
                p-3 rounded-xl border transition
                hover:shadow-md hover:scale-[1.02]
                ${
                  isSelected
                    ? "bg-black text-white border-black"
                    : "bg-neutral-50 border-neutral-200"
                }
              `}
            >
              <span>{a.name}</span>
              <span className="text-sm">
                ${a.price}/month
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}