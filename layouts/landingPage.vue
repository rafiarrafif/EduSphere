<template>
  <div>
    <div class="w-full h-fit fixed z-50">
      <PagesLandingpageNavDesktop v-if="isDesktop" />
      <PagesLandingpageNavMobile v-else />
    </div>
    <div style="height: 12232px" class="bg-primary-50">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDeviceDetection } from "~/composables/useDeviceDetection";
import { useDeviceType } from "#imports";
useDeviceDetection();
const deviceType = useDeviceType();
const isDesktop = computed(() => {
  return (
    deviceType.deviceType === "laptop" || deviceType.deviceType === "desktop"
  );
});
</script>
