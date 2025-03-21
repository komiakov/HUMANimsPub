// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/colors.scss" as *;'
        }
      }
    }
  },

  css: ['~/assets/styles/reset.scss', '~/assets/fonts.scss'],

  modules: ['@nuxt/ui', '@pinia/nuxt'],

})
