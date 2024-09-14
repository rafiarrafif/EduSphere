<template>
  <div class="bg-secondary-500 pt-8 pb-16 px-12">
    <h1
      class="w-full text-center font-medium text-secondary-950 max-sm:text-xs"
    >
      {{ $t("landingPage.sponsors.title") }}
    </h1>
    <div
      class="flex w-full mt-10 justify-evenly items-center max-sm:justify-center max-sm:gap-6"
    >
      <img
        v-for="(sponsor, index) in sponsors"
        :key="index"
        :class="[sponsor.styles]"
        :src="sponsor.img"
        draggable="false"
        class="w-auto transition-all"
        v-show-when-see
        :style="`animation-delay: ${index * 0.2}s;`"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const sponsors = [
  {
    name: "Microsoft",
    img: "/icon/sponsors_microsoft.png",
    styles: "h-10 max-xl:hidden",
  },
  {
    name: "Cisco",
    img: "/icon/sponsors_cisco.png",
    styles: "h-14 max-lg:hidden",
  },
  {
    name: "AWS",
    img: "/icon/sponsors_aws.png",
    styles: "h-12 max-md:hidden",
  },
  {
    name: "Meta",
    img: "/icon/sponsors_meta.png",
    styles: "h-7 max-md:h-5 max-sm:h-4",
  },
  {
    name: "Open AI",
    img: "/icon/sponsors_openai.png",
    styles: "h-10 max-md:h-7 max-sm:h-6",
  },
  {
    name: "MCLaren",
    img: "/icon/sponsors_mclaren.png",
    styles: "h-7 -mt-2 max-md:h-5 max-sm:h-4",
  },
];
</script>
