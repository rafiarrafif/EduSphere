// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/logo/icon_site.png" }],
    },
  },
  plugins: ["~/plugins/directives.ts"],
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "nuxt-svgo-loader",
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  googleFonts: {
    families: {
      Inter: "100..900",
      Barlow: "100..900",
    },
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English" },
      { code: "id", iso: "id-ID", name: "Indonesia" },
      { code: "hi", iso: "hi-IN", name: "Hindi" },
      { code: "ja", iso: "ja-JP", name: "Japanese" },
      { code: "zh", iso: "zh-CN", name: "Chinese" },
      { code: "ko", iso: "ko-KR", name: "Korean" },
      { code: "ar", iso: "ar-SA", name: "Arabic" },
      { code: "ru", iso: "ru-RU", name: "Russian" },
      { code: "uz", iso: "uz-UZ", name: "Uzbek" },
      { code: "es", iso: "es-ES", name: "Spanish" },
      { code: "nl", iso: "nl-NL", name: "Dutch" },
    ],
    defaultLocale: "en",
    strategy: "no_prefix",
    vueI18n: "./locales/nuxt-i18n.ts",
  },
  css: [
    "animate.css/animate.min.css",
    "@/assets/css/scrollbar.css",
    "@/assets/css/hide-scrollbar.css",
  ],
  typescript: {
    strict: true,
  },
});
