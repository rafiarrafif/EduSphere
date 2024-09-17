<template>
  <div class="fixed top-0 left-0 h-screen w-screen bg-white z-100">
    <div class="w-full h-full flex justify-center items-center">
      <img src="/logo/main.svg" class="h-fit w-32 -mt-24 bounce-animation" />
      <span
        class="fixed w-screen left-0 text-center bottom-12 font-medium text-primary-950"
        ><span class="font-black">Edu</span>Sphere</span
      >
    </div>
  </div>
</template>

<style scoped>
@keyframes bounceInOut {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

.bounce-animation {
  animation: bounceInOut 1s infinite;
}

.z-100 {
  z-index: 99999;
}
</style>
