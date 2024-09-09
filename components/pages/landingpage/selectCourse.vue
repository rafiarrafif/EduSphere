<template>
  <div class="w-full pt-14 px-32">
    <div class="w-fit overflow-hidden">
      <h1
        class="font-semibold text-3xl w-fit"
        v-show-when-see:animate__fadeInLeft
      >
        Find the Right Path for Your Learning Journey
      </h1>
      <p
        class="text-lg mt-2"
        v-show-when-see:animate__fadeInLeft
        style="animation-delay: 0.2s"
      >
        Discover courses that ignite your passion and propel your career.
      </p>
    </div>
    <div class="mt-6">
      <div class="flex gap-6">
        <div
          class="relative pb-0.5"
          v-for="(roadmap, index) in roadmaps"
          :key="index"
          v-show-when-see
          :style="`animation-delay: ${index * 0.15}s`"
        >
          <button
            @click="setRoadmap(roadmap.slug)"
            class="font-semibold px-1 py-0.5 h-full text-primary-900 transition-all"
            :class="{
              'gradient-button ': isActiveRoadmap(roadmap.slug),
            }"
          >
            {{ roadmap.name }}
          </button>
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-500 rounded-full transition-all"
            :class="{
              'opacity-0': !isActiveRoadmap(roadmap.slug),
            }"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ApiResponse } from "~/types/api";
import type { Course } from "~/types/course";
import { useLandingPageStore } from "#imports";
import Index from "~/pages/index.vue";

const LandingPageStore = useLandingPageStore();
const { data, error } = await useFetch<ApiResponse<Course[]>>(
  "/api/get-roadmap-landingpage"
);

const roadmapSelectionActive = computed(() => LandingPageStore.selectCourses);
const setRoadmap = (roadmap: any) => {
  LandingPageStore.setSelectCourses(roadmap);
};

const courses = computed(() => data.value?.data ?? []);
const isActiveRoadmap = (roadmap: any) => {
  return roadmap == roadmapSelectionActive.value ? true : false;
};
const roadmaps = courses.value;

console.log(courses.value);
</script>

<style scoped>
.gradient-button {
  color: black !important;
  background: rgb(26, 188, 156);
  background: -moz-linear-gradient(
    0deg,
    rgba(26, 188, 156, 0.15099807012648814) 0%,
    rgba(26, 188, 156, 0) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(26, 188, 156, 0.15099807012648814) 0%,
    rgba(26, 188, 156, 0) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(26, 188, 156, 0.15099807012648814) 0%,
    rgba(26, 188, 156, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1abc9c",endColorstr="#1abc9c",GradientType=1);
}
</style>
