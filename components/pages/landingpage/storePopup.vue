<template>
  <div>
    <div class="overflow-y-auto pr-3 max-h-96">
      <div v-for="(item, index) in cartData" :key="index">
        <PagesLandingpageStoreContent :item />
      </div>
    </div>
    <div class="mt-3 pr-3">
      <div class="font-bold text-lg">Rp{{ cartPrice }}</div>
      <div class="mt-2 flex gap-2">
        <button
          class="w-full bg-accent-500 hover:bg-accent-400 text-primary-950 font-medium py-3 rounded-lg"
        >
          {{ $t("landingpage.cart.checkout") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartShoppingStore } from "~/stores/cartShopping";
const cartShoppingStore = useCartShoppingStore();
const cartPrice = computed(() => formatPrice(cartShoppingStore.getTotalPrice));
const cartData = computed(() => cartShoppingStore.cartItems);

function formatPrice(input: number): string {
  return input.toLocaleString("en-US");
}
</script>
