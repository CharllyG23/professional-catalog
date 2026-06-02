<template>
	<div class="empty-state">
		<div class="empty-state__icon">🚀</div>
		<h3>Ops! Nada por aqui.</h3>
		<p>Tente ajustar os filtros para encontrar mais profissionais.</p>
	</div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-8) var(--space-4);
  text-align: center;

  &__icon {
    font-size: 4rem;
    margin-bottom: var(--space-4);
  }

  &__title {
    margin: 0;
    font-size: var(--font-xl);
    font-weight: var(--font-bold);
    color: var(--color-text);
  }

  &__description {
    max-width: 400px;
    margin-top: var(--space-3);
    color: var(--color-text-muted);
    line-height: 1.6;
  }
}
</style>>