import { defineStore } from "#imports";

interface deviceType {
  deviceType: string;
}

export const useDeviceType = defineStore("deviceType", {
  state: (): deviceType => ({
    deviceType: "tablet",
  }),
  actions: {
    setDeviceType(deviceType: string) {
      this.deviceType = deviceType;
    },
  },
});
