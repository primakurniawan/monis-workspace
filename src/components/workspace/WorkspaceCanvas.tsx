"use client"

import { useWorkspaceStore } from "../../store/useWorkspaceStore"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function WorkspaceCanvas() {
  const { desk, chair, accessories } = useWorkspaceStore()
  const monitor = accessories.find((a) => a.id === "monitor")
  const plant = accessories.find((a) => a.id === "plant")
  const lamp = accessories.find((a) => a.id === "lamp")
  const hasAny = desk || chair || accessories.length > 0

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        height: "540px",
        position: "relative",
        background: "linear-gradient(175deg,#ece0d2 0%,#d8c8b0 50%,#c8b498 100%)",
        boxShadow: "0 8px 48px rgba(42,31,21,0.18),0 2px 8px rgba(42,31,21,0.08)",
      }}
    >
      {/* Ceiling light */}
      <div style={{
        position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
        width: 440, height: 260, pointerEvents: "none", zIndex: 1,
        background: "radial-gradient(ellipse,rgba(255,245,220,0.55) 0%,transparent 70%)",
      }} />

      {/* Floor */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "34%", zIndex: 2,
        background: "linear-gradient(to bottom,#cbb8a0,#b8a48c)",
        borderRadius: "0 0 24px 24px",
        boxShadow: "inset 0 8px 20px rgba(0,0,0,0.1)",
      }} />

      {/* Floor seam */}
      <div style={{
        position: "absolute", bottom: "34%", left: 0, right: 0,
        height: 1, background: "rgba(100,70,40,0.18)", zIndex: 3,
      }} />

      {/* Empty hint */}
      <AnimatePresence>
        {!hasAny && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: "absolute", inset: 0, zIndex: 10,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 8,
            }}
          >
            <span style={{ fontSize: 44 }}>🪑</span>
            <p style={{ fontSize: 13, fontWeight: 500, opacity: 0.5, color: "var(--color-bark-700)" }}>
              Pick a desk to start building →
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CHAIR z:10 — tucked behind desk, smaller so it peeks out naturally */}
      <AnimatePresence>
        {chair && (
          <motion.div
            key={chair.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              bottom: "34%",   /* sits on floor */
              left: "45%",
              transform: "translateX(-20%)", /* offset right so it peeks from behind desk */
              width: "22%",    /* smaller — it's receding behind the desk */
              zIndex: 10,      /* behind desk (z:25) */
            }}
          >
            <Image src={chair.image} alt={chair.name} width={400} height={520}
              className="object-contain"
              style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.25))" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESK z:25 — centered, covers chair legs */}
      <AnimatePresence>
        {desk && (
          <motion.div
            key={desk.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              bottom: "33%",
              left: "15%",
              transform: "translateX(-50%)",
              width: "70%",
              zIndex: 25,      /* in front of chair */
            }}
          >
            <Image src={desk.image} alt={desk.name} width={800} height={320}
              className="object-contain"
              style={{ filter: "drop-shadow(0 14px 26px rgba(0,0,0,0.28))" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MONITOR z:20 — centered on desk surface */}
      <AnimatePresence>
        {monitor && (
          <motion.div
            key="monitor"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              bottom: "57%",
              left: "25%",
              transform: "translateX(-50%)",
              width: "20%",
              zIndex: 20,
            }}
          >
            <Image src={monitor.image} alt={monitor.name} width={520} height={420}
              className="object-contain"
              style={{ filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.24))" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* LAMP z:22 — right side of desk */}
      <AnimatePresence>
        {lamp && (
          <motion.div
            key="lamp"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              bottom: "57%",
              left: "70%",
              width: "9%",
              zIndex: 22,
            }}
          >
            <Image src={lamp.image} alt={lamp.name} width={220} height={340}
              className="object-contain"
              style={{ filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.2))" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* PLANT z:30 — floor, far left */}
      <AnimatePresence>
        {plant && (
          <motion.div
            key="plant"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              bottom: "32%",
              left: "5%",
              width: "12%",
              zIndex: 30,
            }}
          >
            <Image src={plant.image} alt={plant.name} width={240} height={360}
              className="object-contain"
              style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.2))" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Label */}
      <div style={{
        position: "absolute", top: 14, left: 18, zIndex: 40,
        fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
        textTransform: "uppercase", color: "rgba(80,55,35,0.4)", pointerEvents: "none",
      }}>
        Preview
      </div>
    </div>
  )
}