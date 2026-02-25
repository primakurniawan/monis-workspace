export type Desk = {
  id: string
  name: string
  price: number
  image: string
}

export type Chair = {
  id: string
  name: string
  price: number
  image: string
}

export type Accessory = {
  id: string
  name: string
  price: number
  image: string
}

export type WorkspaceState = {
  desk: Desk | null
  chair: Chair | null
  accessories: Accessory[]
}