<template>
  <div class="flex justify-center gap-28 mt-20 py-16 bg-primary-100">
    <div v-show-when-see:animate__fadeInLeft class="opacity-0">
      <img
        src="/assets/jumbotron_1.png"
        class="w-fit h-128"
        draggable="false"
      />
    </div>
    <div class="h-fit w-128">
      <div v-show-when-see class="opacity-0" style="animation-delay: 0.1s">
        <h1 class="w-fit text-4xl font-semibold text-darkGray-950">
          Why Choose <span class="text-gradient font-bold">Us</span>?
        </h1>
      </div>
      <div class="mt-10">
        <PagesLandingpageWhyChooseUsPartials />
      </div>
    </div>
  </div>
</template>

<style scoped>
.h-128 {
  height: 32rem;
}
.w-128 {
  width: 38rem;
}
.text-gradient {
  background: #1abc9c;
  background: linear-gradient(to bottom right, #1abc9c 30%, #f1c40f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
