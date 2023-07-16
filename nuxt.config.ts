// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },
  css: ["~/assets/style/main.css"]
})
