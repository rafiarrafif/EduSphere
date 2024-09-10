<template>
  <div class="flex flex-col gap-2">
    <div
      class="w-full hide-scrollbar overflow-x-auto overflow-y-hidden flex gap-6 pb-1"
    >
      <div
        class="relative pb-0.5 min-w-fit"
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
    <div class="w-full border border-primary-950 rounded-lg py-6 px-8">
      <div class="flex flex-col gap-1">
        <h1 class="text-xl text-black font-bold">
          Build Websites With Web Development
        </h1>
        <p class="h-fit text-sm" style="width: 800px">
          Master the essential skills to create dynamic and responsive websites
          from scratch. From HTML and CSS to advanced JavaScript frameworks, our
          courses equip you with the tools to become a full-stack developer and
          bring your ideas to life.
        </p>
      </div>
      <div>
        <nuxt-link to="">
          <button
            class="w-fit mt-4 text-sm border py-2 px-6 rounded-lg border-primary-950 font-semibold transition-all hover:bg-darkGray-200"
          >
            Explore Web Design
          </button>
        </nuxt-link>
      </div>
      <div class="flex gap-4 mt-8">
        <CardsSelectCoursesLandingpage />
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
