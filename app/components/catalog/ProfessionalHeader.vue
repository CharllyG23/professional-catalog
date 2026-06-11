<template>
  <section class="professionals-header">
    <div class="professionals-header__content">
      <button
        class="professionals-header__back"
        @click="router.push('/')"
      >
        <span class="professionals-header__back-icon">←</span>
        Voltar
      </button>

      <div>
        <h2 class="professionals-header__title">
          Profissionais para cada necessidade
        </h2>

        <p class="professionals-header__subtitle">
          Descubra talentos perto de você.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped lang="scss">
.professionals-header {
  width: 100%;
  background: white;
  border-bottom: 1.5px solid var(--color-primary);

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--space-4);
    display: flex;
    align-items: flex-start;
    gap: var(--space-4);
  }

  &__back {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: 0.625rem 0.875rem;
    border: none;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--color-primary);
    cursor: pointer;

    &:hover {
      background: var(--color-soft-bg);
    }
  }

  &__title {
    margin: 0;
    color: var(--color-text);
    font-size: var(--font-2xl);
    font-weight: 800;
  }

  &__subtitle {
    margin: 0;
    color: var(--color-text-muted);
  }
} 

@media (max-width: 768px) {
  .professionals-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);

    &__title {
      font-size: var(--font-xl);
    }

    &__subtitle {
      font-size: var(--font-sm);
    }

    &__back {
      margin-top: 0;
    }
  }
}
</style>