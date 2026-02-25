"use client"

import { useWorkspaceStore } from "./../../store/useWorkspaceStore"

export default function SummaryPanel() {
  const { desk, chair, accessories, totalPrice } = useWorkspaceStore()

  const total = totalPrice()
  const isEmpty = !desk && !chair && accessories.length === 0

  return (
    <div
      className="rounded-2xl p-6 sticky top-20"
      style={{
        background: "white",
        border: "1px solid var(--color-sand-200)",
        boxShadow: "0 2px 16px rgba(42,31,21,0.06)",
      }}
    >
      {/* Header */}
      <p
        className="text-xs uppercase tracking-widest mb-5"
        style={{ color: "var(--color-bark-600)", fontWeight: 600 }}
      >
        Your Setup
      </p>

      {/* Line items */}
      {isEmpty ? (
        <p style={{ fontSize: "13px", color: "var(--color-bark-600)", opacity: 0.6 }}>
          Nothing selected yet. Pick a desk or chair to start.
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {desk && (
            <LineItem label="Desk" name={desk.name} price={desk.price} />
          )}
          {chair && (
            <LineItem label="Chair" name={chair.name} price={chair.price} />
          )}
          {accessories.map((a) => (
            <LineItem key={a.id} label="" name={a.name} price={a.price} />
          ))}
        </div>
      )}

      {/* Divider + total */}
      <div
        className="mt-5 pt-4"
        style={{ borderTop: "1px solid var(--color-sand-200)" }}
      >
        <div className="flex justify-between items-baseline mb-1">
          <span style={{ fontSize: "13px", color: "var(--color-bark-600)" }}>
            Monthly total
          </span>
          <span
            style={{
              fontSize: "22px",
              fontFamily: "var(--font-dm-serif)",
              color: "var(--color-bark-900)",
            }}
          >
            ${total}
          </span>
        </div>
        <p style={{ fontSize: "11px", color: "var(--color-bark-600)", opacity: 0.55 }}>
          /mo · billed monthly
        </p>
      </div>

      {/* CTA */}
      <button
        disabled={isEmpty}
        className="mt-6 w-full py-3 rounded-xl text-sm font-semibold transition"
        style={{
          background: isEmpty ? "var(--color-sand-200)" : "var(--color-bark-900)",
          color: isEmpty ? "var(--color-bark-600)" : "white",
          cursor: isEmpty ? "not-allowed" : "pointer",
          letterSpacing: "0.02em",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => {
          if (!isEmpty) (e.target as HTMLButtonElement).style.opacity = "0.85"
        }}
        onMouseLeave={(e) => {
          if (!isEmpty) (e.target as HTMLButtonElement).style.opacity = "1"
        }}
      >
        Lock In My Workspace →
      </button>
    </div>
  )
}

function LineItem({
  label,
  name,
  price,
}: {
  label: string
  name: string
  price: number
}) {
  return (
    <div className="flex justify-between items-center">
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        {label && (
          <span
            className="text-xs px-1.5 py-0.5 rounded"
            style={{
              background: "var(--color-sand-100)",
              color: "var(--color-bark-600)",
              fontWeight: 600,
              fontSize: "10px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {label}
          </span>
        )}
        <span style={{ fontSize: "13px", color: "var(--color-bark-900)" }}>
          {name}
        </span>
      </div>
      <span
        style={{
          fontSize: "13px",
          color: "var(--color-bark-600)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        ${price}
      </span>
    </div>
  )
}
