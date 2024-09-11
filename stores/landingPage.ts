import { defineStore } from "#imports";

interface landingPageStore {
  searchIconState: boolean;
  searchFocus: HTMLInputElement | null;
  isOnEdgeTop: boolean;
  roadmapActive: number;
  hoveredCourseCard: number | null;
  languagePopupState: boolean;
}

export const useLandingPageStore = defineStore("landingPageStore", {
  state: (): landingPageStore => ({
    searchIconState: false,
    searchFocus: null,
    isOnEdgeTop: true,
    roadmapActive: 1,
    hoveredCourseCard: null,
    languagePopupState: false,
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
    setSelectCourses(courses: number) {
      this.roadmapActive = courses;
    },
    setHoveredCard(cardID: number) {
      this.hoveredCourseCard = cardID;
    },
    toogleLanguagePopupState() {
      this.languagePopupState = !this.languagePopupState;
    },
  },
});
