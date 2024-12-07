<template>
  <div class="w-full mt-24 px-8 pl-12 max-sm:px-2">
    <div class="flex justify-center -ml-6 h-fit max-xl:flex-col max-sm:ml-0">
      <div
        class="bg-accent-500 w-128 pt-10 pb-8 rounded-3xl -mr-6 z-10 flex flex-col justify-between items-stretch max-2xl:pb-12 max-xl:w-full max-xl:pt-4 max-xl:pb-8"
      >
        <div
          class="ml-10 mr-24 flex flex-col gap-4 max-xl:w-110 max-sm:w-fill-available max-sm:ml-6 max-sm:mr-10"
        >
          <h1 class="text-primary-950 font-semibold text-2xl max-sm:text-xl">
            {{ $t("landingPage.forParent.title") }}
          </h1>
          <p class="font-medium text-darkGray-950 max-sm:text-sm">
            {{ $t("landingPage.forParent.description") }}
          </p>
        </div>
        <div class="flex justify-between pr-8 mt-2 max-xl:mt-8 max-sm:px-4">
          <div class="max-sm:hidden"></div>
          <div class="flex gap-4 max-sm:flex-col-reverse max-sm:w-full">
            <button
              class="font-medium px-4 hidden max-xl:block max-xl:text-sm"
              @click="showLearnMore = !showLearnMore"
            >
              {{ showLearnMore ? t("hideMore") : $t("showMore") }}
            </button>
            <nuxt-link to="">
              <button
                class="bg-darkGray-950 group flex py-3 px-8 gap-4 items-center rounded-xl max-sm:w-full max-sm:justify-center"
              >
                <span class="text-accent-500 group-hover:opacity-90">{{
                  $t("landingPage.forParent.button")
                }}</span>
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
          class="h-fit max-2xl:h-full transition-all animate__animated"
          v-if="device == 'desktop' || showLearnMore"
        >
          <PagesLandingpageForParentDescription />
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "#imports";
const { t } = useI18n();

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
