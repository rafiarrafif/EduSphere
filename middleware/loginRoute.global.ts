import { useLoginCompStore } from "#imports";

export default defineNuxtRouteMiddleware((to) => {
  const loginCompStore = useLoginCompStore();

  if (to.path === "/login") {
    loginCompStore.toggleLoginVisibility(true);
  } else {
    loginCompStore.toggleLoginVisibility(false);
  }
});
