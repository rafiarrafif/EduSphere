<template>
  <div
    class="block fixed border border-darkGray-400 shadow-md z-[9999] h-fit w-96 bg-white rounded-lg pt-2 pl-6 pr-3 pb-4 transition-all"
    :class="{
      'top-16 right-44': !isOnTop,
      'top-20 right-52': isOnTop,
    }"
    v-click-outside="closeCartPopup"
  >
    <div class="triangle"></div>

    <div v-if="cartItems.length > 0">
      <PagesLandingpageStorePopup />
    </div>
    <div v-else class="flex flex-col items-center mt-3 mb-1 gap-2">
      <Icon
        name="solar:cart-large-4-bold-duotone"
        size="2.4em"
        class="text-darkGray-600"
      />
      <p class="text-gray-600 text-center text-sm">No items in the cart</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLandingPageStore } from "#imports";
const landingPageStore = useLandingPageStore();
const isOnTop = computed(() => landingPageStore.isOnEdgeTop);

import { useCartShoppingStore } from "~/stores/cartShopping";
const cartShoppingStore = useCartShoppingStore();
const cartItems = computed(() => cartShoppingStore.cartItems);

import { usePopupStore } from "~/stores/popup";
const popupStore = usePopupStore();
const closeCartPopup = () => {
  popupStore.setPopupHide();
};
</script>

<style scoped>
.triangle {
  position: absolute;
  top: -11px;
  right: 96px;
  width: 0;
  height: 0;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-bottom: 11px solid #aeb8b8;
}

.triangle::after {
  content: "";
  position: absolute;
  top: 2px;
  left: -10px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}
</style>
