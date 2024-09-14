<template>
  <div class="w-full flex justify-center">
    <div
      style="width: 85rem"
      class="pt-14 max-sm:pt-8 max-sm:pl-6 max-lg:pl-16 max-lg:pr-12 max-md:px-8 max-2xl:px-12"
    >
      <div class="w-fit overflow-hidden">
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
          <PagesLandingpageSelectCoursesDesktop
            v-if="
              deviceStore.deviceType !== 'mobile' &&
              deviceStore.deviceType !== 'tablet'
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDeviceType } from "#imports";

const isLoaded = ref<boolean | null>(false);
const deviceStore = useDeviceType();

onMounted(() => (isLoaded.value = true));
</script>
