"use client"

import { useWorkspaceStore } from "./../../store/useWorkspaceStore"

export default function SummaryPanel() {
  const { desk, chair, accessories, totalPrice } = useWorkspaceStore()

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
      <h2 className="text-xl font-bold mb-4">Your Setup</h2>

      <div className="space-y-2 text-sm text-neutral-700">
        {desk && <div>Desk: {desk.name}</div>}
        {chair && <div>Chair: {chair.name}</div>}
        {accessories.map((a) => (
          <div key={a.id}>{a.name}</div>
        ))}
      </div>

      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${totalPrice()}/mo</span>
        </div>

        <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition">
          Lock In My Workspace
        </button>
      </div>
    </div>
  )
}