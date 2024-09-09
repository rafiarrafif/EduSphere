<template>
  <nav
    class="bg-primary-50 py-2 w-full flex items-center gap-4 transition-all"
    :class="{
      'drop-shadow-lg': !isOnTop,
      'pt-6 px-8': isOnTop,
    }"
  >
    <img src="/logo/main.png" alt="logo-utama" class="ml-8 mr-4" />
    <div
      class="flex items-center bg-primary-50 w-fit border rounded-full flex-grow transition-all"
      :class="{
        'border-darkGray-500': !isSearchActive,
        'border-primary-950': isSearchActive,
      }"
    >
      <Icon
        name="solar:minimalistic-magnifer-linear"
        class="py-2 pl-6 pr-6"
        :class="{
          'text-darkGray-900': !isSearchActive,
          'text-black': isSearchActive,
        }"
      />
      <input
        type="text"
        placeholder="What do you want to learn today?"
        class="py-3 focus:outline-none placeholder-darkGray-600 text-sm bg-transparent w-full"
        ref="searchField"
        @focus="switchSearchState"
        @blur="switchSearchState"
      />
    </div>
    <div class="flex items-center gap-2 w-fit mr-8 ml-2">
      <div
        class="h-9 w-9 flex justify-center items-center rounded-lg hover:bg-darkGray-200 transition-all cursor-pointer"
      >
        <Icon name="solar:cart-large-2-linear" size="1.4em" />
      </div>
      <div class="flex gap-2">
        <nuxt-link to="">
          <button
            class="text-black bg-transparent text-sm py-3 px-5 rounded-lg font-semibold hover:bg-darkGray-200 transition-all"
          >
            Log In
          </button>
        </nuxt-link>
        <nuxt-link to="">
          <button
            class="bg-black text-white text-sm py-3 px-5 font-semibold rounded-lg hover:bg-darkGray-950 transition-all"
          >
            Sign Up
          </button>
        </nuxt-link>
      </div>
      <div
        class="w-9 h-9 flex justify-center items-center rounded-lg hover:bg-darkGray-200 transition-all cursor-pointer"
      >
        <Icon name="solar:earth-linear" size="1.2em" class="text-black" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useLandingPageStore } from "~/stores/landingPage";

const landingPageStore = useLandingPageStore();
const isSearchActive = computed(() => landingPageStore.searchIconState);
const isOnTop = computed(() => landingPageStore.isOnEdgeTop);
const searchField = ref<HTMLInputElement | null>(null);
const switchSearchState = () => {
  landingPageStore.toggleSearchIcon();
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
  if (searchField.value) {
    landingPageStore.setFocusSearch(searchField.value);
  }
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
