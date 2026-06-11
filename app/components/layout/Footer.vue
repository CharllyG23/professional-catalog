<template>
  <footer class="footer">
    <div class="footer__content">
      <p class="footer__copyright">
        © {{ currentYear }} Charlly Garcia. Todos os direitos reservados.
      </p>
      <nav
        class="footer__social"
        aria-label="Redes sociais"
      >
        <a
          href="https://github.com/CharllyG23"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Charlly Garcia"
        >
          <GithubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/charlly-garcia-0b16931a5/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Charlly Garcia"
        >
          <LinkedinIcon />
        </a>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import GithubIcon from '~/components/icons/GithubIcon.vue'
import LinkedinIcon from '~/components/icons/LinkedinIcon.vue'

const currentYear = new Date().getFullYear()
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  border-top: 1px solid var(--color-border);
  background: var(--color-surface);

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--space-6) var(--space-4);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__copyright {
    margin: 0;
    font-size: var(--font-sm);
    color: var(--color-text-muted);
  }

  .footer__social {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    a {
      color: var(--color-primary);

      &:hover {
        color: var(--color-primary-hover);
      }
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
      display: block;
    }
  }
}

@media (max-width: 640px) {
  .footer__content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}
</style>