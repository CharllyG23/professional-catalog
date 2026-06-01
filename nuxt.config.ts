// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/tokens.scss',
    '@/assets/styles/base.scss',
    '@/assets/styles/main.scss'
  ]
})
