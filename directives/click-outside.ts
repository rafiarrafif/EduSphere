import type { DirectiveBinding } from "vue";

type HTMLElementWithClickOutside = HTMLElement & {
  __clickOutsideHandler__?: (event: Event) => void;
};

const vClickOutside = {
  mounted(el: HTMLElementWithClickOutside, binding: DirectiveBinding) {
    const clickHandler = (event: Event) => {
      const target = event.target as Node;

      // Mengecek apakah klik terjadi di dalam elemen atau elemen safe-areas
      const isClickInsideElement = el === target || el.contains(target);
      const isClickInsideSafeAreas =
        (target instanceof HTMLElement && target.closest(".safe-areas")) !==
        null;

      // Jika tidak klik di dalam elemen dan bukan di safe-areas, maka trigger handler
      if (!isClickInsideElement && !isClickInsideSafeAreas) {
        binding.value(event);
      }
    };

    // Menggunakan capture agar listener dijalankan sebelum bubbling ke child
    el.__clickOutsideHandler__ = clickHandler;
    document.addEventListener("click", clickHandler, true); // true = useCapture
  },
  unmounted(el: HTMLElementWithClickOutside) {
    document.removeEventListener("click", el.__clickOutsideHandler__!, true); // Pastikan menghapus listener dengan mode capture
    delete el.__clickOutsideHandler__;
  },
};

export default vClickOutside;
