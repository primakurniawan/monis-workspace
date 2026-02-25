"use client"

import { useWorkspaceStore } from "../../store/useWorkspaceStore"
import { motion } from "framer-motion"
import Image from "next/image"

export default function WorkspaceCanvas() {
  const { desk, chair, accessories } = useWorkspaceStore()

  const monitor = accessories.find((a) => a.id === "monitor")
  const plant = accessories.find((a) => a.id === "plant")
  const lamp = accessories.find((a) => a.id === "lamp")

  return (
    <div className="relative w-full h-[520px] rounded-3xl overflow-hidden bg-white shadow-2xl">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-200 -z-10" />

      {/* Ground */}
      <div className="absolute bottom-0 w-full h-24 bg-neutral-300" />

      {/* === MONITOR (BACK LAYER) === */}
      {monitor && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-[42%] left-1/2 -translate-x-1/2 w-[30%] z-10"
        >
          <Image
            src={monitor.image}
            alt={monitor.name}
            width={500}
            height={500}
            className="object-contain drop-shadow-xl"
          />
        </motion.div>
      )}

      {/* === DESK (MIDDLE LAYER) === */}
      {desk && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[65%] z-20"
        >
          <Image
            src={desk.image}
            alt={desk.name}
            width={1000}
            height={600}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      )}

      {/* === CHAIR (FRONT LAYER) === */}
      {chair && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] z-30"
        >
          <Image
            src={chair.image}
            alt={chair.name}
            width={600}
            height={600}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      )}

      {/* === LAMP (RIGHT SIDE) === */}
      {lamp && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-[35%] right-[12%] w-[18%] z-25"
        >
          <Image
            src={lamp.image}
            alt={lamp.name}
            width={400}
            height={400}
            className="object-contain drop-shadow-xl"
          />
        </motion.div>
      )}

      {/* === PLANT (FRONT LEFT) === */}
      {plant && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-[5%] left-[12%] w-[18%] z-40"
        >
          <Image
            src={plant.image}
            alt={plant.name}
            width={400}
            height={400}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      )}
    </div>
  )
}