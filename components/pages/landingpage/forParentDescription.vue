<template>
  <div
    class="h-fit w-148 rounded-custom relative overflow-hidden pb-4 max-2xl:w-136 max-xl:w-full max-xl:-mt-8 max-xl:pt-6 max-xl:pb-4"
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
            :title="t('landingPage.forParent.content[' + data.id + '].title')"
            :description="
              t('landingPage.forParent.content[' + data.id + '].description')
            "
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
import { useI18n } from "#imports";
const { t } = useI18n();

const dataDescriptions = [
  {
    id: 0,
    icon: "solar:chart-bold-duotone",
    iconSize: "1.6em",
  },
  {
    id: 1,
    icon: "solar:clipboard-heart-bold-duotone",
    iconSize: "1.8em",
  },
  {
    id: 2,
    icon: "solar:alarm-play-bold-duotone",
    iconSize: "1.8em",
  },
  {
    id: 3,
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
