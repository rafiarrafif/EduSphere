import { defineStore } from "#imports";

interface deviceType {
  deviceType: string | null;
}

export const useDeviceType = defineStore("deviceType", {
  state: (): deviceType => ({
    deviceType: null,
  }),
  actions: {
    setDeviceType(deviceType: string) {
      this.deviceType = deviceType;
    },
  },
});
