<template>
  <nav
    class="bg-primary-50 py-2 w-full flex items-center gap-4 transition-all"
    :class="{
      'drop-shadow-lg': !isOnTop,
      'pt-6 px-8': isOnTop,
    }"
  >
    <div class="mr-2 ml-12">
      <button class="h-fit w-fit" @click="scrollToTop">
        <LogoMain />
      </button>
    </div>
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
        :placeholder="t('landingPage.navbar.desktop.search')"
        class="py-3 focus:outline-none placeholder-darkGray-600 text-sm bg-transparent w-full"
        ref="searchField"
        @focus="switchSearchState"
        @blur="switchSearchState"
      />
    </div>
    <div class="flex items-center gap-2 w-fit mr-8 ml-2">
      <button
        @click.stop="showCartPopup"
        class="safe-areas h-9 w-9 flex justify-center items-center rounded-lg hover:bg-darkGray-200 transition-all cursor-pointer"
        :class="{
          'bg-darkGray-200': popupStore.popupComponent == 'landingpage.cart',
        }"
      >
        <Icon name="solar:cart-large-2-linear" size="1.4em" />
      </button>
      <div class="flex gap-2">
        <button
          @click.stop="toLogin"
          class="text-black bg-transparent text-sm py-3 px-5 rounded-lg font-semibold hover:bg-darkGray-200 transition-all"
        >
          {{ $t("logIn") }}
        </button>
        <button
          class="bg-black text-white text-sm py-3 px-5 font-semibold rounded-lg hover:bg-darkGray-950 transition-all"
        >
          {{ $t("signUp") }}
        </button>
      </div>
      <div
        @click.stop="showLanguagesPopup"
        class="safe-areas w-9 h-9 flex justify-center items-center rounded-lg hover:bg-darkGray-200 transition-all cursor-pointer"
        :class="{
          'bg-darkGray-200': popupStore.popupComponent == 'landingpage.lang',
        }"
      >
        <Icon name="solar:earth-linear" size="1.2em" class="text-black" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useI18n } from "#imports";
const { t } = useI18n();

import { useLandingPageStore } from "~/stores/landingPage";
const landingPageStore = useLandingPageStore();

const isSearchActive = computed(() => landingPageStore.searchIconState);
const isOnTop = computed(() => landingPageStore.isOnEdgeTop);
const searchField = ref<HTMLInputElement | null>(null);

import { usePopupStore } from "~/stores/popup";
const popupStore = usePopupStore();

const showCartPopup = () => {
  setPopupShow("landingpage.cart");
};
const showLanguagesPopup = () => {
  setPopupShow("landingpage.lang");
};
const setPopupShow = (popup: string) => {
  if (popupStore.popupVisible) {
    popupStore.setPopupHide();
  } else {
    popupStore.setPopupShow(popup);
  }
};
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

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

import { useLoginCompStore } from "#imports";
const loginCompStore = useLoginCompStore();
const toLogin = () => {
  popupStore.setPopupHide();
  window.history.pushState(null, "", "/login");
  loginCompStore.toggleLoginVisibility(true);
};
</script>
