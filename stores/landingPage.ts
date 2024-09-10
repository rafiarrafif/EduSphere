import { defineStore } from "#imports";

interface landingPageStore {
  searchIconState: boolean;
  searchFocus: HTMLInputElement | null;
  isOnEdgeTop: boolean;
  selectCourses: string;
  hoveredCourseCard: number | null;
}

export const useLandingPageStore = defineStore("landingPageStore", {
  state: (): landingPageStore => ({
    searchIconState: false,
    searchFocus: null,
    isOnEdgeTop: true,
    selectCourses: "web-development",
    hoveredCourseCard: null,
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
    setHoveredCard(cardID: number) {
      this.hoveredCourseCard = cardID;
    },
  },
});
