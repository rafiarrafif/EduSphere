<template>
  <div class="bg-white w-72 pt-4 pb-3 rounded-lg shadow-md relative">
    <div class="flex gap-4 pl-4">
      <div class="w-10 h-10 relative overflow-hidden shadow rounded-md">
        <img :src="prefixedImage" class="w-full h-full object-cover" />
      </div>
      <div class="-mt-1">
        <h2 class="text-black text-xl font-bold">{{ props.value }}</h2>
        <p class="text-sm">{{ props.text }}</p>
      </div>
    </div>
    <hr class="mt-4 mb-4 border-dashed border border-darkGray-300 mx-2" />
    <div class="flex justify-between items-center mx-6">
      <span class="text-sm text-darkGray-950">View details</span>
      <Icon name="solar:arrow-right-linear" class="text-darkGray-900" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  value: {
    required: true,
  },
});

const prefixedImage = computed(() => {
  return `/icon/highlight_${props.type}.png`;
});
</script>
