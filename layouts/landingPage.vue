<template>
  <div>
    <div v-if="landingPageStore.languagePopupState">
      <PagesLandingpageSelectLanguageDesktop />
    </div>
    <div v-if="landingPageStore.cartPopupState">
      <PagesLandingpageEntryStorePopup />
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
import { useLandingPageStore } from "#imports";
import { useDeviceType } from "#imports";
useDeviceDetection();

const isDeviceDetected = ref(false);
const landingPageStore = useLandingPageStore();
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
</script>
