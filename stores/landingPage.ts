import { defineStore } from "#imports";

interface landingPageStore {
  searchIconState: boolean;
  searchFocus: HTMLInputElement | null;
  isOnEdgeTop: boolean;
  selectCourses: string;
}

export const useLandingPageStore = defineStore("landingPageStore", {
  state: (): landingPageStore => ({
    searchIconState: false,
    searchFocus: null,
    isOnEdgeTop: true,
    selectCourses: "web-development",
  }),
  actions: {
    setFocusSearch(el: HTMLInputElement) {
      this.searchFocus = el;
    },
    focusSearch() {
      this.searchFocus?.focus();
    },
    toggleSearchIcon() {
      this.searchIconState = !this.searchIconState;
    },
    setIsOnEdgeTop(isOnEdgeTop: boolean) {
      this.isOnEdgeTop = isOnEdgeTop;
    },
    setSelectCourses(courses: string) {
      this.selectCourses = courses;
    },
  },
});
