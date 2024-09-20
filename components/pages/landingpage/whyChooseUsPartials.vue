<template>
  <div class="flex flex-col gap-8">
    <div
      class="flex gap-4 opacity-0"
      v-show-when-see:animate__fadeInRight
      style="animation-delay: 0s"
    >
      <div
        class="aspect-safe flex items-center justify-center rounded-full bg-secondary-500"
      >
        <Icon
          name="gravity-ui:target-dart"
          :size="isMobile ? '1.4em' : '1.8em'"
          class="bg-secondary-50"
        />
      </div>
      <div class="w-fit flex flex-col gap-1 max-sm:-mt-1">
        <h1 class="font-semibold text-xl max-sm:text-lg text-darkGray-950">
          {{ $t("landingPage.whyChooseUs.content[0].title") }}
        </h1>
        <p class="text-darkGray-800 max-sm:text-sm font-medium">
          {{ $t("landingPage.whyChooseUs.content[0].description") }}
        </p>
      </div>
    </div>
    <div
      class="flex gap-4 opacity-0"
      v-show-when-see:animate__fadeInRight
      style="animation-delay: 0.1s"
    >
      <div
        class="aspect-safe flex items-center justify-center rounded-full bg-accent-500"
      >
        <Icon
          name="mdi:google-analytics"
          :size="isMobile ? '1.4em' : '1.8em'"
          class="bg-accent-50"
        />
      </div>
      <div class="w-fit flex flex-col gap-1 max-sm:-mt-1">
        <h1 class="font-semibold text-xl max-sm:text-lg text-darkGray-950">
          {{ $t("landingPage.whyChooseUs.content[1].title") }}
        </h1>
        <p class="text-darkGray-800 max-sm:text-sm font-medium">
          {{ $t("landingPage.whyChooseUs.content[1].description") }}
        </p>
      </div>
    </div>
    <div
      class="flex gap-4 opacity-0"
      v-show-when-see:animate__fadeInRight
      style="animation-delay: 0.2s"
    >
      <div
        class="aspect-safe flex items-center justify-center rounded-full bg-secondary-500"
      >
        <Icon
          name="ph:trophy-fill"
          :size="isMobile ? '1.4em' : '1.8em'"
          class="bg-secondary-50"
        />
      </div>
      <div class="w-fit flex flex-col gap-1 max-sm:-mt-1">
        <h1 class="font-semibold text-xl max-sm:text-lg text-darkGray-950">
          {{ $t("landingPage.whyChooseUs.content[2].title") }}
        </h1>
        <p class="text-darkGray-800 max-sm:text-sm font-medium">
          {{ $t("landingPage.whyChooseUs.content[2].description") }}
        </p>
      </div>
    </div>
    <div
      class="flex gap-4 opacity-0"
      v-show-when-see:animate__fadeInRight
      style="animation-delay: 0.3s"
    >
      <div
        class="aspect-safe flex items-center justify-center rounded-full bg-accent-500"
      >
        <Icon
          name="ph:users-three-fill"
          :size="isMobile ? '1.4em' : '1.8em'"
          class="bg-accent-50"
        />
      </div>
      <div class="w-fit flex flex-col gap-1 max-sm:-mt-1">
        <h1 class="font-semibold text-xl max-sm:text-lg text-darkGray-950">
          {{ $t("landingPage.whyChooseUs.content[3].title") }}
        </h1>
        <p class="text-darkGray-800 max-sm:text-sm font-medium">
          {{ $t("landingPage.whyChooseUs.content[3].description") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDeviceType } from "#imports";
const useDeviceStore = useDeviceType();
const deviceType = computed(() => useDeviceStore.deviceType);
const isMobile = computed(() => deviceType.value == "mobile");
</script>

<style scoped>
.aspect-safe {
  width: 56px;
  height: 51px;
}
@media screen and (max-width: 640px) {
  .aspect-safe {
    width: 45px;
    height: 40px;
  }
}
</style>
