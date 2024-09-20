<template>
  <div
    class="flex max-lg:flex-col max-lg:gap-12 justify-center gap-28 mt-20 py-16 max-xl:px-6 bg-primary-100"
  >
    <div
      v-show-when-see:animate__fadeInLeft
      class="opacity-0 max-xl:w-96 max-lg:w-full max-lg:flex max-lg:justify-center"
    >
      <img
        src="/assets/jumbotron_1.png"
        class="h-fit w-110 max-xl:w-96 transition-all"
        draggable="false"
      />
    </div>
    <div
      class="h-fit w-128 max-xl:grow max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center"
    >
      <div v-show-when-see class="opacity-0" style="animation-delay: 0.1s">
        <h1 class="w-fit text-4xl font-semibold text-darkGray-950">
          {{ $t("landingPage.whyChooseUs.title[0]") }}
          <span class="text-gradient font-bold">{{
            $t("landingPage.whyChooseUs.title[1]")
          }}</span
          >?
        </h1>
      </div>
      <div class="mt-10">
        <PagesLandingpageWhyChooseUsPartials />
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-gradient {
  background: #1abc9c;
  background: linear-gradient(to bottom right, #1abc9c 30%, #f1c40f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
