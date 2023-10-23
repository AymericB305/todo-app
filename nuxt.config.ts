// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],

  imports: {
    dirs: ['store'],
  },

  css: [
    "~/assets/css/main.css"
  ],
})
