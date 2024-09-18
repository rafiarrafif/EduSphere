<template>
  <div class="w-full mt-24 px-8 pl-12">
    <div
      class="flex justify-center -ml-6 h-96 max-2xl:h-100 items-stretch max-xl:flex-col max-xl:h-fit"
    >
      <div
        class="bg-accent-500 h-full w-128 pt-10 pb-8 rounded-3xl -mr-6 z-10 flex flex-col justify-between max-2xl:pb-12 max-xl:w-full max-xl:pt-4 max-xl:pb-8"
      >
        <div class="ml-10 mr-24 mt-4 flex flex-col gap-4 max-xl:w-110">
          <h1 class="text-primary-950 font-semibold text-2xl">
            Looking for the Best for Your Child?
          </h1>
          <p class="font-medium text-darkGray-950">
            As a parent, you want to ensure your child receives the best
            education possible. With detailed progress reports—including grades,
            study time, and areas for improvement—you can actively support and
            guide them along the way. Together, ensure they stay on the right
            path to achieve the success they aspire to.
          </p>
        </div>
        <div class="flex justify-between pr-8 mt-2 max-2xl:mt-14 max-xl:mt-8">
          <div></div>
          <div class="flex gap-4">
            <button
              class="font-medium px-4 hidden max-xl:block"
              @click="showLearnMore = !showLearnMore"
            >
              {{ showLearnMore ? "Hide" : "Show" }} More
            </button>
            <nuxt-link to="">
              <button
                class="bg-darkGray-950 group flex py-3 px-8 gap-4 items-center rounded-xl"
              >
                <span class="text-accent-500 group-hover:opacity-90"
                  >Sign as a Parent</span
                >
                <div
                  class="rounded-full flex h-fit w-fit bg-accent-500 p-2 group-hover:opacity-90"
                >
                  <Icon name="ph:arrow-right-bold" size="1.2em" />
                </div>
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>

      <transition name="fade-slide">
        <div
          class="h-full transition-all animate__animated"
          v-if="device == 'desktop' || showLearnMore"
        >
          <PagesLandingpageForParentDescription />
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDeviceType } from "#imports";
const deviceType = useDeviceType();
const device = computed(() => deviceType.deviceType);

const showLearnMore = ref(false);
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
