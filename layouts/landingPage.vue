<template>
  <div>
    <div
      v-if="landingPageStore.cartPageState"
      class="fixed z-[999] top-0 left-0 h-full w-full"
    >
      <PagesLandingpageCartPopupMobile />
    </div>
    <div v-if="popupStore.popupVisible">
      <div v-if="popupStore.popupComponent === 'landingpage.lang'">
        <PagesLandingpageSelectLanguageDesktop />
      </div>
      <div v-if="popupStore.popupComponent === 'landingpage.cart'">
        <PagesLandingpageEntryStorePopup />
      </div>
    </div>
    <div v-if="landingPageStore.searchMobileState">
      <UiSearchMobile />
    </div>
    <div class="w-full h-fit fixed z-[800]">
      <PagesLandingpageNavDesktop v-if="isDesktop" />
      <PagesLandingpageNavMobile v-if="isMobile" />
    </div>
    <div
      :class="{ 'overflow-hidden': landingPageStore.languagePopupState }"
      class="bg-primary-50"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDeviceDetection } from "~/composables/useDeviceDetection";
import { useDeviceType } from "#imports";
useDeviceDetection();

const isDeviceDetected = ref(false);
const deviceType = useDeviceType();
const isDesktop = computed(() => {
  return (
    deviceType.deviceType === "laptop" || deviceType.deviceType === "desktop"
  );
});
const isMobile = computed(() => {
  return (
    deviceType.deviceType === "mobile" || deviceType.deviceType === "tablet"
  );
});

watch(
  () => deviceType.deviceType,
  (newDeviceType) => {
    if (newDeviceType) {
      isDeviceDetected.value = true;
    }
  }
);

import { useLandingPageStore } from "#imports";
const landingPageStore = useLandingPageStore();

import { usePopupStore } from "~/stores/popup";
const popupStore = usePopupStore();
</script>
