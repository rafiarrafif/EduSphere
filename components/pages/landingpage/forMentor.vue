<template>
  <div class="w-full mt-32 flex justify-center max-lg:mt-20 transition-all">
    <div
      class="w-192 flex justify-center gap-72 max-2xl:w-full max-2xl:justify-between max-2xl:gap-8 max-2xl:mx-24 max-xl:mx-16 max-lg:flex-col max-lg:gap-16 max-sm:gap-10 max-sm:mx-4"
    >
      <div class="flex flex-col gap-6 mt-2">
        <div class="flex flex-col gap-2">
          <div
            class="font-semibold text-3xl flex flex-col gap-1 max-sm:text-2xl"
          >
            <h1 v-show-when-see>{{ $t("landingPage.forMentor.title[0]") }}</h1>
            <h1 v-show-when-see style="animation-delay: 0.1s">
              {{ $t("landingPage.forMentor.title[1]") }}
              <span class="text-gradient font-bold">{{
                $t("landingPage.forMentor.title[2]")
              }}</span>
            </h1>
          </div>
          <div
            class="w-128 font-medium text-darkGray-900 max-xl:w-110 max-lg:w-fill-available max-sm:text-sm"
            v-show-when-see
            style="animation-delay: 0.1s"
          >
            <p>
              {{ $t("landingPage.forMentor.description") }}
            </p>
          </div>
        </div>
        <div>
          <div class="font-semibold text-2xl max-sm:text-xl">
            <h1 v-show-when-see style="animation-delay: 0.1s">
              {{ $t("landingPage.forMentor.rewards.title") }}
            </h1>
          </div>
          <div
            class="mt-2 flex flex-col flex-wrap h-32 gap-1 max-xl:w-110 max-sm:w-full max-sm:h-20"
          >
            <div
              v-for="(benefit, index) in benefits"
              :key="index"
              v-show-when-see
              :style="`animation-delay: ${index * 0.1}s`"
            >
              <PagesLandingpageForMentorBenefits :text="benefit" />
            </div>
          </div>
          <nuxt-link to="">
            <div
              class="w-fit h-fit bg-black mt-2 rounded-xl overflow-hidden drop-shadow max-sm:w-full max-sm:mt-4"
              v-show-when-see
              style="animation-delay: 0.2s"
            >
              <button
                class="bg-accent-500 text-black font-semibold px-12 py-4 hover:bg-opacity-95 max-sm:w-full transition-all"
              >
                {{ $t("landingPage.forMentor.rewards.button") }}
              </button>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="flex max-lg:justify-center">
        <img
          draggable="false"
          src="/assets/for-mentor-mascot.png"
          class="h-auto w-96 max-sm:w-72"
          v-show-when-see:animate__fadeInRight
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "#imports";
const { t } = useI18n();

const benefits = computed(() => [
  t("landingPage.forMentor.rewards[0]"),
  t("landingPage.forMentor.rewards[1]"),
  t("landingPage.forMentor.rewards[2]"),
  t("landingPage.forMentor.rewards[3]"),
  t("landingPage.forMentor.rewards[4]"),
  t("landingPage.forMentor.rewards[5]"),
  t("landingPage.forMentor.rewards[6]"),
  t("landingPage.forMentor.rewards[7]"),
]);
</script>

<style scoped>
.text-gradient {
  background: #1abc9c;
  background: linear-gradient(to bottom right, #1abc9c 30%, #f1c40f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-gradient-custom {
  background: #1abc9c;
  background: linear-gradient(to bottom right, #1abc9c 30%, #f1c40f 100%);
}
</style>
