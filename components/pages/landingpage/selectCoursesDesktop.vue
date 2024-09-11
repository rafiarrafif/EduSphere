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
          @click="setRoadmap(roadmap.id)"
          class="font-semibold px-1 py-0.5 h-full text-primary-900 transition-all"
          :class="{
            'gradient-button ': isActiveRoadmap(roadmap.id),
          }"
        >
          {{ roadmap.name }}
        </button>
        <span
          class="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-500 rounded-full transition-all"
          :class="{
            'opacity-0': !isActiveRoadmap(roadmap.id),
          }"
        ></span>
      </div>
    </div>
    <div class="w-full border border-primary-950 rounded-lg py-6 px-8">
      <div class="flex flex-col gap-1">
        <h1 class="text-xl text-black font-bold">
          {{ $t("landingPage.roadmap.title.web-development") }}
        </h1>
        <p class="h-fit text-sm" style="width: 800px">
          {{ $t("landingPage.roadmap.description.web-development") }}
        </p>
      </div>
      <div>
        <nuxt-link to="">
          <button
            class="w-fit mt-4 text-sm border py-2 px-6 rounded-lg border-primary-950 font-semibold transition-all hover:bg-darkGray-200"
          >
            Explore {{ activeRoadmap?.name }}
          </button>
        </nuxt-link>
      </div>
      <div class="-mx-2 relative flex items-center">
        <button
          v-if="showLeftButton"
          @click="scrollLeft"
          class="absolute z-50 w-10 h-10 -left-2 bg-darkGray-950 border border-darkGray-800 shadow-lg rounded-full flex justify-center items-center"
        >
          <Icon
            name="ic:baseline-chevron-left"
            size="1.6em"
            class="text-primary-50 -mt-0.5"
          />
        </button>
        <div
          ref="selectRoadmapScroll"
          class="flex gap-4 mx-2 pb-0.5 mt-8 w-full hide-scrollbar overflow-x-scroll overflow-y-visible"
        >
          <div v-for="(course, index) in courses" :key="index">
            <CardsSelectCoursesLandingpage
              :name="course.title"
              :description="course.description"
              :benefits="course.benefits"
              :image="course.image"
              :mentor="course.mentor"
              :star="course.score"
              :review="course.review"
              :price="course.original_price"
              :discount_price="course.discounted_price"
            />
          </div>
        </div>
        <button
          v-if="showRightButton"
          @click="scrollRight"
          class="absolute z-50 w-10 h-10 -right-2 bg-darkGray-950 border border-darkGray-800 shadow-lg rounded-full flex justify-center items-center"
        >
          <Icon
            name="ic:baseline-chevron-right"
            size="1.6em"
            class="text-primary-50 -mt-0.5"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ApiResponse } from "~/types/api";
import type { Roadmap } from "~/types/roadmap";
import { useLandingPageStore } from "#imports";
import type { Courses } from "~/types/courses";

const LandingPageStore = useLandingPageStore();
const { data: dataRoadmap, error: errorRoadmap } = await useAsyncData<
  ApiResponse<Roadmap[]>
>("dataRoadmfuncap", () =>
  $fetch<ApiResponse<Roadmap[]>>("/api/get-roadmap-landingpage")
);

const { data: dataCourses, error: errorCourses } = await useAsyncData<
  ApiResponse<Courses[]>
>("dataCourses", () =>
  $fetch<ApiResponse<Courses[]>>("/api/get-courses-landingpage")
);

const roadmapSelectionActive = computed(() => LandingPageStore.roadmapActive);
const setRoadmap = (roadmap: number) => {
  LandingPageStore.setSelectCourses(roadmap);
};

const watchCourses = computed(() => dataCourses.value?.data ?? []);
const watchRoadmap = computed(() => dataRoadmap.value?.data ?? []);
const isActiveRoadmap = (roadmap: number) => {
  return roadmap == roadmapSelectionActive.value ? true : false;
};
const roadmaps = watchRoadmap.value;
const courses = computed(() =>
  watchCourses.value.filter(
    (course) => course.categories == roadmapSelectionActive.value
  )
);

const selectRoadmapScroll = ref<HTMLElement | null>(null);
const showLeftButton = ref(false);
const showRightButton = ref(true);

const scrollRight = () => {
  if (selectRoadmapScroll.value) {
    selectRoadmapScroll.value.scrollBy({
      left: 600,
      behavior: "smooth",
    });
  }
};
const scrollLeft = () => {
  if (selectRoadmapScroll.value) {
    selectRoadmapScroll.value.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  }
};
const updateScrollButtons = () => {
  if (selectRoadmapScroll.value) {
    showLeftButton.value = selectRoadmapScroll.value.scrollLeft > 0;
    showRightButton.value =
      selectRoadmapScroll.value.scrollLeft +
        selectRoadmapScroll.value.clientWidth <
      selectRoadmapScroll.value.scrollWidth + -1;
  }
};

onMounted(() => {
  if (selectRoadmapScroll.value) {
    selectRoadmapScroll.value.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
  }
});

const activeRoadmap = computed(() => {
  const findActiveRoadmap = watchRoadmap.value.find(
    (roadmap) => roadmap.id == roadmapSelectionActive.value
  );
  return findActiveRoadmap;
});
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
