<template>
  <div class="relative group overflow-visible">
    <div class="relative">
      <div class="h-32 w-60 overflow-hidden rounded">
        <img
          :src="`/img/courses/${props.image}`"
          class="h-full w-full object-cover"
          draggable="false"
        />
      </div>
      <div class="w-60 mt-2">
        <div class="flex flex-col gap-1.5">
          <h1 class="font-bold leading-5">
            {{ $t("data.courses.title." + props.id) }}
          </h1>
          <span class="flex text-xs font-light">{{
            formatMentor(props.mentor)
          }}</span>
        </div>
        <div class="flex w-full gap-1 mt-1 items-center">
          <span class="text-sm font-bold">{{ props.star }}</span>
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
          <span class="text-xs">({{ props.review }})</span>
        </div>
        <div class="flex mt-1 gap-2 text-base" v-if="props.discount_price">
          <h1 class="font-bold">Rp{{ formatPrice(props.discount_price) }}</h1>
          <h1 class="line-through text-darkGray-900">
            Rp{{ formatPrice(props.price) }}
          </h1>
        </div>
        <div class="flex mt-1 gap-2 text-base" v-else>
          <h1 class="font-bold">Rp{{ formatPrice(props.price) }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  id: number;
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

function formatPrice(input: number): string {
  return input.toLocaleString("en-US");
}
</script>
