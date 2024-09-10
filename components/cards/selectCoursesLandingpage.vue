<template>
  <div class="relative">
    <div class="h-32 w-60 overflow-hidden rounded">
      <img
        src="~/assets/img/courses/vue.jpg"
        class="h-full w-full object-cover"
        draggable="false"
      />
    </div>
    <div class="w-60 mt-2">
      <div class="flex flex-col gap-1.5">
        <h1 class="font-bold leading-5">
          {{ props.name }}
        </h1>
        <span class="flex text-xs font-light">{{
          formatMentor(props.mentor)
        }}</span>
      </div>
      <div class="flex w-full gap-1 mt-1 items-center">
        <span class="text-sm font-bold">4.6</span>
        <div class="flex items-center -mt-0.5">
          <Icon name="solar:star-bold" class="text-accent-600" size="0.9em" />
          <Icon name="solar:star-bold" class="text-accent-600" size="0.9em" />
          <Icon name="solar:star-bold" class="text-accent-600" size="0.9em" />
          <Icon name="solar:star-bold" class="text-accent-600" size="0.9em" />
          <Icon
            name="solar:star-outline"
            class="text-accent-600"
            size="0.9em"
          />
        </div>
        <span class="text-xs">(19830)</span>
      </div>
      <div class="flex mt-1 gap-2 text-base">
        <h1 class="font-bold">Rp192,000</h1>
        <h1 class="line-through text-darkGray-900">Rp912,000</h1>
      </div>
    </div>
    <!-- <div class="absolute top-[-120px] w-96 bg-black h-3"></div> -->
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  description: string;
  benefits: string[];
  image: string;
  mentor: string;
  star: number;
  review: number;
  price: number;
  discount_price: number;
}>();

function formatMentor(input: string): string {
  return input
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
</script>
