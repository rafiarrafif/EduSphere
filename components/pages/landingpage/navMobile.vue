<template>
  <div
    class="w-full z-10 fixed flex justify-between items-center py-5 bg-primary-50 h-fit px-8 transition-all shadow-lg"
    :class="{
      'pt-10 px-6 shadow-none': landingPageStore.isOnEdgeTop,
    }"
  >
    <div>
      <Icon name="solar:hamburger-menu-linear" size="1.6em" />
    </div>
    <div>
      <img src="/logo/main.png" alt="" srcset="" />
    </div>
    <div class="h-full w-6"></div>
    <div class="flex items-center gap-6 absolute h-full w-fit right-8">
      <button class="max-sm:hidden">
        <Icon name="solar:cart-large-2-linear" size="1.6em" />
      </button>
      <button>
        <Icon name="solar:magnifer-linear" size="1.5em" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLandingPageStore } from "#imports";

const landingPageStore = useLandingPageStore();

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
