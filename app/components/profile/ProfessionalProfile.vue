<template>
  <article class="professional-profile">
    <div class="professional-profile__cover">
      <img
        :src="professional.photo"
        :alt="professional.name"
        decoding="async"
        loading="lazy"
      >
    </div>

    <div class="professional-profile__body">
      <img
        :src="professional.photo"
        :alt="professional.name"
        class="professional-profile__avatar"
        decoding="async"
        loading="lazy"
      >

      <h1 class="professional-profile__name">
        {{ professional.name }}
      </h1>

      <p class="professional-profile__profession">
        {{ professional.profession }}
      </p>

      <div class="professional-profile__stats">
        <div class="professional-profile__stat">
          ⭐ {{ professional.rating }}
        </div>

        <div class="professional-profile__stat">
          📍 {{ professional.distance }} km
        </div>

        <div class="professional-profile__stat">
          💰 {{ formatCurrency(professional.price) }}
        </div>
      </div>

      <section class="professional-profile__section">
        <h3>Sobre</h3>

        <p>
          {{ professional.description }}
        </p>
      </section>

      <section class="professional-profile__section">
        <h3>Informações</h3>

        <ul>
          <li>Atendimento presencial</li>
          <li>Atendimento online</li>
          <li>Resposta rápida</li>
        </ul>
      </section>
    </div>

    <div class="professional-profile__footer">
      <button class="professional-profile__button">
        Contratar profissional
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Professional } from '~/types/professional'
import { formatCurrency } from '~/utils/formatCurrency'

defineProps<{
  professional: Professional
}>()
</script>
<style scoped lang="scss">
.professional-profile {
  max-width: 800px;
  margin: 0 auto;
  background: var(--color-bg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  min-height: 100%;

  &__cover {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  &__cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__body {
    flex: 1;
    background: var(--color-surface);
    position: relative;
    padding: 0 var(--space-8) var(--space-8);
  }

  &__avatar {
    width: 100px;
    height: 100px;
    border-radius: var(--radius-round);
    border: 5px solid var(--color-bg);
    object-fit: cover;
    margin-top: -60px;
    background: var(--color-bg);
  }

  &__name {
    margin-top: var(--space-4);
    font-size: var(--font-2xl);
    font-weight: var(--font-bold);
    color: var(--color-text);
  }

  &__profession {
    margin-top: var(--space-2);
    color: var(--color-text-muted);
    font-size: var(--font-md);
  }

  &__stats {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);

    margin-top: var(--space-6);
  }

  &__stat {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    background: var(--color-soft-bg);
    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius-md);
    font-weight: var(--font-semibold);
    color: var(--color-text-secondary);
  }

  &__section {
    margin-top: var(--space-8);
  }

  &__section h3 {
    margin-bottom: var(--space-4);
    font-size: var(--font-lg);
    color: var(--color-text);
  }

  &__section p {
    line-height: 1.7;
    color: var(--color-text-muted);
  }

  &__section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__section li {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-3);
    color: var(--color-text-muted);
  }

  &__section li::before {
    content: "✓";
    color: var(--color-primary);
    font-weight: var(--font-bold);
  }

  &__footer {
    margin-top: auto;
    padding: var(--space-8);
    border-top: 1px solid var(--color-border);
    background: var(--color-surface);
  }

  &__button {
    width: 100%;
    border: none;
    border-radius: var(--radius-lg);
    padding: var(--space-4);
    background: var(--color-primary);
    color: white;
    font-size: var(--font-md);
    font-weight: var(--font-semibold);
    cursor: pointer;
    transition:
      transform var(--transition-base),
      background var(--transition-base);
  }

  &__button:hover {
    background: var(--color-primary-hover);
    transform: translateY(-2px);
  }

  &__button:active {
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .professional-profile {
    &__cover {
      height: 180px;
    }

    &__body {
      padding: 0 var(--space-6) var(--space-6);
    }

    &__avatar {
      width: 90px;
      height: 90px;
      margin-top: -45px;
    }

    &__name {
      font-size: var(--font-xl);
    }

    &__stats {
      flex-direction: column;
      width: 120px;
    }

    &__stat {
      width: 100%;
    }
  }
}
</style>