import { defineStore } from "#imports";

interface langPreference {
  locale: string;
}

export const useLangPreference = defineStore("langPreference", {
  state: (): langPreference => ({
    locale: "en",
  }),
  actions: {
    setLocale(locale: string) {
      this.locale = locale;
    },
  },
  persist: true,
});
