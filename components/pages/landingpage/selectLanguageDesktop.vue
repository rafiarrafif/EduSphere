<template>
  <div
    class="fixed z-[900] right-8 top-16 transition-all"
    :class="{
      'right-20 top-20': landingPageStore.isOnEdgeTop,
    }"
  >
    <div
      class="child-safearea-lang w-48 h-fit px-2 py-2 bg-darkGray-50 rounded-lg shadow-md flex flex-col"
      v-click-outside="closelangingPageStore"
    >
      <button
        @click="changeLang('en')"
        class="w-full text-sm py-1.5 pl-3 rounded text-left hover:bg-darkGray-200"
      >
        English
      </button>
      <button
        @click="changeLang('id')"
        class="w-full text-sm py-1.5 pl-3 rounded text-left hover:bg-darkGray-200"
      >
        Indonesia
      </button>
      <button
        @click="changeLang('ja')"
        class="w-full text-sm py-1.5 pl-3 rounded text-left hover:bg-darkGray-200"
      >
        Japanese
      </button>
      <button
        @click="changeLang('zh')"
        class="w-full text-sm py-1.5 pl-3 rounded text-left hover:bg-darkGray-200"
      >
        Chinese
      </button>
      <button
        @click="changeLang('ko')"
        class="w-full text-sm py-1.5 pl-3 rounded text-left hover:bg-darkGray-200"
      >
        Korean
      </button>
      <button
        @click="changeLang('ru')"
        class="w-full text-sm py-1.5 pl-3 rounded text-left hover:bg-darkGray-200"
      >
        Russian
      </button>
      <button
        @click="changeLang('es')"
        class="w-full text-sm py-1.5 pl-3 rounded text-left hover:bg-darkGray-200"
      >
        Spanish
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "#imports";
import { useLandingPageStore } from "#imports";
import { useLangPreference } from "~/stores/langPreference";
const landingPageStore = useLandingPageStore();
const langPreference = useLangPreference();
const { locale } = useI18n();

const changeLang = (lang: string) => {
  locale.value = lang;
  langPreference.setLocale(lang);
};

import { usePopupStore } from "~/stores/popup";
const popupStore = usePopupStore();
const closelangingPageStore = () => {
  popupStore.setPopupHide();
};
</script>
