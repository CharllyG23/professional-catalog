<template>
  <div class="professional-search">
    <div class="professional-search__box">
      <svg
        class="professional-search__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>

      <input
        id="search"
        aria-label="Buscar profissionais"
        class="professional-search__input"
        type="text"
        placeholder="Busca por nome ou profissão"
        v-model="search"
      />
      <button
        v-if="search"
        class="professional-search__clear"
        @click="search = ''"
      >
        ✕
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
  const search = defineModel<string>({
    default: ''
  })
</script>

<style scoped lang="scss">
.professional-search {
  width: 100%;

  &__box {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__icon {
    position: absolute;
    left: var(--space-4);
    width: 18px;
    height: 18px;
    color: var(--color-text-muted);
    pointer-events: none;
  }

  &__input {
    width: 100%;
    height: 46px;
    padding-left: calc(var(--space-4) + 18px + var(--space-3));
    padding-right: var(--space-8);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: var(--font-md);
    transition:
      border-color var(--transition-base),
      box-shadow var(--transition-base);
    background: var(--color-surface);

    &:hover {
      border-color: var(--color-primary);
    }

    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(26, 122, 110, 0.1);
    }
  }

  &__clear {
    position: absolute;
    right: var(--space-4);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: none;
    border-radius: var(--radius-round);
    background: transparent;
    cursor: pointer;
    color: var(--color-text-muted);
    transition: background var(--transition-base);

    &:hover {
      background: var(--color-soft-bg);
    }
  }
}
</style>