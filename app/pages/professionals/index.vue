<template>
  <section>
    <ProfessionalHeader />
    <div class="professional-toolbar">
      <div class="professional-toolbar__top">
        <ProfessionalSearch v-model="search" />
        <ProfessionalSort v-model="sort" />
      </div>

      <ProfessionalProfession v-model="profession" :professions="professionCounts"/>
    </div>

    <section class="professionals-results">
      <div class="professionals-results__header">
        <h4 class="professionals-results__title">
          Exibindo
          <strong>{{ visibleProfessionals.length }}</strong>
          de
          <strong>{{ filteredProfessionals.length }}</strong>
          profissionais
        </h4>

        <button
          v-if="hasActiveFilters"
          class="professionals-results__clear"
          @click="clearFilters"
        >
          Limpar filtros
        </button>
      </div>

      <ProfessionalCatalogSkeleton v-if="loading" />
      <ProfessionalCatalog 
				v-else 
				:professionals="visibleProfessionals" 
				@select="openProfessional"
				/>

      <div v-if="!loading && isLoadingMore" class="professional-skeleton-grid">
        <ProfessionalCardSkeleton v-for="item in 6" :key="item" />
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

    <ProfessionalEmptyState v-if="showEmptyState" />
		<ProfessionalDrawer v-if="selectedProfessionalId" :professional-id="selectedProfessionalId"/>
  </section>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useProfessionals } from '~/composables/useProfessionals'

useSeoMeta({
  title: 'Professional Catalog',
  description: 'Encontre profissionais qualificados através de filtros, busca e ordenação.',
  ogTitle: 'Professional Catalog',
  ogDescription: 'Catálogo online de profissionais.',
  ogType: 'website'
})

const loading = ref(true)
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
  hasActiveFilters,
  clearFilters
} = useProfessionals()

const loadMoreLabel = computed(() =>
  isLoadingMore.value
    ? 'Carregando...'
    : 'Carregar mais profissionais'
)

const showEmptyState = computed(() =>
  !loading.value &&
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

onMounted(async () => {
  loading.value = true
  await new Promise(resolve => requestAnimationFrame(resolve))
  loading.value = false
})
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