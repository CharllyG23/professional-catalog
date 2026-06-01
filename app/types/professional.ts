export interface Professional {
  id: number
  name: string
  profession: string
  photo: string
  description: string
  price: number
  rating: number
  city: string
  distance: number
}

export interface ProfessionItem {
  value: string
  label: string
  total: number
}
