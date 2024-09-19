<template>
  <div class="flex gap-6 max-2xl:flex-col max-2xl:items-center max-2xl:gap-4">
    <div
      class="flex bg-secondary-500 h-12 w-12 justify-center items-center rounded-lg mt-2"
    >
      <Icon :name="props.icon" :size="iconSize" class="bg-secondary-50" />
    </div>
    <div class="flex gap-1 flex-col w-72 max-sm:w-80">
      <h1 class="font-semibold text-secondary-50 text-lg max-2xl:text-center">
        {{ props.title }}
      </h1>
      <span
        class="text-darkGray-200 max-2xl:text-xs max-2xl:text-center max-sm:text-base transition-all"
        >{{ props.description }}</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  icon: {
    type: String,
    default: "hugeicons:album-not-found-01",
  },
  iconSize: {
    type: String,
    default: "1.6em",
  },
});
</script>
