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
      <p class="text-xs font-light">Amanda Lee</p>
      <h1 class="font-bold text-darkGray-950 -mt-0.5 text-sm">
        Rp{{ formatPrice(props.item.price) }}
      </h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CartItems } from "~/types/cartIems";
const props = defineProps<{ item: CartItems }>();

function formatPrice(input: number): string {
  return input.toLocaleString("en-US");
}
</script>
