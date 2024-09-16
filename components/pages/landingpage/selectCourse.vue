<template>
  <div class="w-full flex justify-center">
    <div
      class="pt-14 w-custom-selectRoadmap max-sm:pt-8 max-sm:pl-0 max-sm:pr-0 max-md:px-8 max-lg:pl-16 max-lg:pr-12 max-2xl:px-12"
    >
      <div class="w-fit overflow-hidden max-sm:pr-6 max-sm:pl-5">
        <h1
          class="font-semibold text-3xl w-fit max-md:text-2xl max-sm:text-xl"
          v-show-when-see:animate__fadeInLeft
        >
          {{ $t("landingPage.roadmap.title") }}
        </h1>
        <p
          class="text-lg mt-2 max-md:text-base max-sm:text-sm"
          v-show-when-see:animate__fadeInLeft
          style="animation-delay: 0.2s"
        >
          {{ $t("landingPage.roadmap.description") }}
        </p>
      </div>
      <div class="mt-6">
        <div v-if="isLoaded">
          <component :is="component" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDeviceType } from "#imports";
import DesktopComponent from "~/components/pages/landingpage/selectCoursesDesktop.vue";
import MobileComponent from "~/components/pages/landingpage/selectCoursesMobile.vue";

const component = ref();
const isLoaded = ref<boolean | null>(false);
const deviceStore = useDeviceType();

watch(
  () => deviceStore.deviceType,
  (device) => {
    if (device !== "mobile" && device !== "tablet") {
      component.value = DesktopComponent;
    } else {
      component.value = MobileComponent;
    }
  },
  { immediate: true }
);

onMounted(() => {
  isLoaded.value = true;
});
</script>

<style scoped>
.w-custom-selectRoadmap {
  width: 85rem;
}

@media screen and (max-width: 1340px) {
  .w-custom-selectRoadmap {
    width: 100%;
  }
}
</style>
