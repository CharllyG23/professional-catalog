<template>
	<section class="professionals-header">
		<button
			class="professionals-header__back"
			@click="router.push('/')"
		>
			<span class="professionals-header__back-icon">
				←
			</span>
			Voltar
		</button>

		<div class="professionals-header__content">
			<h1 class="professionals-header__title">
				Profissionais para cada necessidade
			</h1>
			<p class="professionals-header__subtitle">
				Descubra talentos perto de você.
			</p>
		</div>
	</section>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped lang="scss">
.professionals-header {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-4);
  margin-bottom: var(--space-4);
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  position: relative;
  padding-bottom: 20px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.5px;
    background: var(--color-primary);
  }

  &__back {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: 0.625rem 0.875rem;
    margin-top: 0.25rem;
    border: none;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--color-primary);
    font-size: 0.95rem;
    font-weight: var(--font-semibold);
    cursor: pointer;
    transition: background var(--transition-base);
  }

  &__back:hover {
    background: var(--color-soft-bg);
  }

  &__back-icon {
    color: var(--color-primary);
    font-size: var(--font-md);
    line-height: 1;
  }

  &__content {
    flex: 1;
  }

  &__title {
    margin: 0;
    color: var(--color-text);
    font-size: var(--font-3xl);
    font-weight: 800;
    line-height: 1.1;
  }

  &__subtitle {
    margin: var(--space-2) 0 0;
    color: var(--color-text-muted);
    font-size: var(--font-md);
    line-height: 1.6;
  }
}

@media (max-width: 768px) {
  .professionals-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);

    &__title {
      font-size: var(--font-2xl);
    }

    &__back {
      margin-top: 0;
    }
  }
}
</style>