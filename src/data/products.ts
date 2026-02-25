import { Desk, Chair, Accessory } from "../types/workspace"

export const desks: Desk[] = [
  {
    id: "desk-1",
    name: "Minimal Desk",
    price: 80,
    image: "/furniture/desk/desk-minimal.png"
  },
  {
    id: "desk-2",
    name: "Executive Desk",
    price: 120,
    image: "/furniture/desk/desk-executive.png"
  }
]

export const chairs: Chair[] = [
  {
    id: "chair-1",
    name: "Ergo Chair",
    price: 60,
    image: "/furniture/chair/chair-ergo.png"
  },
  {
    id: "chair-2",
    name: "Premium Chair",
    price: 90,
    image: "/furniture/chair/chair-premium.png"
  }
]

export const accessories: Accessory[] = [
  {
    id: "monitor",
    name: "Monitor",
    price: 40,
    image: "/accessories/monitor.png"
  },
  {
    id: "lamp",
    name: "Desk Lamp",
    price: 15,
    image: "/accessories/lamp.png"
  },
  {
    id: "plant",
    name: "Plant",
    price: 10,
    image: "/accessories/plant.png"
  }
]