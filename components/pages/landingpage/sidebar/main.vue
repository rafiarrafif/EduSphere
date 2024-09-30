<template>
  <div class="flex flex-col justify-between mt-8 mb-16 h-full">
    <div class="flex flex-col gap-1">
      <button
        @click="openCartPage"
        class="flex gap-3 px-3 py-2 rounded-lg hover:bg-darkGray-200"
      >
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
    <div class="flex flex-col">
      <button
        class="py-3 text-sm font-medium w-full bg-primary-950 text-primary-50 rounded-lg"
      >
        {{ $t("signUp") }}
      </button>
      <button
        @click="toLogin"
        class="py-3 text-sm font-medium w-full bg-transparent text-primary-950 rounded-lg"
      >
        {{ $t("logIn") }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLandingPageStore } from "#imports";
const landingPageStore = useLandingPageStore();

const changeLayout = (component: string) => {
  landingPageStore.setSidebarComponent(component);
};
const openCartPage = () => {
  landingPageStore.toggleCartPageState();
};

import { useLoginCompStore } from "#imports";
const loginCompStore = useLoginCompStore();
const toLogin = () => {
  landingPageStore.toggleSidebarState();
  window.history.pushState(null, "", "/login");
  loginCompStore.toggleLoginVisibility(true);
};
</script>
