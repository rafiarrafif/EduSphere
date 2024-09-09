import type { DirectiveBinding, ObjectDirective } from "vue";

const vShowWhenSee: ObjectDirective<HTMLElement> = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const options = {
      threshold: 0.1,
    };

    const transitionClass = binding.arg || "animate__fadeInUp";

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        el.classList.add("animate__animated", transitionClass);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    (el as any)._onDestroy = () => {
      observer.unobserve(el);
      observer.disconnect();
    };

    observer.observe(el);
  },
  unmounted(el: HTMLElement) {
    if ((el as any)._onDestroy) {
      (el as any)._onDestroy();
    }
  },
};

export default vShowWhenSee;
