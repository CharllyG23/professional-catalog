<template>
  <section class="professional-catalog-skeleton">
    <ProfessionalCardSkeleton
      v-for="index in 12"
      :key="index"
    />
  </section>
</template>

<style scoped lang="scss">
.professional-catalog-skeleton {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-4);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
}
</style>