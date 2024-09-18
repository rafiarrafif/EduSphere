<template>
  <div
    class="h-full w-148 rounded-tr-3xl rounded-br-3xl relative overflow-hidden"
  >
    <div id="items" class="z-10 relative">
      <div class="flex gap-8 justify-center py-6">
        <div v-for="(data, index) in dataDescriptions" :key="index">
          <CardsForParentDescription
            :title="data.title"
            :description="data.description"
            :icon="data.icon"
            :iconSize="data.iconSize"
          />
        </div>
      </div>
    </div>
    <div id="bg" class="absolute top-0 left-0 h-full w-full bg-black">
      <img
        src="/assets/for-parent_bg.png"
        class="w-full h-full object-cover opacity-40"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const dataDescriptions = [
  {
    title: "Detailed Progress Reports",
    description:
      "Gain insights into your child's academic performance, including completed modules, test scores, and time spent on learning",
    icon: "solar:chart-bold-duotone",
    iconSize: "1.6em",
  },
  {
    title: "Personalized Feedback",
    description:
      "Identify areas where your child excels and where they may need extra support, with targeted recommendations for improvement",
    icon: "solar:pen-new-square-bold-duotone",
    iconSize: "1.6em",
  },
];
</script>
