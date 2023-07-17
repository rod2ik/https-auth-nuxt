// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // ssr: false,
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    provider: { type: 'authjs' }
  },
  devServer: {
    https: {
      key: './myserver+3-key.pem',
      cert: './myserver+3.pem',
    }
  }
})
