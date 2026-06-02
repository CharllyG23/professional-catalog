<template>
  <div class="professional-sort">
    <select v-model="sort" class="professional-sort__select">
      <option 
        v-for="option in sortOptions"
        :key="option.value"
        :value="option.value" 
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { SortOption } from '~/types/sort'

const sort = defineModel<SortOption>({
  default: 'rating_desc'
})

const sortOptions = [
  { value: 'rating_desc', label: 'Melhor avaliados' },
  { value: 'price_asc', label: 'Menor preço' },
  { value: 'price_desc', label: 'Maior preço' },
  { value: 'distance_asc', label: 'Distância' }
] as const
</script>

<style scoped lang="scss">
.professional-sort {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  &__select {
    width: 100%;
    height: 46px;
    padding: 0 var(--space-4);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: var(--font-md);
    background: var(--color-surface);
    cursor: pointer;

    transition:
      border-color var(--transition-base),
      box-shadow var(--transition-base);

    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(26, 122, 110, 0.1);
    }

    &:hover {
      border-color: var(--color-primary);
    }
  }
}
</style>