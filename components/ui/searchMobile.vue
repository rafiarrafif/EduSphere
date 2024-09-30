<template>
  <div
    class="fixed z-[9999] flex justify-center bg-black bg-opacity-40 h-screen w-screen backdrop-blur-sm animate__animated animate__fadeIn"
    ref="popup"
  >
    <div
      v-click-outside="closePopup"
      class="bg-primary-50 w-full max-w-110 mx-6 h-fit mt-16 pl-6 pr-4 rounded-full flex items-center"
    >
      <input
        type="text"
        :placeholder="t('landingPage.navbar.desktop.search')"
        class="py-3 focus:outline-none placeholder-darkGray-600 text-sm bg-transparent w-full pr-2"
        autofocus
      />
      <button class="flex justify-center items-center">
        <Icon
          name="solar:close-circle-linear"
          size="1.6em"
          class="text-darkGray-700"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "#imports";
const { t } = useI18n();

const popup = ref<HTMLElement | null>(null);

import { useLandingPageStore } from "#imports";
const landingPageStore = useLandingPageStore();
const closePopup = () => {
  popup.value?.classList.add("animate__fadeOut");
  setTimeout(() => {
    landingPageStore.toggleSearchMobileState();
  }, 600);
};
</script>
