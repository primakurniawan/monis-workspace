"use client"

import { useWorkspaceStore } from "@/store/useWorkspaceStore"
import { motion } from "framer-motion"
import Image from "next/image"

export default function WorkspaceCanvas() {
  const { desk, chair, accessories } = useWorkspaceStore()

  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded-xl overflow-hidden">
      {desk && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Image src={desk.image} alt={desk.name} fill className="object-contain" />
        </motion.div>
      )}

      {chair && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Image src={chair.image} alt={chair.name} fill className="object-contain" />
        </motion.div>
      )}

      {accessories.map((acc) => (
        <motion.div
          key={acc.id}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute"
        >
          <Image src={acc.image} alt={acc.name} width={150} height={150} />
        </motion.div>
      ))}
    </div>
  )
}