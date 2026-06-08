<template>
  <div class="professional-card-skeleton">
    <div class="professional-card-skeleton__image" />

    <div class="professional-card-skeleton__content">
      <div class="professional-card-skeleton__title" />
      <div class="professional-card-skeleton__profession" />
      <div class="professional-card-skeleton__description" />
      <div class="professional-card-skeleton__description short" />
      <div class="professional-card-skeleton__footer" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.professional-card-skeleton {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-bg);

  &__image {
    width: 100%;
    min-height: 180px;
    aspect-ratio: 16 / 9;
  }

  &__content {
    padding: var(--space-3);
  }

  &__image,
  &__title,
  &__profession,
  &__description,
  &__footer {
    background: linear-gradient(
      90deg,
      var(--color-soft-bg) 25%,
      var(--color-border) 50%,
      var(--color-soft-bg) 75%
    );

    background-size: 200% 100%;
    animation: loading 1.4s infinite;
  }

  &__title {
    height: 20px;
    width: 70%;
    border-radius: var(--radius-sm);
  }

  &__profession {
    height: 16px;
    width: 40%;
    margin-top: var(--space-3);
    border-radius: var(--radius-sm);
  }

  &__description {
    height: 12px;
    margin-top: var(--space-3);
    border-radius: var(--radius-sm);

    &.short {
      width: 60%;
    }
  }

  &__footer {
    height: 40px;
    margin-top: var(--space-4);
    border-radius: var(--radius-sm);
  }
}

@keyframes loading {
  from {
    background-position: 200% 0;
  }

  to {
    background-position: -200% 0;
  }
}
</style>