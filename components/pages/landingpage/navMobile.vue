<template>
  <div
    class="w-full z-10 fixed flex justify-between items-center py-4 bg-primary-50 h-fit px-6 transition-all shadow-lg"
    :class="{
      'pt-10 px-6 shadow-none': landingPageStore.isOnEdgeTop,
    }"
  >
    <button @click="showSidebar">
      <Icon name="solar:hamburger-menu-linear" size="1.6em" />
    </button>
    <div>
      <img src="/logo/main.svg" class="w-fit h-6" />
    </div>
    <div class="h-full w-6"></div>
    <div class="flex items-center gap-6 absolute h-full w-fit right-8">
      <button class="max-sm:hidden">
        <Icon name="solar:cart-large-2-linear" size="1.6em" />
      </button>
      <button>
        <Icon name="solar:magnifer-linear" size="1.4em" class="mt-1" />
      </button>
    </div>
    <PagesLandingpageSidebarMobile v-if="landingPageStore.sidebarState" />
  </div>
</template>

<script lang="ts" setup>
import { useLandingPageStore } from "#imports";

const landingPageStore = useLandingPageStore();
const showSidebar = () => {
  landingPageStore.toggleSidebarState();
};

const handleScroll = () => {
  if (window.scrollY === 0) {
    landingPageStore.setIsOnEdgeTop(true);
  } else {
    landingPageStore.setIsOnEdgeTop(false);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
