export interface Category {
  id: number
  name: string
  color: string
  icon: string
}

export interface Element {
  id: number
  name: string
  emoji: string
  category_id: number | null
  is_base: boolean
  tier: number
  description: string | null
  created_at: string
}

export interface Combination {
  id: number
  element1_id: number
  element2_id: number
  result_id: number
}

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: Category
        Insert: Omit<Category, 'id'>
        Update: Partial<Omit<Category, 'id'>>
      }
      elements: {
        Row: Element
        Insert: Omit<Element, 'id' | 'created_at'>
        Update: Partial<Omit<Element, 'id' | 'created_at'>>
      }
      combinations: {
        Row: Combination
        Insert: Omit<Combination, 'id'>
        Update: Partial<Omit<Combination, 'id'>>
      }
    }
  }
}
