<template>
  <div
    class="flex justify-center w-full bg-secondary-500 py-40 mt-10 max-lg:mt-0"
  >
    <div
      class="flex flex-col gap-8 w-148 px-12 py-12 rounded-lg shadow bg-primary-50 mx-12 max-md:mx-4 max-md:px-8 max-sm:mx-2 max-sm:px-4"
    >
      <div
        class="flex flex-col text-center mx-20 gap-2 max-lg:mx-12 max-md:mx-6 max-sm:mx-2"
      >
        <h1 class="text-3xl font-semibold text-darkGray-950 max-md:text-2xl">
          Stay Connected With Us
        </h1>
        <p class="text-sm text-darkGray-900">
          Have more questions or want to stay updated? Sign up for our
          newsletter or reach out to us directly, and we’ll get back to you with
          all the information you need.
        </p>
      </div>
      <div>
        <form @submit.prevent="submitForm" class="flex flex-col gap-2">
          <div class="flex gap-2 max-md:flex-col">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email address"
              required
              class="flex-1 py-2 px-4 rounded-lg outline-transparent placeholder:text-sm placeholder-darkGray-400 focus:outline-secondary-500 border border-darkGray-300 transition-all"
            />
            <input
              v-model="name"
              type="text"
              placeholder="Enter your name"
              required
              class="flex-1 py-2 px-4 rounded-lg outline-transparent placeholder:text-sm placeholder-darkGray-400 focus:outline-secondary-500 border border-darkGray-300 transition-all"
            />
          </div>
          <div>
            <textarea
              v-model="text"
              class="w-full resize-none h-28 px-3 py-1.5 rounded-lg placeholder:text-sm placeholder-darkGray-400 outline-transparent focus:outline-secondary-500 border border-darkGray-300 transition-all"
              placeholder="If you have any questions, feel free to ask here"
            ></textarea>
          </div>
          <button
            type="submit"
            class="flex w-full justify-center bg-accent-500 py-4 rounded-xl font-medium shadow hover:bg-opacity-80 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const email = ref();
const name = ref();
const text = ref();

const submitForm = () => {
  alert(`Form akan dikirimkan ke email ${email.value}`);
  // alert(generate());
};
</script>

<style scoped>
.bg-custom {
  background: hsla(48, 89%, 50%, 1);

  background: linear-gradient(
    135deg,
    hsla(48, 89%, 50%, 1) 0%,
    hsla(168, 76%, 42%, 1) 16%,
    hsla(168, 76%, 42%, 1) 84%,
    hsla(48, 89%, 50%, 1) 100%
  );

  background: -moz-linear-gradient(
    135deg,
    hsla(48, 89%, 50%, 1) 0%,
    hsla(168, 76%, 42%, 1) 16%,
    hsla(168, 76%, 42%, 1) 84%,
    hsla(48, 89%, 50%, 1) 100%
  );

  background: -webkit-linear-gradient(
    135deg,
    hsla(48, 89%, 50%, 1) 0%,
    hsla(168, 76%, 42%, 1) 16%,
    hsla(168, 76%, 42%, 1) 84%,
    hsla(48, 89%, 50%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F1C40F", endColorstr="#1ABC9C", GradientType=1 );
}
</style>
