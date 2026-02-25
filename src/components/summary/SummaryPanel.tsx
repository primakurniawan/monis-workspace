"use client"

import { useWorkspaceStore } from "@/store/useWorkspaceStore"

export default function SummaryPanel() {
  const { desk, chair, accessories, totalPrice } = useWorkspaceStore()

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="font-bold mb-3">Your Setup</h2>

      <ul className="space-y-1 text-sm">
        {desk && <li>Desk: {desk.name}</li>}
        {chair && <li>Chair: {chair.name}</li>}
        {accessories.map((a) => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>

      <div className="mt-4 font-bold">
        Total: ${totalPrice()}/month
      </div>

      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">
        Lock In My Workspace
      </button>
    </div>
  )
}