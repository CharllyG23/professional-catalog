<template>
  <button
    v-if="show"
    class="professional-load-more-button"
    :disabled="loading"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
  loading: boolean
  label: string
}>()

defineEmits<{
  click: []
}>()
</script>

<style scoped lang="scss">
.professional-load-more-button {
  display: block;
  margin: var(--space-6) auto;
  padding: var(--space-4) var(--space-4);
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
</style>