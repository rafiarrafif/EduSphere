<template>
  <div>
    <div id="text-hero" class="w-full pt-60 max-sm:pt-48">
      <h1
        class="text-center text-darkGray-950 font-extrabold text-7xl max-sm:text-4xl max-md:text-6xl"
        v-show-when-see
      >
        {{ $t("landingPage.hero.title.dontJust") }}
        <span class="text-secondary-500 shadow-secondary">{{
          $t("landingPage.hero.title.learn")
        }}</span
        >—
      </h1>
      <h1
        class="text-center text-darkGray-950 font-extrabold text-7xl max-sm:text-4xl max-md:text-6xl mt-2"
        v-show-when-see
        style="animation-delay: 0.1s"
      >
        <span class="text-secondary-500 shadow-secondary">{{
          $t("landingPage.hero.title.master")
        }}</span>
        {{ $t("landingPage.hero.title.it") }}
      </h1>
      <div
        class="flex flex-col text-center mt-6 font-medium text-darkGray-900 text-lg max-sm:text-sm"
      >
        <p class="" v-show-when-see style="animation-delay: 0.2s">
          {{ $t("landingPage.hero.description.first") }}
        </p>
        <p class="" v-show-when-see style="animation-delay: 0.25s">
          {{ $t("landingPage.hero.description.second") }}
        </p>
      </div>
      <div class="flex justify-center gap-6 mt-10">
        <nuxt-link to="" v-show-when-see:animate__fadeInLeft>
          <button
            class="bg-secondary-400 hover:bg-secondary-500 py-3 pl-8 pr-6 max-sm:pl-9 max-sm:pr-7 flex items-center gap-2 rounded-lg transition-all"
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
        <nuxt-link to="" v-show-when-see:animate__fadeInRight>
          <button
            class="py-3 pl-8 pr-6 flex items-center gap-2 rounded-lg hover:bg-darkGray-200 transition-all"
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
    <div id="bg-connector" class="w-full h-52 mt-48 max-sm:-mt-4"></div>
  </div>
</template>

<style scoped>
#bg-connector {
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
