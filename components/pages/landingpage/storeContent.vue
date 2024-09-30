<template>
  <div class="flex gap-4 w-full border-b border-b-darkGray-300 py-3">
    <div class="w-16 h-16 overflow-hidden rounded mt-1">
      <img
        :src="`/img/courses/${props.item.image}`"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="flex-1 flex flex-col gap-1">
      <h1 class="line-clamp-2 text-sm font-bold text-darkGray-950">
        {{ $t("data.courses.title." + props.item.id) }}
      </h1>
      <p class="text-xs font-light">{{ formatMentor(props.item.mentor) }}</p>
      <h1 class="font-bold text-darkGray-950 -mt-0.5 text-sm">
        Rp{{ formatPrice(props.item.price) }}
      </h1>
    </div>
    <div>
      <button class="w-8 h-8" @click="deleteItem(props.item.id)">
        <Icon name="solar:trash-bin-2-bold" size="1.2em" class="text-red-500" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartShoppingStore } from "#imports";
const cartShoppingStore = useCartShoppingStore();

import type { CartItems } from "~/types/cartIems";
const props = defineProps<{ item: CartItems }>();

function formatMentor(input: string): string {
  return input
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
function formatPrice(input: number): string {
  return input.toLocaleString("en-US");
}

function deleteItem(id: number): void {
  cartShoppingStore.removeFromCart(id);
}
</script>
