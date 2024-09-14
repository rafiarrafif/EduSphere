import { useDeviceType } from "#imports";

export const useDeviceDetection = () => {
  const deviceStore = useDeviceType();

  const handleResize = () => {
    const width = window.innerWidth;

    if (width <= 640) {
      deviceStore.setDeviceType("mobile");
    } else if (width > 640 && width <= 1024) {
      deviceStore.setDeviceType("tablet");
    } else if (width > 1024 && width <= 1280) {
      deviceStore.setDeviceType("laptop");
    } else {
      deviceStore.setDeviceType("desktop");
    }
  };

  onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
};
