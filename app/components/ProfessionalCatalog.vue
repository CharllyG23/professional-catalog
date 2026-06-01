<template>
  <section class="professional-catalog">
    <div class="professional-catalog__header">
      <div class="professional-catalog__view-toggle">
        <button
          class="professional-catalog__view-button"
          :class="{ 'professional-catalog__view-button--active': isListViewActive }"
          @click="viewMode = 'list'"
        >
          ☰
        </button>

        <button
          class="professional-catalog__view-button"
          :class="{ 'professional-catalog__view-button--active': isGridViewActive }"
          @click="viewMode = 'grid'"
        >
          ⊞
        </button>
      </div>
    </div>

    <div
      class="professional-catalog__content"
      :class="`professional-catalog__content--${viewMode}`"
    >
    <ProfessionalCard
      v-for="professional in professionals"
      :key="professional.id"
      :professional="professional"
      :view-mode="viewMode"
      @select="emit('select', $event)"
    />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Professional } from '~/types/professional'

defineProps<{
  professionals: Professional[]
}>()

const emit = defineEmits<{
  select: [id: number]
}>()

const viewMode = ref<'grid' | 'list'>('grid')

const isListViewActive = computed(() => {
  return viewMode.value === 'list'
})

const isGridViewActive = computed(() => {
  return viewMode.value === 'grid'
})
</script>

<style scoped lang="scss">
.professional-catalog {
  max-width: 1200px;
  margin: 0 auto;

  &__header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: var(--space-8);
  }

  &__view-toggle {
    margin-left: auto;
    display: flex;
    gap: var(--space-2);
  }

  &__view-button {
    width: 40px;
    height: 40px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background: var(--color-bg);
    cursor: pointer;
    transition: background var(--transition-base), color var(--transition-base);

    &--active {
      background: var(--color-primary);
      color: white;
    }
  }

  &__content {
    &--grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: var(--space-6);
    }

    &--list {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }
  }
}

@media (max-width: 768px) {
  .professional-catalog {
    &__header {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-4);
    }

    &__content--grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>