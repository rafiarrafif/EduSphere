<template>
  <div>
    <div
      class="fixed bottom-0 left-0 w-full flex justify-evenly py-2 shadow-[0_-4px_6px_rgba(0,0,0,0.1)] px-3"
    >
      <nuxt-link to="dashboard" class="flex-1 w-fit flex justify-center pt-1">
        <div class="flex flex-col items-center w-fit gap-1 px-3 py-1">
          <Icon
            class="text-darkGray-950"
            :name="`solar:home-angle-${
              route.path === '/dashboard' ? 'bold' : 'linear'
            }`"
            size="1.4em"
          />
          <span class="text-xxs text-darkGray-800">Home</span>
        </div>
      </nuxt-link>
      <nuxt-link to="excercise" class="flex-1 w-fit flex justify-center pt-1">
        <div class="flex flex-col items-center w-fit gap-1 px-3 py-1">
          <Icon
            class="text-darkGray-950"
            :name="`solar:document-add-${
              route.path === '/excercise' ? 'bold' : 'linear'
            }`"
            size="1.4em"
          />
          <span class="text-xxs text-darkGray-800">Home</span>
        </div>
      </nuxt-link>
      <nuxt-link to="course" class="flex-1 w-fit flex justify-center pt-1">
        <div class="flex flex-col items-center w-fit gap-1 px-3 py-1">
          <Icon
            class="text-darkGray-950 -mt-0.5"
            :name="`solar:square-academic-cap-${
              route.path === '/course' ? 'bold' : 'linear'
            }`"
            size="1.5em"
          />
          <span class="text-xxs text-darkGray-800">Course</span>
        </div>
      </nuxt-link>
      <nuxt-link to="community" class="flex-1 w-fit flex justify-center pt-1">
        <div class="flex flex-col items-center w-fit gap-1 px-3 py-1">
          <Icon
            class="text-darkGray-950"
            :name="`solar:users-group-rounded-${
              route.path === '/community' ? 'bold' : 'linear'
            }`"
            size="1.4em"
          />
          <span class="text-xxs text-darkGray-800">Community</span>
        </div>
      </nuxt-link>
      <nuxt-link to="myaccount" class="flex-1 w-fit flex justify-center pt-1">
        <div class="flex flex-col items-center w-fit gap-1 px-3 py-1">
          <Icon
            class="text-darkGray-950"
            :name="`solar:user-rounded-${
              route.path === '/myaccount' ? 'bold' : 'linear'
            }`"
            size="1.4em"
          />
          <span class="text-xxs text-darkGray-800">Account</span>
        </div>
      </nuxt-link>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
