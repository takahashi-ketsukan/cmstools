// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
      // Public keys that are exposed to the client
      public: {
          apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://ucdgovtest.g.kuroco.app/'
      }
  },
})