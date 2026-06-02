<template>
  <div class="professional-profession">
    <button
      v-for="profession in professions"
      :key="profession.value"
      class="professional-profession__pill"
      :class="{
        'professional-profession__pill--active':
          professionModel === profession.value
      }"
      @click="professionModel = profession.value"
    >
      {{ profession.label }}

      <span
        v-if="profession.value !== 'all'"
        class="professional-profession__count"
      >
        ({{ profession.total }})
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ProfessionItem } from '~/types/professional'

defineProps<{
  professions: ProfessionItem[]
}>()

const professionModel = defineModel<string>({
  default: 'all'
})
</script>

<style scoped lang="scss">
.professional-profession {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
  padding-top: var(--space-6);

  &__pill {
    padding: 0.625rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: 999px;
    background: var(--color-surface);
    cursor: pointer;
    transition: all var(--transition-base);

    &:hover {
      border-color: var(--color-primary);
    }

    &--active {
      background: var(--color-primary);
      color: var(--color-surface);
      border-color: var(--color-primary);
    }
  }

  &__count {
    margin-left: var(--space-1);
    opacity: 0.8;
    font-size: var(--font-xs);
  }
}
</style>