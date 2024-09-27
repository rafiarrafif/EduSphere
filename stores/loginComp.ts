import { defineStore } from "#imports";

interface loginComponent {
  isLoginVisible: boolean;
}

export const useLoginCompStore = defineStore("loginComp", {
  state: (): loginComponent => ({
    isLoginVisible: false,
  }),
  actions: {
    toggleLoginVisibility(loginVisibility: boolean) {
      this.isLoginVisible = loginVisibility;
    },
  },
});
