import { defineStore } from "#imports";

interface landingPageStore {
  searchIconState: boolean;
  searchFocus: HTMLInputElement | null;
  isOnEdgeTop: boolean;
  roadmapActive: number;
  hoveredCourseCard: number | null;
  languagePopupState: boolean;
  cartPopupState: boolean;
  sidebarState: boolean;
  sidebarComponent: string;
  cartPageState: boolean;
  searchMobileState: boolean;
}

export const useLandingPageStore = defineStore("landingPageStore", {
  state: (): landingPageStore => ({
    searchIconState: false,
    searchFocus: null,
    isOnEdgeTop: true,
    roadmapActive: 1,
    hoveredCourseCard: null,
    languagePopupState: false,
    cartPopupState: false,
    sidebarState: false,
    sidebarComponent: "mainComponent",
    cartPageState: false,
    searchMobileState: false,
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
    toggleLanguagePopupState() {
      this.languagePopupState = !this.languagePopupState;
    },
    toggleCartPopupState() {
      this.cartPopupState = !this.cartPopupState;
    },
    toggleSidebarState() {
      this.sidebarState = !this.sidebarState;
    },
    setSidebarComponent(component: string) {
      this.sidebarComponent = component;
    },
    toggleCartPageState() {
      this.cartPageState = !this.cartPageState;
    },
    toggleSearchMobileState() {
      this.searchMobileState = !this.searchMobileState;
    },
  },
});
