<template>
  <section class="professionals-header">
    <div class="professionals-header__content">
      <NuxtLink
        to="/"
        class="professionals-header__back"
      >
        <span class="professionals-header__back-icon">←</span>
        Voltar
      </NuxtLink>

      <header class="professionals-header__text">
        <h1 class="professionals-header__title">
          Profissionais para cada necessidade
        </h1>

        <p class="professionals-header__subtitle">
          Descubra talentos perto de você.
        </p>
      </header>
    </div>
  </section>
</template>
<style scoped lang="scss">
.professionals-header {
  width: 100%;
  background: var(--color-surface);
  border-bottom: 1.5px solid var(--color-primary);
  contain: layout style;

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--space-4);
    display: flex;
    align-items: center;
    gap: var(--space-4);
  }

  &__text {
    display: flex;
    flex-direction: column;
  }

  &__back {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: 0.625rem 0.875rem;
    border-radius: var(--radius-sm);
    text-decoration: none;
    color: var(--color-primary);
    font-weight: var(--font-medium);
    background-color: var(--color-surface);
    transition:
      transform var(--transition-base),
      background var(--transition-base);
      
    &:hover {
      background: var(--color-primary);
      color: var(--color-soft-bg);
    }
  }

  &__back-icon {
    font-size: var(--font-lg);
    line-height: 1;
  }

  &__title {
    margin: 0;
    color: var(--color-text);
    font-size: var(--font-xl);
    font-weight: 800;
  }

  &__subtitle {
    margin: 0;
    color: var(--color-text-muted);
    font-size: var(--font-md);
    line-height: 1.5;
  }
}

@media (max-width: 768px) {
  .professionals-header {
    &__content {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-3);
    }

    &__title {
      font-size: var(--font-xl);
    }

    &__subtitle {
      font-size: var(--font-sm);
    }

    &__back {
      padding: var(--space-2) var(--space-3);
    }
  }
}
</style>