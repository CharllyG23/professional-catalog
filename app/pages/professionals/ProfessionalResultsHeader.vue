<template>
  <div class="professionals-results-header">
    <p class="professionals-results-header__title">
      Exibindo
      <strong>{{ visibleCount }}</strong>
      de
      <strong>{{ totalCount }}</strong>
      profissionais
    </p>

    <button
      v-if="hasActiveFilters"
      class="professionals-results-header__clear"
      @click="$emit('clear')"
    >
      Limpar filtros
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  visibleCount: number
  totalCount: number
  hasActiveFilters: boolean
}>()

defineEmits<{
  clear: []
}>()
</script>

<style scoped lang="scss">
.professionals-results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);

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

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>