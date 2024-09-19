<template>
  <div class="w-full mt-32 flex justify-center">
    <div class="w-192 flex justify-center gap-72">
      <div class="flex flex-col gap-6 mt-2">
        <div class="flex flex-col gap-2">
          <div class="font-semibold text-3xl flex flex-col gap-1">
            <h1 v-show-when-see>Empower the Next Generation</h1>
            <h1 v-show-when-see style="animation-delay: 0.1s">
              Be Their <span class="text-gradient font-bold">Mentor</span>
            </h1>
          </div>
          <div
            class="w-128 font-medium text-darkGray-900"
            v-show-when-see
            style="animation-delay: 0.1s"
          >
            <p>
              Your expertise can inspire a new wave of learners to unlock their
              potential and achieve their dreams. As a mentor, you're more than
              just a teacher, you're a guide, a motivator, and a catalyst for
              change. Share your knowledge, ignite curiosity, and help shape the
              future one lesson at a time.
            </p>
          </div>
        </div>
        <div>
          <div class="font-semibold text-2xl">
            <h1 v-show-when-see style="animation-delay: 0.1s">
              Reap the Rewards
            </h1>
          </div>
          <div class="mt-2 flex flex-col flex-wrap h-32 gap-1">
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
              class="w-fit h-fit bg-black mt-2 rounded-xl overflow-hidden drop-shadow"
              v-show-when-see
              style="animation-delay: 0.2s"
            >
              <button
                class="bg-accent-500 text-black font-semibold px-12 py-4 hover:bg-opacity-95 transition-all"
              >
                Become an Mentor
              </button>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div>
        <img
          draggable="false"
          src="/assets/for-mentor-mascot.png"
          class="h-auto w-96"
          v-show-when-see:animate__fadeInRight
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const benefits = [
  "Expand Your Reach",
  "Monetize Your Expertise",
  "Flexible Teaching",
  "Build a Personal Brand",
  "Inspire Learners",
  "Continuous Growth",
  "Community Engagement",
  "Tailored Learning Paths",
];
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
