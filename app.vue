<template>
  <div>
    <NuxtLayout :name="layout">
      <div v-if="isLoading">
        <Loading />
      </div>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "#imports";
import { useLangPreference } from "./stores/langPreference";
const { locale } = useI18n();
const langPreference = useLangPreference();
locale.value = langPreference.locale;

import { useDeviceDetection } from "#imports";
useDeviceDetection();
import { useDeviceType } from "#imports";
const deviceType = useDeviceType();
const isMobile = ref(false);
watch(
  () => deviceType.deviceType,
  (newDeviceType) => {
    isMobile.value = newDeviceType === "mobile" || newDeviceType === "tablet";
  }
);

const route = useRoute();
const layout = ref<string>();
watch(
  [() => route.path, isMobile],
  ([currentPath, mobile]) => {
    layout.value =
      currentPath === "/" ||
      currentPath === "/login" ||
      currentPath === "/signup"
        ? "landing-page"
        : mobile
        ? "mobile-student"
        : "desktop-student";
  },
  { immediate: true }
);

const isLoading = ref(true);
onMounted(() => {
  isLoading.value = false;
});
</script>
