<template>
  <div class="mt-8">
    <button
      @click="changeLayout('mainComponent')"
      class="flex items-center gap-1 rounded-lg -mt-4 py-2 hover:bg-darkGray-200"
    >
      <Icon name="solar:alt-arrow-left-linear" size="1.2em" />
      <span class="text-sm">{{ $t("back") }}</span>
    </button>
    <div class="flex flex-col gap-1 mt-2">
      <button
        @click="changeLang('en')"
        class="flex gap-3 px-4 py-2 rounded-lg hover:bg-darkGray-200"
      >
        <span class="font-medium">English</span>
      </button>
      <button
        @click="changeLang('id')"
        class="flex gap-3 px-4 py-2 rounded-lg hover:bg-darkGray-200"
      >
        <span class="font-medium">Indonesia</span>
      </button>
      <button
        @click="changeLang('ja')"
        class="flex gap-3 px-4 py-2 rounded-lg hover:bg-darkGray-200"
      >
        <span class="font-medium">Japanese</span>
      </button>
      <button
        @click="changeLang('zh')"
        class="flex gap-3 px-4 py-2 rounded-lg hover:bg-darkGray-200"
      >
        <span class="font-medium">Chinese</span>
      </button>
      <button
        @click="changeLang('ko')"
        class="flex gap-3 px-4 py-2 rounded-lg hover:bg-darkGray-200"
      >
        <span class="font-medium">Korean</span>
      </button>
      <button
        @click="changeLang('ru')"
        class="flex gap-3 px-4 py-2 rounded-lg hover:bg-darkGray-200"
      >
        <span class="font-medium">Russian</span>
      </button>
      <button
        @click="changeLang('es')"
        class="flex gap-3 px-4 py-2 rounded-lg hover:bg-darkGray-200"
      >
        <span class="font-medium">Spanish</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "#imports";
const { locale } = useI18n();
import { useLangPreference } from "#imports";
const langPreference = useLangPreference();
import { useLandingPageStore } from "#imports";
const landingPageStore = useLandingPageStore();

const changeLayout = (component: string) => {
  landingPageStore.setSidebarComponent(component);
};
const changeLang = (lang: string) => {
  locale.value = lang;
  langPreference.setLocale(lang);
};
</script>
