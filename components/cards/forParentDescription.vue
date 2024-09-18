<template>
  <div class="flex gap-6">
    <div
      class="flex bg-secondary-500 h-12 w-12 justify-center items-center rounded-lg"
    >
      <Icon :name="props.icon" :size="iconSize" class="bg-secondary-50" />
    </div>
    <div class="flex gap-1 flex-col w-72">
      <h1 class="font-semibold text-secondary-50 text-lg">{{ props.title }}</h1>
      <span class="text-darkGray-200">{{ props.description }}</span>
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
