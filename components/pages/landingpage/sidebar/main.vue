<template>
  <div class="flex flex-col gap-1">
    <button class="flex gap-3 px-3 py-2 rounded-lg hover:bg-darkGray-200">
      <Icon name="solar:cart-large-2-linear" size="1.5em" />
      <span class="font-medium">Cart</span>
    </button>
    <button
      @click="changeLayout('langComponent')"
      class="flex gap-3 px-3 py-2 rounded-lg hover:bg-darkGray-200"
    >
      <Icon name="solar:earth-linear" size="1.4em" />
      <span class="font-medium">Language</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useLandingPageStore } from "#imports";
const landingPageStore = useLandingPageStore();

const changeLayout = (component: string) => {
  landingPageStore.setSidebarComponent(component);
};
</script>
