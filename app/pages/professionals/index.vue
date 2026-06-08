<template>
  <main>
    <CatalogProfessionalHeader />
    <div class="professional-toolbar">
      <div class="professional-toolbar__top">
        <FiltersProfessionalSearch v-model="search" />
        <FiltersProfessionalSort v-model="sort" />
      </div>

      <FiltersProfessionalProfession v-model="profession" :professions="professionCounts"/>
    </div>

    <section class="professionals-results">
      <div class="professionals-results__header">
        <p class="professionals-results__title">
          Exibindo
          <strong>{{ visibleProfessionals.length }}</strong>
          de
          <strong>{{ filteredProfessionals.length }}</strong>
          profissionais
        </p>

        <button
          v-if="hasActiveFilters"
          class="professionals-results__clear"
          @click="clearFilters"
        >
          Limpar filtros
        </button>
      </div>

      <CatalogProfessionalCatalogSkeleton v-if="isLoading" />
      <CatalogProfessionalCatalog 
				v-else 
				:professionals="visibleProfessionals" 
				@select="openProfessional"
				/>

      <div v-if="!isLoading && isLoadingMore" class="professional-skeleton-grid">
        <CatalogProfessionalCardSkeleton v-for="item in 6" :key="item" />
      </div>
      
      <button
        v-if="hasMore"
        class="professionals-results__load-more"
        :disabled="isLoadingMore"
        @click="loadMore"
      >
        {{ loadMoreLabel }}
      </button>
    </section>

    <CatalogProfessionalEmptyState v-if="showEmptyState" />
		<ProfileProfessionalDrawer v-if="selectedProfessionalId" :professional-id="selectedProfessionalId"/>
  </main>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useProfessionals } from '~/composables/useProfessionals'

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

const {
  search,
  sort,
  profession,
  filteredProfessionals,
  visibleProfessionals,
  professionCounts,
  hasMore,
  isLoadingMore,
  loadMore,
  isLoading,
  hasActiveFilters,
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
</script>
<style scoped lang="scss">
.professionals-results {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-6);
  }

  &__title {
    margin: 0;
    font-size: var(--font-md);
    font-weight: var(--font-regular);
    color: var(--color-text-muted);

    strong {
      color: var(--color-text);
      font-weight: var(--font-bold);
    }
  }

  &__clear {
    border: none;
    background: transparent;
    color: var(--color-primary);
    font-weight: var(--font-semibold);
    cursor: pointer;
    transition: color var(--transition-base);

    &:hover {
      text-decoration: underline;
    }
  }

  &__load-more {
    display: block;
    margin: var(--space-8) auto;
    padding: var(--space-4) var(--space-8);
    border: none;
    border-radius: var(--radius-md);
    background: var(--color-primary);
    color: var(--color-surface);
    cursor: pointer;
    transition: opacity var(--transition-base);

    &:hover {
      background: var(--color-primary-hover);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
}

.professional-skeleton-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-6);
}

.professional-toolbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-4);

  &__top {
    display: grid;
    grid-template-columns: 1fr 240px;
    gap: var(--space-4);
    align-items: start;
  }
}

@media (max-width: 768px) {
  .professional-toolbar {
    &__top {
      grid-template-columns: 1fr;
    }
  }
}
</style>