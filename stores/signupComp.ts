import { defineStore } from "#imports";

interface signupComp {
  isSignupVisible: boolean;
}

export const useSignupCompStore = defineStore("signupComp", {
  state: (): signupComp => ({
    isSignupVisible: false,
  }),
  actions: {
    toggleSignupVisibility(signupVisibility: boolean) {
      this.isSignupVisible = signupVisibility;
    },
  },
});
