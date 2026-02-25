"use client"

import { desks } from "@/data/products"
import { useWorkspaceStore } from "@/store/useWorkspaceStore"

export default function DeskSelector() {
  const { setDesk, desk } = useWorkspaceStore()

  return (
    <div>
      <h2 className="font-bold mb-2">Choose Desk</h2>
      <div className="space-y-2">
        {desks.map((d) => (
          <button
            key={d.id}
            onClick={() => setDesk(d)}
            className={`p-2 border rounded w-full ${
              desk?.id === d.id ? "bg-black text-white" : ""
            }`}
          >
            {d.name} (${d.price}/mo)
          </button>
        ))}
      </div>
    </div>
  )
}