import { useSignupCompStore } from "#imports";

export default defineNuxtRouteMiddleware((to) => {
  const signupCompStore = useSignupCompStore();

  if (to.path === "/signup") {
    signupCompStore.toggleSignupVisibility(true);
  } else {
    signupCompStore.toggleSignupVisibility(false);
  }
});
