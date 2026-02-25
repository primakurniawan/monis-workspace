import { create } from "zustand"
import { WorkspaceState, Desk, Chair, Accessory } from "@/types/workspace"

type Store = WorkspaceState & {
  setDesk: (desk: Desk) => void
  setChair: (chair: Chair) => void
  toggleAccessory: (acc: Accessory) => void
  totalPrice: () => number
}

export const useWorkspaceStore = create<Store>((set, get) => ({
  desk: null,
  chair: null,
  accessories: [],

  setDesk: (desk) => set({ desk }),

  setChair: (chair) => set({ chair }),

  toggleAccessory: (acc) =>
    set((state) => {
      const exists = state.accessories.find((a) => a.id === acc.id)
      if (exists) {
        return {
          accessories: state.accessories.filter((a) => a.id !== acc.id)
        }
      }
      return { accessories: [...state.accessories, acc] }
    }),

  totalPrice: () => {
    const { desk, chair, accessories } = get()
    return (
      (desk?.price || 0) +
      (chair?.price || 0) +
      accessories.reduce((sum, a) => sum + a.price, 0)
    )
  }
}))