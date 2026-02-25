"use client"

import { chairs } from "@/data/products"
import { useWorkspaceStore } from "@/store/useWorkspaceStore"

export default function ChairSelector() {
  const { setChair, chair } = useWorkspaceStore()

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Choose Chair</h2>

      <div className="space-y-3">
        {chairs.map((c) => (
          <button
            key={c.id}
            onClick={() => setChair(c)}
            className={`
              w-full text-left p-3 rounded-xl border transition
              hover:shadow-md hover:scale-[1.02]
              ${
                chair?.id === c.id
                  ? "bg-black text-white border-black"
                  : "bg-neutral-50 border-neutral-200"
              }
            `}
          >
            <div className="font-semibold">{c.name}</div>
            <div className="text-sm opacity-70">
              ${c.price}/month
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}