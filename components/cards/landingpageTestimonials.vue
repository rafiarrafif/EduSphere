<template>
  <div
    class="w-96 py-6 px-8 h-full pr-10 rounded-xl bg-darkGray-950 bg-opacity-5 backdrop-blur-2xl border border-accent-500 border-opacity-25 hover:border-opacity-50 transition-all cursor-default"
  >
    <div class="flex gap-6">
      <div class="h-16 w-16 rounded-full overflow-hidden">
        <img
          src="/assets/testimonials_1.jpg"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="flex flex-col">
        <h1 class="text-lightGray-100 text-lg font-semibold">
          {{ props.name }}
        </h1>
        <p class="text-lightGray-200 text-sm font-light -mt-0.5">
          <span class="font-medium">{{ props.job }}</span> at
          <span>{{ props.office }}</span>
        </p>
        <div class="flex mt-1.5">
          <Icon name="solar:star-bold" class="text-accent-600" />
          <Icon name="solar:star-bold" class="text-accent-600" />
          <Icon name="solar:star-bold" class="text-accent-600" />
          <Icon name="solar:star-bold" class="text-accent-600" />
          <Icon name="solar:star-outline" class="text-accent-600" />
        </div>
      </div>
    </div>
    <div class="mt-4">
      <p class="text-sm text-darkGray-300">
        {{ props.text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: { type: String, required: true },
  job: { type: String, required: true },
  office: { type: String, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
});
</script>
