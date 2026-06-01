import { ref, computed, watch } from 'vue'
import professionalsData from '~/data/professionals.json'
import type { SortOption } from '~/types/sort'
import type { Professional } from '~/types/professional'

const ITEMS_PER_PAGE = 24

export const useProfessionals = () => {
  const professionals = ref<Professional[]>(professionalsData)
  const search = ref('')
  const sort = ref<SortOption>('rating_desc')
  const profession = ref('all')
  const visibleCount = ref(ITEMS_PER_PAGE)
  const isLoadingMore = ref(false)


  const filteredProfessionals = computed(() => {
    let result = [...professionals.value]

    if (search.value.trim()) {
      const term = search.value.toLowerCase()

      result = result.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.profession.toLowerCase().includes(term)
      )
    }

    if (profession.value !== 'all') {
      result = result.filter(p => p.profession === profession.value)
    }

    if (sort.value === 'price_asc') {
      result.sort((a, b) => a.price - b.price)
    }

    if (sort.value === 'price_desc') {
      result.sort((a, b) => b.price - a.price)
    }

    if (sort.value === 'rating_desc') {
      result.sort((a, b) => b.rating - a.rating)
    }

    if (sort.value === 'distance_asc') {
      result.sort((a, b) => a.distance - b.distance)
    }

    return result
  })

  const visibleProfessionals = computed(() =>
    filteredProfessionals.value.slice(0, visibleCount.value)
  )

  const hasMore = computed(() =>
    visibleProfessionals.value.length <
    filteredProfessionals.value.length
  )

  const loadMore = async () => {
    isLoadingMore.value = true
    await new Promise(r => setTimeout(r, 800))
    visibleCount.value += ITEMS_PER_PAGE
    isLoadingMore.value = false
  }

  const professionCounts = computed(() => {
    const counts = professionals.value.reduce((acc, p) => {
      acc[p.profession] = (acc[p.profession] || 0) + 1
      return acc
    }, {} as Record<string, number>)

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


  const hasActiveFilters = computed(() =>
    search.value.trim() !== '' ||
    profession.value !== 'all' ||
    sort.value !== 'rating_desc'
  )

  const clearFilters = () => {
    search.value = ''
    sort.value = 'rating_desc'
    profession.value = 'all'
    visibleCount.value = ITEMS_PER_PAGE
  }

  watch([search, sort, profession], () => {
    visibleCount.value = ITEMS_PER_PAGE
    isLoadingMore.value = false
  })

  return {
    search,
    sort,
    profession,
    filteredProfessionals,
    visibleProfessionals,
    professionCounts,
    loadMore,
    clearFilters,
    hasMore,
    isLoadingMore,
    hasActiveFilters
  }
}