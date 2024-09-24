<template>
  <div class="w-full mt-32 custom-bg">
    <div
      id="title"
      class="flex flex-col w-full items-center pt-28 max-sm:pt-16 gap-4"
    >
      <h1 class="text-center text-lightGray-50 text-3xl font-semibold">
        Hear from Our Learners
      </h1>
      <p
        class="text-lightGray-200 text-center w-136 max-lg:w-full max-lg:px-16 max-sm:text-sm max-sm:px-8"
      >
        Discover how our platform has transformed the learning journeys of
        thousands. From career advancements to personal growth, hear firsthand
        experiences from those who have unlocked new opportunities through our
        expert-led courses.
      </p>
    </div>
    <div
      id="card"
      class="flex gap-4 justify-center items-center mt-16 mx-8 pb-32 max-sm:mx-4 max-sm:mt-12 max-sm:pb-0"
    >
      <div class="h-full w-12" v-if="deviceType.deviceType != 'mobile'">
        <button
          v-if="showLeftButton"
          class="flex justify-center items-center rounded-full bg-darkGray-950 bg-opacity-5 backdrop-blur-2xl w-12 h-12 border border-accent-500 border-opacity-10 hover:border-opacity-30"
          @click="scrollLeft"
        >
          <Icon
            name="solar:alt-arrow-left-bold"
            class="text-darkGray-400"
            size="1.6em"
          />
        </button>
      </div>
      <div
        class="flex gap-8 w-158 items-stretch h-fit overflow-x-scroll hide-scrollbar max-sm:gap-4"
        ref="reviewsElement"
      >
        <div
          v-for="(review, index) in reviews"
          :key="index"
          v-show-when-see
          :style="`animation-delay: ${((index % 3) + 1) * 0.1}s`"
        >
          <CardsLandingpageTestimonials
            :name="review.name"
            :job="review.job"
            :office="review.office"
            :rating="review.rating"
            :text="review.text"
            :image="review.image"
          />
        </div>
      </div>
      <div class="h-full w-12" v-if="deviceType.deviceType != 'mobile'">
        <button
          v-if="showRightButton"
          class="flex justify-center items-center rounded-full bg-darkGray-950 bg-opacity-5 backdrop-blur-2xl w-12 h-12 border border-accent-500 border-opacity-10 hover:border-opacity-30"
          @click="scrollRight"
        >
          <Icon
            name="solar:alt-arrow-right-bold"
            class="text-darkGray-400"
            size="1.6em"
          />
        </button>
      </div>
    </div>

    <div
      class="flex w-full justify-center gap-4 pb-12 pt-8"
      v-if="deviceType.deviceType == 'mobile'"
    >
      <div class="h-full w-12">
        <button
          v-if="showLeftButton"
          class="flex justify-center items-center rounded-full bg-darkGray-950 bg-opacity-5 backdrop-blur-2xl w-12 h-12 border border-accent-500 border-opacity-10 hover:border-opacity-30"
          @click="scrollLeft"
        >
          <Icon
            name="solar:alt-arrow-left-bold"
            class="text-darkGray-400"
            size="1.6em"
          />
        </button>
      </div>
      <div class="h-full w-12">
        <button
          v-if="showRightButton"
          class="flex justify-center items-center rounded-full bg-darkGray-950 bg-opacity-5 backdrop-blur-2xl w-12 h-12 border border-accent-500 border-opacity-10 hover:border-opacity-30"
          @click="scrollRight"
        >
          <Icon
            name="solar:alt-arrow-right-bold"
            class="text-darkGray-400"
            size="1.6em"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import reviews from "~/data/testimonials.json";
import { useDeviceType } from "#imports";
const deviceType = useDeviceType();

const scrollInterfall = computed(() => {
  switch (deviceType.deviceType) {
    case "desktop":
      return 832;
    case "laptop":
      return 760;
    case "tablet":
      return 580;
    case "mobile":
      return 390;
  }
});
const reviewsElement = ref<HTMLElement | null>(null);
const showLeftButton = ref(false);
const showRightButton = ref(true);
const scrollRight = () => {
  if (reviewsElement.value) {
    reviewsElement.value.scrollBy({
      left: scrollInterfall.value,
      behavior: "smooth",
    });
  }
};
const scrollLeft = () => {
  if (reviewsElement.value) {
    reviewsElement.value.scrollBy({
      left: -(scrollInterfall.value || 0),
      behavior: "smooth",
    });
  }
};
const updateScrollButtons = () => {
  if (reviewsElement.value) {
    showLeftButton.value = reviewsElement.value.scrollLeft > 0;
    showRightButton.value =
      reviewsElement.value.scrollLeft + reviewsElement.value.clientWidth <
      reviewsElement.value.scrollWidth + 0;
  }
};
onMounted(() => {
  if (reviewsElement.value) {
    reviewsElement.value.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
  }
});
</script>

<style scoped>
.custom-bg {
  background-color: hsla(184, 3%, 10%, 1);
  background-image: radial-gradient(
      at 97% 2%,
      hsla(184, 3%, 10%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 27% 34%, hsla(184, 3%, 10%, 1) 0px, transparent 50%),
    radial-gradient(at 100% 100%, hsla(48, 87%, 50%, 0.46) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(48, 87%, 50%, 0.3) 0px, transparent 50%);
}
</style>
