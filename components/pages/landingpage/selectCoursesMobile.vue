<template>
  <div class="w-fill-available mx-6">
    <div
      v-if="detailCardOpen && hoveredCourseCard"
      class="absolute z-[99] transform -translate-x-1/2"
      :style="{
        top: `${courseCardPosition.top}px`,
        left: `${courseCardPosition.left}px`,
      }"
      @mouseenter="holdPopup"
      @mouseleave="closePopupWithDelay"
    >
      <CardsPopupCourseCard :course="hoveredCourseCard" />
    </div>
    <div class="bg-darkGray-400 w-fill-available h-1px"></div>
    <div
      class="w-full transition-all"
      v-for="(roadmap, index) in watchRoadmap"
      :key="index"
    >
      <div
        class="pt-3 pb-3 pl-1 pr-3 flex items-center justify-between"
        @click="toggleAccordion(roadmap.id)"
      >
        <span class="text-lg font-semibold">{{ roadmap.name }}</span>
        <Icon
          name="material-symbols:keyboard-arrow-down-rounded"
          size="1.4em"
          class="transition-all"
          :class="{
            'rotate-180': activeRoadmap === roadmap.id,
          }"
        />
      </div>
      <div
        v-if="activeRoadmap === roadmap.id"
        class="flex w-fill-available overflow-scroll hide-scrollbar gap-2 mb-4 -mx-2"
      >
        <div
          v-for="(course, index) in Courses(roadmap.id)"
          :key="index"
          class="animate__animated animate__fadeInDown"
          style="animation-duration: 0.3s"
          @mouseenter="showPopup(course, $event)"
          @mouseleave="closePopupWithDelay"
        >
          <CardsSelectCoursesLandingpage
            :id="course.id"
            :image="course.image"
            :mentor="course.mentor"
            :star="course.score"
            :review="course.review"
            :price="course.original_price"
            :discount_price="course.discounted_price"
          />
        </div>
      </div>
      <div class="bg-darkGray-400 w-fill-available h-1px"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLandingPageStore } from "#imports";
const landingPageStore = useLandingPageStore();

import type { ApiResponse } from "~/types/api";
import type { Roadmap } from "~/types/roadmap";
import type { Courses } from "~/types/courses";

const { data: dataRoadmap, error: errorRoadmap } = await useAsyncData<
  ApiResponse<Roadmap[]>
>("dataRoadmap", () =>
  $fetch<ApiResponse<Roadmap[]>>("/api/get-roadmap-landingpage")
);
const { data: dataCourses, error: errorCourses } = await useAsyncData<
  ApiResponse<Courses[]>
>("dataCourses", () =>
  $fetch<ApiResponse<Courses[]>>("/api/get-courses-landingpage")
);
const watchRoadmap = computed(() => dataRoadmap.value?.data ?? []);
const watchCourses = computed(() => dataCourses.value?.data ?? []);
const Roadmap = watchRoadmap.value;
const Courses = (RoadmapID: number) => {
  return watchCourses.value.filter((course) => course.categories == RoadmapID);
};

const activeRoadmap = ref<number | null>(null);
const toggleAccordion = (roadmapID: number) => {
  activeRoadmap.value = activeRoadmap.value === roadmapID ? null : roadmapID;
};

let timeoutCard: ReturnType<typeof setTimeout> | null = null;
const detailCardOpen = ref<boolean>(false);
const hoveredCourseCard = ref<null | object>(null);
const courseCardPosition = ref({ top: 0, left: 0 });
function showPopup(course: { [key: string]: any }, event: MouseEvent) {
  if (timeoutCard) {
    clearTimeout(timeoutCard);
    timeoutCard = null;
  }
  detailCardOpen.value = true;
  hoveredCourseCard.value = course;
  const card = event.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();
  const scrollX = window.innerWidth / 2;
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  courseCardPosition.value = {
    top: rect.bottom + scrollY,
    left: scrollX,
  };
}
function holdPopup() {
  if (timeoutCard) {
    clearTimeout(timeoutCard);
    timeoutCard = null;
  }
}
function closePopupWithDelay() {
  timeoutCard = setTimeout(() => {
    detailCardOpen.value = false;
  }, 100);
}
</script>

<style scoped>
.h-1px {
  height: 1px;
}
</style>
