<template>
  <div class="w-full flex justify-center">
    <div
      style="width: 85rem"
      class="pt-14 max-lg:pl-16 max-lg:pr-12 max-md:px-8 max-2xl:px-12"
    >
      <div class="w-fit overflow-hidden">
        <h1
          class="font-semibold text-3xl w-fit max-md:text-2xl"
          v-show-when-see:animate__fadeInLeft
        >
          Find the Right Path for Your Learning Journey
        </h1>
        <p
          class="text-lg mt-2 max-md:text-base"
          v-show-when-see:animate__fadeInLeft
          style="animation-delay: 0.2s"
        >
          Discover courses that ignite your passion and propel your career.
        </p>
      </div>
      <div class="mt-6">
        <PagesLandingpageSelectCoursesDesktop
          v-if="deviceStore.deviceType !== 'mobile'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDeviceType } from "#imports";

const deviceStore = useDeviceType();
</script>
