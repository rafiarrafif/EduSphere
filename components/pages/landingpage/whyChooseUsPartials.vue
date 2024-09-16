<template>
  <div class="flex flex-col gap-8">
    <div
      class="flex gap-4 opacity-0"
      v-show-when-see:animate__fadeInRight
      style="animation-delay: 0s"
    >
      <div
        class="aspect-safe flex items-center justify-center rounded-full bg-secondary-500"
      >
        <Icon
          name="gravity-ui:target-dart"
          size="1.8em"
          class="mxs bg-secondary-50"
        />
      </div>
      <div class="w-fit flex flex-col gap-1">
        <h1 class="font-semibold text-xl text-darkGray-950">
          Personalized Learning Path
        </h1>
        <p class="text-darkGray-800 font-medium">
          Tailor your learning journey with a fully customized path designed
          around your goals and interests, ensuring you master what truly
          matters to you.
        </p>
      </div>
    </div>
    <div
      class="flex gap-4 opacity-0"
      v-show-when-see:animate__fadeInRight
      style="animation-delay: 0.1s"
    >
      <div
        class="aspect-safe flex items-center justify-center rounded-full bg-accent-500"
      >
        <Icon name="mdi:google-analytics" size="1.8em" class="bg-accent-50" />
      </div>
      <div class="w-fit flex flex-col gap-1">
        <h1 class="font-semibold text-xl text-darkGray-950">
          Advanced Learning Analytics
        </h1>
        <p class="text-darkGray-800 font-medium">
          Receive in-depth analysis of your strengths and weaknesses, along with
          personalized recommendations to improve and excel.
        </p>
      </div>
    </div>
    <div
      class="flex gap-4 opacity-0"
      v-show-when-see:animate__fadeInRight
      style="animation-delay: 0.2s"
    >
      <div
        class="aspect-safe flex items-center justify-center rounded-full bg-secondary-500"
      >
        <Icon name="ph:trophy-fill" size="1.8em" class="mxs bg-secondary-50" />
      </div>
      <div class="w-fit flex flex-col gap-1">
        <h1 class="font-semibold text-xl text-darkGray-950">
          Unique Achievements and Badges
        </h1>
        <p class="text-darkGray-800 font-medium">
          Earn badges and achievements as you progress, with a gamified system
          that motivates and rewards your efforts and milestones.
        </p>
      </div>
    </div>
    <div
      class="flex gap-4 opacity-0"
      v-show-when-see:animate__fadeInRight
      style="animation-delay: 0.3s"
    >
      <div
        class="aspect-safe flex items-center justify-center rounded-full bg-accent-500"
      >
        <Icon
          name="ph:users-three-fill"
          size="1.8em"
          class="mxs bg-accent-50"
        />
      </div>
      <div class="w-fit flex flex-col gap-1">
        <h1 class="font-semibold text-xl text-darkGray-950">
          Dynamic Community Integration
        </h1>
        <p class="text-darkGray-800 font-medium">
          Connect and engage with a vibrant community through real-time
          discussions, questions, and collaborative learning, fostering a
          supportive network.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.aspect-safe {
  width: 56px;
  height: 51px;
}
</style>
