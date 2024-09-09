<template>
  <div>
    <div id="text-hero" class="w-full pt-60">
      <h1
        class="text-center text-darkGray-950 font-extrabold text-7xl animate__animated animate__fadeInUp"
      >
        Don't Just
        <span class="text-secondary-500 shadow-secondary">Learn</span>—
      </h1>
      <h1
        class="text-center text-darkGray-950 font-extrabold text-7xl mt-2 animate__animated animate__fadeInUp"
        style="animation-delay: 0.1s"
      >
        <span class="text-secondary-500 shadow-secondary">Master</span>
        It!
      </h1>
      <div
        class="flex flex-col text-center mt-6 font-medium text-darkGray-900 text-lg"
      >
        <p
          class="animate__animated animate__fadeInUp"
          style="animation-delay: 0.2s"
        >
          Unlock the power of knowledge with expert-led courses designed to help
          you excel.
        </p>
        <p
          class="animate__animated animate__fadeInUp"
          style="animation-delay: 0.25s"
        >
          Whether you're a beginner or advancing your skills, take control and
          master what truly matters.
        </p>
      </div>
      <div class="flex justify-center gap-6 mt-10">
        <nuxt-link to="" class="animate__animated animate__fadeInLeft">
          <button
            class="bg-secondary-400 hover:bg-secondary-500 py-3 pl-8 pr-6 flex items-center gap-2 rounded-lg transition-all"
          >
            <span class="text-sm text-black font-medium">Sign Up</span>
            <Icon
              name="solar:arrow-right-outline"
              size="1.4em"
              class="text-black"
            />
          </button>
        </nuxt-link>
        <nuxt-link to="" class="animate__animated animate__fadeInRight">
          <button
            class="py-3 pl-8 pr-6 flex items-center gap-2 rounded-lg hover:bg-darkGray-200 transition-all"
          >
            <span class="text-sm text-black font-medium">Try Demo</span>
            <Icon
              name="solar:play-circle-outline"
              size="1.4em"
              class="text-black"
            />
          </button>
        </nuxt-link>
      </div>
    </div>
    <div id="bg-connector" class="w-full h-64 mt-48"></div>
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
