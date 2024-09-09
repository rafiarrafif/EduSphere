<template>
  <div class="flex w-full h-screen">
    <div
      id="sidebar"
      class="flex bg-white w-72 h-full shadow-r border-r border-primary-200"
    >
      <div class="flex flex-col w-full">
        <div class="w-full h-20"></div>
        <div class="flex flex-col mx-4 w-fill-available gap-2">
          <div class="flex flex-col gap-1">
            <nuxt-link to="/dashboard">
              <SidebarNavigation
                :active="route.path === '/dashboard'"
                icon="home-angle"
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
      <nav class="flex bg-white justify-between items-center w-full h-16 px-6">
        <h1 class="text-darkGray-950 font-semibold text-xl ml-2">
          Welcome back, David 👋
        </h1>
        <div class="flex h-full items-center">
          <div class="flex h-full items-center gap-1">
            <div
              class="w-fit h-fit pt-2 px-2 pb-1 rounded-lg hover:bg-darkGray-200"
            >
              <Icon
                name="solar:minimalistic-magnifer-linear"
                size="1.2em"
                class="text-darkGray-900"
              />
            </div>
            <div
              class="w-fit h-fit pt-2 px-2 pb-1 rounded-lg hover:bg-darkGray-200"
            >
              <Icon
                name="solar:bell-linear"
                size="1.2em"
                class="text-darkGray-900"
              />
            </div>
          </div>
          <div
            class="w-0.5 h-fill-available mr-2 ml-4 bg-darkGray-200 my-4"
          ></div>
          <div
            class="flex gap-2 items-center py-1 px-2 h-fit rounded-lg transition-all cursor-pointer hover:bg-darkGray-200"
          >
            <div class="w-9 h-9 rounded-full overflow-hidden">
              <img
                src="~/assets/img/users/test1.jpeg"
                class="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <h2 class="text-darkGray-950 text-base font-bold">David A.</h2>
              <p class="text-darkGray-900 font-medium text-sm -mt-0.5">
                Level 1
              </p>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
