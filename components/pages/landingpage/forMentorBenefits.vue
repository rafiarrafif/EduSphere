<template>
  <div class="flex items-center gap-2">
    <div class="w-2 h-2 bg-accent-500 rounded-full"></div>
    <span class="font-medium text-darkGray-950 max-sm:text-xs">{{
      props.text
    }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
  },
});
</script>
