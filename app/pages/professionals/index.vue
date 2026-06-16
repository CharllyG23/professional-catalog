<template>
  <main class="professionals-page">
    <CatalogProfessionalHeader />
    <section class="professionals-page__container">
      <div class="professional-toolbar">
        <h4>Filtre os profissionais</h4>
        <div class="professional-toolbar__top">
          <FiltersProfessionalSearch v-model="search" />
          <FiltersProfessionalCitySelect v-model="city" :cities="cityOptions" />
          <FiltersProfessionalSort v-model="sort" />
        </div>
        <FiltersProfessionalProfession v-model="profession" :professions="professionCounts"/>
      </div>

      <ProfessionalResultsHeader
        :visible-count="visibleProfessionals.length"
        :total-count="filteredProfessionals.length"
        :has-active-filters="hasActiveFilters"
        @clear="clearFilters"
      />

      <CatalogProfessionalCatalogSkeleton v-if="isLoading" />
      <CatalogProfessionalCatalog
        v-else
        :professionals="visibleProfessionals"
        @select="openProfessional"
      />

      <div v-if="!isLoading && isLoadingMore" class="professional-skeleton-grid">
        <CatalogProfessionalCardSkeleton v-for="item in 6" :key="item"/>
      </div>

      <ProfessionalLoadMoreButton
        :show="hasMore"
        :loading="isLoadingMore"
        :label="loadMoreLabel"
        @click="handleLoadMore"
      />
    </section>

    <button v-if="showBackToTop" class="back-to-top" @click="scrollToResults">
      Rolar para acima
    </button>

    <CatalogProfessionalEmptyState v-if="showEmptyState" />
    <ProfileProfessionalDrawer v-if="selectedProfessionalId" :professional-id="selectedProfessionalId"/>
  </main>
  <LayoutFooter />
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useProfessionals } from '~/composables/useProfessionals'
import ProfessionalResultsHeader from './ProfessionalResultsHeader.vue'
import ProfessionalLoadMoreButton from './ProfessionalLoadMoreButton.vue'

useSeoMeta({
  title: 'Profissionais | Professional Catalog',
  description:
    'Encontre profissionais qualificados através de filtros, busca e ordenação.',
  ogTitle: 'Profissionais | Professional Catalog',
  ogDescription:
    'Catálogo online de profissionais.',
  ogType: 'website'
})

const router = useRouter()
const route = useRoute()
const showBackToTop = ref(false)
const hasLoadedMore = ref(false)

const {
  search,
  sort,
  city,
  profession,
  filteredProfessionals,
  visibleProfessionals,
  professionCounts,
  hasMore,
  isLoadingMore,
  loadMore,
  isLoading,
  hasActiveFilters,
  cityOptions,
  clearFilters
} = useProfessionals()

const loadMoreLabel = computed(() =>
  isLoadingMore.value
    ? 'Carregando...'
    : 'Carregar mais profissionais'
)

const showEmptyState = computed(() =>
  !isLoading.value &&
  !isLoadingMore.value &&
  filteredProfessionals.value.length === 0
)

const selectedProfessionalId = computed(() => {
  const id = route.query.id
  return id ? Number(id) : null
})

const openProfessional = (id: number) => {
  router.push({
    query: {
      ...route.query,
      id: String(id)
    }
  })
}

const handleScroll = () => {
  showBackToTop.value =
    hasLoadedMore.value &&
    window.scrollY > 1000
}

const scrollToResults = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleLoadMore = async () => {
  hasLoadedMore.value = true
  await loadMore()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>
<style scoped lang="scss">
.professionals-page {
  min-height: 100vh;

  &__container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-inline: var(--space-4);
  }
}

.professional-skeleton-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-6);
}

.professional-toolbar {
  &__top {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(180px, 1fr) minmax(180px, 1fr);
    gap: var(--space-4);
    align-items: center;
  }
}

.back-to-top {
  position: fixed;
  right: var(--space-4);
  bottom: var(--space-6);
  z-index: 100;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-lg);
  color: var(--color-primary);
  font-size: var(--font-xs);
  background-color: var(--color-soft-bg);
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition:
    transform var(--transition-base),
    background var(--transition-base);

  &:hover {
    background: var(--color-primary);
    color: var(--color-soft-bg);
    transform: translateY(-2px);
  }
}

@media (max-width: 768px) {

  .professional-toolbar {
    &__top {
      grid-template-columns: 1fr;
      gap: var(--space-3);
    }
  }
}
</style>