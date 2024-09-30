<template>
  <div class="w-full flex justify-center">
    <div
      class="flex justify-between pt-60 max-xl:pt-48 max-md:pt-36 w-210 pr-14 pl-20 max-lg:px-12 max-md:px-6 max-xl:flex-col"
    >
      <div id="text-hero" class="">
        <h1
          class="text-left text-darkGray-950 font-extrabold text-7xl max-xl:text-center max-sm:text-4xl max-md:text-6xl"
          v-show-when-see
        >
          {{ $t("landingPage.hero.title.dontJust") }}
          <span class="text-secondary-500 shadow-secondary">{{
            $t("landingPage.hero.title.learn")
          }}</span>
        </h1>
        <h1
          class="text-left text-darkGray-950 font-extrabold text-7xl max-xl:text-center max-sm:text-4xl max-md:text-6xl mt-2"
          v-show-when-see
          style="animation-delay: 0.1s"
        >
          <span class="text-secondary-500 shadow-secondary">{{
            $t("landingPage.hero.title.master")
          }}</span>
          {{ $t("landingPage.hero.title.it") }}
        </h1>
        <div
          class="flex flex-col text-left mt-6 font-medium text-darkGray-900 max-xl:text-center max-sm:text-sm"
        >
          <p class="" v-show-when-see style="animation-delay: 0.2s">
            {{ $t("landingPage.hero.description.first") }}
          </p>
          <p class="" v-show-when-see style="animation-delay: 0.25s">
            {{ $t("landingPage.hero.description.second") }}
          </p>
        </div>
        <div
          class="flex justify-start gap-6 mt-10 max-xl:justify-center max-sm:flex-col max-sm:gap-2"
        >
          <nuxt-link
            to=""
            v-show-when-see:animate__fadeInLeft
            class="max-sm:px-16"
          >
            <button
              @click="toSignup"
              class="bg-secondary-400 hover:bg-secondary-500 py-4 pl-12 pr-10 max-sm:pl-12 max-sm:pr-10 max-sm:w-full max-sm:justify-center flex items-center gap-2 rounded-lg transition-all"
            >
              <span class="text-sm text-black font-medium">{{
                $t("signUp")
              }}</span>
              <Icon
                name="solar:arrow-right-outline"
                size="1.4em"
                class="text-black"
              />
            </button>
          </nuxt-link>
          <nuxt-link
            to=""
            v-show-when-see:animate__fadeInRight
            class="max-sm:px-16"
          >
            <button
              class="py-4 pl-8 pr-6 flex items-center gap-2 rounded-lg hover:bg-darkGray-200 max-sm:w-full max-sm:justify-center transition-all"
            >
              <span class="text-sm text-black font-medium">{{
                $t("tryDemo")
              }}</span>
              <Icon
                name="solar:play-circle-outline"
                size="1.4em"
                class="text-black"
              />
            </button>
          </nuxt-link>
        </div>
      </div>
      <div
        class="max-xl:w-full max-xl:flex max-xl:justify-center max-xl:mt-16 relative"
      >
        <img
          src="/assets/hero.png"
          class="h-auto w-136 -mt-40 max-2xl:w-128 max-2xl:-mt-28 max-xl:mt-0"
          draggable="false"
        />
      </div>
    </div>
    <!-- <div id="bg-connector" class="w-full h-52 mt-48 max-sm:-mt-4"></div> -->
  </div>
</template>

<script lang="ts" setup>
import { usePopupStore } from "~/stores/popup";
const popupStore = usePopupStore();
import { useSignupCompStore } from "#imports";
const signupCompStore = useSignupCompStore();
const toSignup = () => {
  popupStore.setPopupHide();
  window.history.pushState(null, "", "/signup");
  signupCompStore.toggleSignupVisibility(true);
};
</script>

<style scoped>
#bg-connectorad {
  background: rgb(245, 247, 250);
  background: -moz-linear-gradient(
    180deg,
    rgba(245, 247, 250, 1) 0%,
    rgba(26, 188, 156, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(245, 247, 250, 1) 0%,
    rgba(26, 188, 156, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(245, 247, 250, 1) 0%,
    rgba(26, 188, 156, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f5f7fa",endColorstr="#1abc9c",GradientType=1);
}
.shadow-secondary {
  text-shadow: 0 2px 4px rgba(26, 188, 156, 0.2);
}
</style>
