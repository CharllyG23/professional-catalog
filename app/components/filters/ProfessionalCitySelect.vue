<template>
  <div class="professional-city-select">
    <select
      id="professional-city-select"
      v-model="city"
      class="professional-city-select__options"
      aria-label="Ordenar por cidades"
    >
      <option
        v-for="option in cities"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
const city = defineModel<string>({
  default: 'all'
})

defineProps<{
  cities: {
    value: string
    label: string
  }[]
}>()
</script>
<style scoped lang="scss">
.professional-city-select {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  &__options {
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