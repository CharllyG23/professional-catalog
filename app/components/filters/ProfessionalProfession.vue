<template>
  <section class="professional-profession">
    <button
      class="professional-profession__arrow"
      @click="scroll('left')"
      aria-label="Anterior"
    >
      ←
    </button>

    <nav
      ref="scrollContainer"
      class="professional-profession__content"
      aria-label="Categorias profissionais"
    >
      <button
        v-for="profession in professions"
        :key="profession.value"
        class="professional-profession__pill"
        :class="{
          'professional-profession__pill--active':
            professionModel === profession.value
        }"
        @click="selectProfession(profession.value)"
      >
        <span>{{ profession.label }}</span>

        <span
          v-if="profession.value !== 'all'"
          class="professional-profession__count"
        >
          {{ profession.total }}
        </span>
      </button>
    </nav>

    <button
      class="professional-profession__arrow"
      @click="scroll('right')"
      aria-label="Próximo"
    >
      →
    </button>
  </section>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ProfessionItem } from '~/types/professional'

defineProps<{
  professions: ProfessionItem[]
}>()

const professionModel = defineModel<string>({
  default: 'all'
})

const scrollContainer = ref<HTMLElement | null>(null)

const scroll = (direction: 'left' | 'right') => {
  scrollContainer.value?.scrollBy({
    left: direction === 'left' ? -250 : 250,
    behavior: 'smooth'
  })
}

const selectProfession = (value: string) => {
  professionModel.value = value
}

watch(professionModel, (value) => {
  if (value === 'all') {
    scrollContainer.value?.scrollTo({
      left: 0,
      behavior: 'smooth'
    })
  }
})
</script>
<style scoped lang="scss">
.professional-profession {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  padding-top: var(--space-4);

  &__content {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    flex: 1;
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__pill {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    min-height: 40px;
    padding: var(--space-2) var(--space-4);
    border: 1px solid var(--color-border);
    border-radius: 999px;
    background: var(--color-surface);
    color: var(--color-text);
    font-size: var(--font-sm);
    cursor: pointer;
    transition:
      border-color var(--transition-base),
      background-color var(--transition-base),
      color var(--transition-base);

    &:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }

    &--active {
      background: var(--color-primary);
      border-color: var(--color-primary);
      color: var(--color-surface);

      &:hover {
        color: var(--color-surface);
      }
    }
  }
  
  &__count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.5rem;
    height: 1.5rem;
    padding: 0 var(--space-2);
    border-radius: var(--radius-xl);
    background: var(--color-badge-bg);
    font-size: var(--font-xs);
  }

  &__pill--active &__count {
    background: var(--color-badge-active-bg);
  }

  &__arrow {
    width: 2.25rem;
    height: 2.25rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-round);
    background: var(--color-surface);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition:
      border-color var(--transition-base),
      color var(--transition-base),
      background-color var(--transition-base);

    &:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
      background: var(--color-bg);
    }
  }
}

@media (max-width: 768px) {
  .professional-profession {
    &__arrow {
      display: none;
    }
  }
}
</style>