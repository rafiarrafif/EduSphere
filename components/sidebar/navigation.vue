<template>
  <div
    class="flex gap-2 items-center py-2 px-3 rounded-lg w-full"
    :class="{
      'bg-primary-100': isActive,
      'bg-transparent': !isActive,
    }"
  >
    <Icon
      :name="{
        iconActive: isActive,
        iconInactive: iconInactive,
      }"
      size="1.6em"
      :class="{
        'text-darkGray-950': isActive,
        'text-darkGray-900': !isActive,
      }"
    />
    <span class="font-semibold text-base text-darkGray-950">Home</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  icons: {
    type: String,
  },
});

const iconActive = computed(() => `solar:${props.icon}-bold`);
const iconInactive = computed(() => `solar:${props.icon}-outline`);
const isActive = computed(() => props.active === true);
</script>
