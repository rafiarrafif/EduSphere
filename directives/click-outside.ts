import type { DirectiveBinding } from "vue";

interface ExtendedHTMLElement extends HTMLElement {
  _clickOutside?: (event: MouseEvent) => void;
}

const clickOutsideDirective = {
  beforeMount(el: ExtendedHTMLElement, binding: DirectiveBinding) {
    const callback = binding.value;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Mencari class 'child-safearea-' pada elemen directive
      const childSafeClass = Array.from(el.classList).find((className) =>
        className.startsWith("child-safearea-")
      );
      const key = childSafeClass?.split("-")[2]; // Ambil key dari class child-safearea-<key>

      console.log(key);
      if (key) {
        const parentSafeClass = `parent-safearea-${key}`;

        // Jika klik terjadi pada elemen trigger atau ancestor yang memiliki class 'parent-safearea-<key>'
        if (
          target.classList.contains(parentSafeClass) || // Pengecekan pada class parent-safearea
          target.closest(`.${parentSafeClass}`) || // Atau ancestor yang memiliki class parent-safearea
          el.contains(target) // Atau jika elemen yang di-klik ada di dalam popup (child dari el)
        ) {
          return; // Jangan jalankan callback (jangan tutup popup)
        }
      }

      // Jika klik terjadi di luar area yang dikecualikan, jalankan callback (menutup popup)
      callback(event);
    };

    // Tambahkan event listener
    document.addEventListener("click", handleClickOutside);
    el._clickOutside = handleClickOutside;
  },

  unmounted(el: ExtendedHTMLElement) {
    // Hapus event listener saat elemen dilepas dari DOM
    if (el._clickOutside) {
      document.removeEventListener("click", el._clickOutside);
    }
  },
};

export default clickOutsideDirective;
