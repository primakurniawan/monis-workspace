import { Desk, Chair, Accessory } from "@/types/workspace"

export const desks: Desk[] = [
  {
    id: "desk-1",
    name: "Minimal Desk",
    price: 80,
    image: "/desk1.png"
  },
  {
    id: "desk-2",
    name: "Executive Desk",
    price: 120,
    image: "/desk2.png"
  }
]

export const chairs: Chair[] = [
  {
    id: "chair-1",
    name: "Ergo Chair",
    price: 60,
    image: "/chair1.png"
  },
  {
    id: "chair-2",
    name: "Premium Chair",
    price: 90,
    image: "/chair2.png"
  }
]

export const accessories: Accessory[] = [
  {
    id: "monitor",
    name: "Monitor",
    price: 40,
    image: "/monitor.png"
  },
  {
    id: "lamp",
    name: "Desk Lamp",
    price: 15,
    image: "/lamp.png"
  },
  {
    id: "plant",
    name: "Plant",
    price: 10,
    image: "/plant.png"
  }
]