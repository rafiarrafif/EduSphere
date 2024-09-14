<template>
  <div class="fixed top-0 left-0 flex h-screen w-screen bg-black bg-opacity-30">
    <div
      v-click-outside="closeSidebar"
      :class="[
        'h-screen w-60 bg-primary-50 flex flex-col justify-between px-4 pt-10 animate__animated',
        transition,
      ]"
      ref="sidebarElement"
      style="animation-duration: 240ms"
    >
      <component :is="component"></component>
    </div>
    <div
      :class="[
        'bg-white w-12 h-12 rounded-full mt-4 ml-4 flex items-center justify-center animate__animated',
        transition,
      ]"
      ref="closeBtnElement"
      style="animation-duration: 180ms"
    >
      <Icon name="material-symbols:close-rounded" size="1.4em" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useLandingPageStore } from "#imports";
import mainComponent from "~/components/pages/landingpage/sidebar/main.vue";
import langComponent from "~/components/pages/landingpage/sidebar/language.vue";

const sidebarElement = ref<HTMLElement | null>(null);
const closeBtnElement = ref<HTMLElement | null>(null);

const landingPageStore = useLandingPageStore();
const closeSidebar = () => {
  sidebarElement.value?.classList.add("animate__fadeOutLeft");
  closeBtnElement.value?.classList.add("animate__fadeOutLeft");

  setTimeout(() => {
    landingPageStore.toggleSidebarState();
  }, 240);
};

const isClose = ref(false);
const transition = computed(() => {
  return isClose ? "animate__fadeInLeft" : "animate__fadeOutLeft";
});

const componentMap: Record<string, any> = {
  mainComponent,
  langComponent,
};
const component = computed(
  () => componentMap[landingPageStore.sidebarComponent]
);
</script>
