import { defineNuxtPlugin } from "#app";
import vShowWhenSee from "~/directives/v-show-when-see";
import vClickOutside from "~/directives/click-outside";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("showWhenSee", vShowWhenSee);
  nuxtApp.vueApp.directive("clickOutside", vClickOutside);
});
