import { computed, ref, type Ref } from 'vue'
import type { Professional } from '~/types/professional'
import type { SortOption } from '~/types/sort'

export const useProfessionalFilters = (
  professionals: Ref<Professional[]>
) => {
  const search = ref('')
  const sort = ref<SortOption>('rating_desc')
  const profession = ref('all')

  const filteredProfessionals = computed(() => {
    let result = [...professionals.value]

    if (search.value.trim()) {
      const term = search.value.toLowerCase()

      result = result.filter(
        professional =>
          professional.name.toLowerCase().includes(term) ||
          professional.profession.toLowerCase().includes(term)
      )
    }

    if (profession.value !== 'all') {
      result = result.filter(
        professional => professional.profession === profession.value
      )
    }

    const sortStrategies = {
      price_asc: (a: Professional, b: Professional) => a.price - b.price,
      price_desc: (a: Professional, b: Professional) => b.price - a.price,
      rating_desc: (a: Professional, b: Professional) => b.rating - a.rating,
      distance_asc: (a: Professional, b: Professional) =>
        a.distance - b.distance
    }

    result.sort(sortStrategies[sort.value])

    return result
  })

  const professionCounts = computed(() => {
    const counts = professionals.value.reduce(
      (acc, professional) => {
        acc[professional.profession] =
          (acc[professional.profession] || 0) + 1

        return acc
      },
      {} as Record<string, number>
    )

    return [
      {
        value: 'all',
        label: 'Todos',
        total: professionals.value.length
      },
      ...Object.entries(counts).map(([profession, total]) => ({
        value: profession,
        label: profession,
        total
      }))
    ]
  })

  const hasActiveFilters = computed(
    () =>
      search.value.trim() !== '' ||
      profession.value !== 'all' ||
      sort.value !== 'rating_desc'
  )

  const clearFilters = () => {
    search.value = ''
    sort.value = 'rating_desc'
    profession.value = 'all'
  }

  return {
    search,
    sort,
    profession,
    filteredProfessionals,
    professionCounts,
    hasActiveFilters,
    clearFilters
  }
}