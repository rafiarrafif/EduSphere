import { defineNuxtPlugin } from "#app";
import vShowWhenSee from "~/directives/v-show-when-see";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("showWhenSee", vShowWhenSee);
});
