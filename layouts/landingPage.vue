<template>
  <div>
    <div class="w-full h-fit fixed z-50">
      <PagesLandingpageNavDesktop v-if="ifDesktop" />
      <PagesLandingpageNavMobile v-else />
    </div>
    <div style="height: 12232px" class="bg-primary-50">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const ifDesktop = ref();

const updateWindowSize = () => {
  ifDesktop.value = window.innerWidth >= 854;
};

onMounted(() => {
  updateWindowSize();
  window.addEventListener("resize", updateWindowSize);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateWindowSize);
});
</script>
