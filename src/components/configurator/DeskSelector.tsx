"use client"

import { desks } from "../../data/products"
import { useWorkspaceStore } from "../../store/useWorkspaceStore"

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
            className={`
    w-full text-left p-3 rounded-xl border transition
    hover:shadow-md hover:scale-[1.02]
    ${desk?.id === d.id
                ? "bg-black text-white border-black"
                : "bg-neutral-50 border-neutral-200"
              }
  `}
          >
            <div className="font-semibold">{d.name}</div>
            <div className="text-sms">${d.price}/mo</div>
          </button>
        ))}
      </div>
    </div>
  )
}