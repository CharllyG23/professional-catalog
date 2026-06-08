<template>
  <div class="professional-drawer-skeleton">
    <div class="professional-drawer-skeleton__banner" />

    <div class="professional-drawer-skeleton__content">
      <div class="professional-drawer-skeleton__avatar" />

      <div class="professional-drawer-skeleton__title" />
      <div class="professional-drawer-skeleton__profession" />

      <div class="professional-drawer-skeleton__stats">
        <div class="professional-drawer-skeleton__pill" />
        <div class="professional-drawer-skeleton__pill" />
        <div class="professional-drawer-skeleton__pill" />
      </div>

      <div class="professional-drawer-skeleton__section-title" />

      <div class="professional-drawer-skeleton__section-title" />

      <div class="professional-drawer-skeleton__item" />
      <div class="professional-drawer-skeleton__item" />
      <div class="professional-drawer-skeleton__item" />
    </div>
    <div class="professional-drawer-skeleton__footer">
      <div class="professional-drawer-skeleton__button" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.professional-drawer-skeleton {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  &__content {
    flex: 1;
    padding: var(--space-4);
  }

  &__banner,
  &__avatar,
  &__title,
  &__profession,
  &__pill,
  &__section-title,
  &__item,
  &__button {
    background: linear-gradient(
      90deg,
      var(--color-soft-bg) 25%,
      var(--color-border) 50%,
      var(--color-soft-bg) 75%
    );

    background-size: 200% 100%;
    animation: loading 1.4s infinite;
  }

  &__banner {
    height: 200px;
  }

  &__content {
    padding: var(--space-4);
  }

  &__avatar {
    width: 100px;
    height: 100px;
    margin-top: -44px;
    border-radius: 50%;
  }

  &__title {
    width: 220px;
    height: 40px;
    margin-top: var(--space-4);
    border-radius: var(--radius-sm);
  }

  &__profession {
    width: 120px;
    height: 18px;
    margin-top: var(--space-3);
    margin-bottom: var(--space-3);
    border-radius: var(--radius-sm);
  }

  &__stats {
    display: flex;
    gap: var(--space-3);
    margin-top: var(--space-5);
  }

  &__pill {
    width: 110px;
    height: 44px;
    border-radius: var(--radius-md);
  }

  &__section-title {
    width: 120px;
    height: 24px;
    margin-top: var(--space-6);
    border-radius: var(--radius-sm);
  }


  &__item {
    height: 18px;
    width: 70%;
    margin-top: var(--space-3);
    border-radius: var(--radius-sm);
  }

  
  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--space-8);
    border-top: 1px solid var(--color-border);
    background: var(--color-surface);
  }

  &__button {
    width: 100%;
    height: 50px;
    border-radius: var(--radius-md);
  }
}
</style>