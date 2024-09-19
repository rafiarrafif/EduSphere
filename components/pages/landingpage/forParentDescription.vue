<template>
  <div
    class="h-full w-148 rounded-custom relative overflow-hidden max-2xl:w-136 max-xl:w-full max-xl:-mt-8 max-xl:pt-6 max-xl:pb-4"
  >
    <div id="items" class="z-10 relative">
      <div
        class="w-full flex flex-wrap gap-12 justify-center py-6 mt-4 max-xl:px-4 max-sm:gap-8"
      >
        <div
          v-for="(data, index) in dataDescriptions"
          :key="index"
          class="animate__animated animate__fadeInUp"
        >
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
    icon: "solar:clipboard-heart-bold-duotone",
    iconSize: "1.8em",
  },
  {
    title: "Study Time Management",
    description:
      "Help your child establish healthy study habits with tools that track their learning time and suggest balanced study schedules",
    icon: "solar:alarm-play-bold-duotone",
    iconSize: "1.8em",
  },
  {
    title: "Active Engagement",
    description:
      "Stay involved in your child's learning journey, providing encouragement and guidance at every step, ensuring they stay motivated and focused",
    icon: "solar:chat-round-like-bold-duotone",
    iconSize: "1.8em",
  },
];
</script>

<style scoped>
.rounded-custom {
  border-radius: 0 24px 24px 0;
}
@media screen and (max-width: 1280px) {
  .rounded-custom {
    border-radius: 0 0 24px 24px;
  }
}
</style>
