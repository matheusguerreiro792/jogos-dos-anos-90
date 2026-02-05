// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
  ],

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Outfit', provider: 'google' },
      { name: 'Anton', provider: 'google' },
      { name: 'Press Start 2P', provider: 'google' },
    ]
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
    },
  },
})
