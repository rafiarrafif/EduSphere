<template>
  <div
    class="flex flex-col items-center gap-1 px-8 py-5 rounded-2xl shadow w-full bg-white hover:bg-primary-50 transition-all cursor-pointer max-md:px-4 max-md:py-3 max-md:hover:bg-white"
    @click="$emit('toggle')"
  >
    <div class="flex justify-between w-full items-center">
      <h1 class="text-darkGray-950 font-medium">
        {{ props.question }}
      </h1>
      <div class="w-12 h-full flex justify-end items-center">
        <Icon
          name="ph:caret-down-bold"
          class="transition-all"
          :class="{
            'rotate-180': isOpen,
          }"
          size="1em"
        />
      </div>
    </div>
    <div>
      <p
        class="text-sm text-darkGray-800 mr-16 animate__animated animate__fadeIn max-sm:mr-2"
        style="animation-duration: 0.2s"
        v-if="isOpen"
      >
        {{ props.answer }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  isOpen: { type: Boolean, required: true },
});
</script>
