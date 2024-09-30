<template>
  <div
    class="bg-white safe-areas h-screen w-full overflow-hidden flex justify-center"
  >
    <div class="h-screen w-full max-w-128">
      <div class="flex justify-between items-center mt-5 px-3">
        <button
          @click="landingPageStore.toggleCartPageState()"
          class="flex items-center"
        >
          <Icon name="ph:caret-left-bold" class="text-blue-500" size="1.2em" />
          <span class="font-sm text-blue-500">{{ $t("back") }}</span>
        </button>
        <div>
          <span class="text-xl font-medium">Your Cart</span>
        </div>
        <div class="w-16"></div>
      </div>
      <div
        class="mt-6 pl-4 pr-2 flex flex-col h-full"
        v-if="cartData.length > 0"
      >
        <div class="overflow-y-auto flex-1 pr-2">
          <div v-for="(item, index) in cartData" :key="index">
            <PagesLandingpageStoreContent :item />
          </div>
        </div>
        <div class="mt-3 pr-2 h-48">
          <div class="font-bold text-lg">Rp{{ cartPrice }}</div>
          <div class="mt-2 flex gap-2">
            <button
              class="w-full bg-accent-500 hover:bg-accent-400 text-primary-950 font-medium py-3 rounded-lg"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <div
        v-else
        class="flex flex-col items-center justify-center -mt-24 h-full gap-2"
      >
        <Icon
          name="solar:cart-large-4-bold-duotone"
          size="2.4em"
          class="text-darkGray-600"
        />
        <p class="text-gray-600 text-center text-sm">No items in the cart</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLandingPageStore } from "#imports";
const landingPageStore = useLandingPageStore();

import { useCartShoppingStore } from "~/stores/cartShopping";
const cartShoppingStore = useCartShoppingStore();
const cartPrice = computed(() => formatPrice(cartShoppingStore.getTotalPrice));
const cartData = computed(() => cartShoppingStore.cartItems);

function formatPrice(input: number): string {
  return input.toLocaleString("en-US");
}

import { useDeviceType } from "#imports";
const deviceType = computed(() => useDeviceType().deviceType);
watch(deviceType, (newDeviceType) => {
  if (newDeviceType === "laptop" || newDeviceType === "desktop") {
    landingPageStore.toggleCartPageState();
  }
});
</script>
