<template>
  <div class="flex w-full h-screen">
    <div
      id="sidebar"
      class="flex bg-white w-72 h-full shadow-lg border-r-1 border-primary-900"
    >
      <div class="flex flex-col w-full">
        <div class="w-full h-20"></div>
        <div class="flex flex-col mx-4 w-fill-available gap-2">
          <div class="flex flex-col gap-1">
            <nuxt-link to="/">
              <SidebarNavigation :active="route.path === '/'" icon="home-angle"
                >Home</SidebarNavigation
              >
            </nuxt-link>
            <nuxt-link to="bookmarks">
              <SidebarNavigation
                :active="route.path === '/bookmarks'"
                icon="bookmark"
                >Bookmarks</SidebarNavigation
              >
            </nuxt-link>
          </div>
          <div class="bg-darkGray-200 h-0.5 w-full rounded-full"></div>
          <div class="flex flex-col gap-1">
            <nuxt-link to="/course">
              <SidebarNavigation
                :active="route.path === '/course'"
                icon="square-academic-cap"
                >Course</SidebarNavigation
              >
            </nuxt-link>
            <nuxt-link to="/excercise">
              <SidebarNavigation
                :active="route.path === '/excercise'"
                icon="document-add"
                >Excercise</SidebarNavigation
              >
            </nuxt-link>
            <nuxt-link to="certificate">
              <SidebarNavigation
                :active="route.path === '/certificate'"
                icon="document-medicine"
                >Certificate</SidebarNavigation
              >
            </nuxt-link>
            <nuxt-link to="question">
              <SidebarNavigation
                :active="route.path === '/question'"
                icon="question-square"
                >Question</SidebarNavigation
              >
            </nuxt-link>
          </div>
          <div class="bg-darkGray-200 h-0.5 w-full rounded-full"></div>
          <div class="flex flex-col gap-1">
            <nuxt-link to="/community">
              <SidebarNavigation
                :active="route.path === '/community'"
                icon="users-group-rounded"
                >Community</SidebarNavigation
              >
            </nuxt-link>
            <nuxt-link to="event">
              <SidebarNavigation
                :active="route.path === '/event'"
                icon="calendar-mark"
                >Event</SidebarNavigation
              >
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div id="main-viewport" class="w-full bg-primary-50">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
