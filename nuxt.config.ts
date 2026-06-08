export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  app: {
    head: {
      title: 'Professional Catalog',
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  },

  css: [
    '@/assets/styles/tokens.scss',
    '@/assets/styles/base.scss',
    '@/assets/styles/main.scss'
  ]
})