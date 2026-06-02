<template>
  <section
    class="professional-card"
    :class="cardClasses"
    @mouseenter="prefetchDrawer"
  >
    <img
      :src="professional.photo"
      :alt="professional.name"
      class="professional-card__image"
      loading="lazy"
      decoding="async"
    >

    <div class="professional-card__content">
      <div class="professional-card__header">
        <div>
          <h3 class="professional-card__name">
            {{ professional.name }}
          </h3>

          <span class="professional-card__profession">
            {{ professional.profession }}
          </span>
        </div>

        <div class="professional-card__rating">
          ⭐ {{ professional.rating }}
        </div>
      </div>

      <p class="professional-card__description">
        {{ professional.description }}
      </p>

      <div class="professional-card__meta">
        <span>📍 {{ professional.city }}</span>
        <span>{{ professional.distance }} km</span>
      </div>

      <div class="professional-card__footer">
        <p class="professional-card__price">
          {{ formatCurrency(professional.price) }}
        </p>

        <button 
          class="professional-card__button"
          @click="emit('select', professional.id)"
        >
          Ver perfil
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Professional } from '~/types/professional'
import { formatCurrency } from '~/utils/formatCurrency'

const props = defineProps<{
  professional: Professional
  viewMode: 'grid' | 'list'
}>()

const emit = defineEmits<{
  select: [id: number]
}>()

let preloadedDrawer = false

const cardClasses = computed(() => ({
  'professional-card--list': props.viewMode === 'list',
  'professional-card--grid': props.viewMode === 'grid'
}))

const prefetchDrawer = () => {
  if (preloadedDrawer) return

  preloadedDrawer = true
  import('~/components/profile/ProfessionalDrawer.vue')
}
</script>

<style scoped lang="scss">
.professional-card {
  overflow: hidden;  
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }

  &--grid {
    display: flex;
    flex-direction: column;
  }

  &--list {
    display: grid;
    grid-template-columns: 180px 1fr;
  }

  &__image {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  &--list &__image {
    height: 100%;
    min-height: 180px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: var(--space-4);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    gap: var(--space-4);
  }

  &__name {
    margin: 0;
    font-size: var(--font-lg);
    font-weight: var(--font-bold);
    color: var(--color-text);
  }

  &__profession {
    color: var(--color-primary);
    font-size: var(--font-sm);
    font-weight: var(--font-semibold);
  }

  &__rating {
    font-weight: var(--font-semibold);
    white-space: nowrap;
  }

  &__description {
    margin-top: var(--space-3);
    color: var(--color-text-muted);
    font-size: var(--font-sm);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__meta {
    display: flex;
    gap: var(--space-4);
    margin-top: var(--space-3);
    font-size: var(--font-xs);
    color: var(--color-text-muted);
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: var(--space-4);
  }

  &__price {
    font-size: var(--font-xl);
    font-weight: var(--font-bold);
    color: var(--color-text);
  }

  &__button {
    border: none;
    border-radius: var(--radius-md);
    padding: var(--space-3) var(--space-4);
    background: var(--color-primary);
    color: white;
    cursor: pointer;
    transition: background var(--transition-base);

    &:hover {
      background: var(--color-primary-hover);
    }
  }
}

@media (max-width: 768px) {
  .professional-card {
    &--list {
      grid-template-columns: 1fr;
    }

    &--list &__image {
      height: 220px;
    }
  }
}
</style>