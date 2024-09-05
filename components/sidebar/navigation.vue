<template>
  <div
    class="flex gap-3 items-center h-10 px-3 rounded-lg w-full hover:bg-primary-100"
    :class="{
      'bg-primary-50': isActive,
      'bg-transparent': !isActive,
    }"
  >
    <div class="h-full w-6 flex justify-center items-center">
      <Icon
        :name="iconSuffix"
        :size="sizeSuffix"
        :class="{
          'text-darkGray-950': isActive,
          'text-darkGray-900': !isActive,
        }"
      />
    </div>
    <span
      class="text-base"
      :class="{
        'text-darkGray-950 font-semibold': isActive,
        'text-darkGray-900 font-medium': !isActive,
      }"
      ><slot
    /></span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
});

const isActive = computed(() => props.active === true);
const iconSuffix = computed(() => {
  const suffix = isActive.value ? "bold" : "linear";
  return `solar:${props.icon}-${suffix}`;
});
const sizeSuffix = computed(() => (isActive.value ? "1.6em" : "1.4em"));
</script>
