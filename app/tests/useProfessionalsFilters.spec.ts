import { describe, expect, it } from 'vitest'
import { ref } from 'vue'

import { useProfessionalFilters } from '~/composables/useProfessionalFilters'
import type { Professional } from '~/types/professional'

const professionals = ref<Professional[]>([
  {
    id: 1,
    name: 'João Silva',
    profession: 'Eletricista',
    photo: '',
    description: '',
    price: 120,
    rating: 4.8,
    city: 'São Paulo',
    distance: 5
  },
  {
    id: 2,
    name: 'Maria Souza',
    profession: 'Encanador',
    photo: '',
    description: '',
    price: 80,
    rating: 4.2,
    city: 'Curitiba',
    distance: 2
  },
  {
    id: 3,
    name: 'Carlos Lima',
    profession: 'Eletricista',
    photo: '',
    description: '',
    price: 100,
    rating: 4.5,
    city: 'Florianópolis',
    distance: 8
  }
])

describe('useProfessionalFilters', () => {
  it('filters professionals by search term', () => {
    const { search, filteredProfessionals } =
      useProfessionalFilters(professionals)

    search.value = 'joão'

    expect(filteredProfessionals.value).toHaveLength(1)
    expect(filteredProfessionals.value[0]!.name)
      .toBe('João Silva')
  })

  it('filters professionals by profession', () => {
    const { profession, filteredProfessionals } =
      useProfessionalFilters(professionals)

    profession.value = 'Eletricista'

    expect(filteredProfessionals.value).toHaveLength(2)

    expect(
      filteredProfessionals.value.every(
        professional => professional.profession === 'Eletricista'
      )
    ).toBe(true)
  })

  it('sorts professionals by price ascending', () => {
    const { sort, filteredProfessionals } =
      useProfessionalFilters(professionals)

    sort.value = 'price_asc'

    expect(filteredProfessionals.value[0]!.price).toBe(80)
    expect(filteredProfessionals.value[1]!.price).toBe(100)
    expect(filteredProfessionals.value[2]!.price).toBe(120)
  })

  it('clears all filters', () => {
    const {
      search,
      profession,
      sort,
      clearFilters
    } = useProfessionalFilters(professionals)

    search.value = 'joão'
    profession.value = 'Eletricista'
    sort.value = 'price_asc'

    clearFilters()

    expect(search.value).toBe('')
    expect(profession.value).toBe('all')
    expect(sort.value).toBe('rating_desc')
  })
})