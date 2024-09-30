import type { DirectiveBinding } from "vue";

type HTMLElementWithClickOutside = HTMLElement & {
  __clickOutsideHandler__?: (event: Event) => void;
};

const vClickOutside = {
  mounted(el: HTMLElementWithClickOutside, binding: DirectiveBinding) {
    const clickHandler = (event: Event) => {
      const target = event.target as Node;

      const isClickInsideElement = el === target || el.contains(target);
      const isClickInsideSafeAreas =
        (target instanceof HTMLElement && target.closest(".safe-areas")) !==
        null;

      if (!isClickInsideElement && !isClickInsideSafeAreas) {
        binding.value(event);
      }
    };

    el.__clickOutsideHandler__ = clickHandler;
    document.addEventListener("click", clickHandler, true); // true = useCapture
  },
  unmounted(el: HTMLElementWithClickOutside) {
    document.removeEventListener("click", el.__clickOutsideHandler__!, true); // Pastikan menghapus listener dengan mode capture
    delete el.__clickOutsideHandler__;
  },
};

export default vClickOutside;
