// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  googleFonts: {
    families: {
      Inter: "100..900",
    },
  },
  css: ["animate.css/animate.min.css"],
});