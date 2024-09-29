import { defineStore } from "#imports";

interface popupStore {
  popupComponent: string | null;
  popupVisible: boolean;
}

export const usePopupStore = defineStore("popupStore", {
  state: (): popupStore => ({
    popupComponent: null,
    popupVisible: false,
  }),
  actions: {
    setPopupShow(component: string) {
      this.popupVisible = true;
      this.popupComponent = component;
    },
    setPopupHide() {
      this.popupVisible = false;
      this.popupComponent = null;
    },
  },
});
