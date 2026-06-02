import { computed, onMounted, ref, watch } from 'vue'
import { professionalService } from '~/services/professional.service'
import type { Professional } from '~/types/professional'

const ITEMS_PER_PAGE = 24

export const useProfessionals = () => {
  const professionals = ref<Professional[]>([])
  const isLoading = ref(true)
  const visibleCount = ref(ITEMS_PER_PAGE)
  const isLoadingMore = ref(false)

  const loadProfessionals = async () => {
    try {
      professionals.value = await professionalService.getAll()
    } finally {
      isLoading.value = false
    }
  }

  onMounted(loadProfessionals)

  const {
    search,
    sort,
    profession,
    filteredProfessionals,
    professionCounts,
    hasActiveFilters,
    clearFilters
  } = useProfessionalFilters(professionals)

  const visibleProfessionals = computed(() =>
    filteredProfessionals.value.slice(0, visibleCount.value)
  )

  const hasMore = computed(
    () =>
      visibleProfessionals.value.length <
      filteredProfessionals.value.length
  )

  const loadMore = async () => {
    isLoadingMore.value = true

    try {
      await new Promise(resolve => setTimeout(resolve, 800))

      visibleCount.value += ITEMS_PER_PAGE
    } finally {
      isLoadingMore.value = false
    }
  }

  watch([search, sort, profession], () => {
    visibleCount.value = ITEMS_PER_PAGE
    isLoadingMore.value = false
  })

  const handleClearFilters = () => {
    clearFilters()
    visibleCount.value = ITEMS_PER_PAGE
  }

  return {
    search,
    sort,
    profession,
    filteredProfessionals,
    visibleProfessionals,
    professionCounts,
    loadMore,
    hasMore,
    isLoading,
    isLoadingMore,
    hasActiveFilters,
    clearFilters: handleClearFilters
  }
}