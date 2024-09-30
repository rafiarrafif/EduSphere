<template>
  <div
    class="fixed h-screen w-screen bg-black bg-opacity-40 backdrop-blur-md z-[9999] flex justify-center items-center"
  >
    <div
      ref="loginCardElement"
      class="relative pb-8 w-fit bg-primary-50 overflow-hidden rounded-lg drop-shadow-md animate__animated animate__bounceIn"
      v-click-outside="closePopup"
    >
      <div class="mt-16">
        <div class="flex flex-col gap-0.5">
          <h1 class="text-4xl font-bold text-center mx-14">
            {{ $t("login.grettings.title") }}
          </h1>
          <h1 class="text-xs font-medium text-center text-darkGray-950">
            {{ $t("login.grettings.description") }}
          </h1>
        </div>
        <div class="mt-6">
          <form class="flex flex-col px-8 gap-2" @submit.prevent="submit">
            <div class="w-full">
              <input
                type="email"
                v-model="email"
                :placeholder="t('login.input.email')"
                class="w-full py-2 px-4 rounded-lg outline-transparent placeholder:text-sm placeholder-darkGray-400 focus:outline-secondary-500 border border-darkGray-300 transition-all"
                :class="{
                  'border-red-500': emailErr,
                  'text-red-500': emailErr,
                }"
                @input="validateEmail"
              />
              <div
                class="w-fit mt-1 ml-1 flex items-center gap-1"
                v-if="emailErr"
              >
                <Icon name="solar:danger-circle-bold" class="text-red-500" />
                <p class="text-xs font-medium text-red-500 w-fit">
                  {{ $t("login.input.email.err") }}
                </p>
              </div>
            </div>
            <div class="w-full">
              <input
                type="password"
                v-model="password"
                :placeholder="t('login.input.password')"
                class="w-full py-2 px-4 rounded-lg outline-transparent placeholder:text-sm placeholder-darkGray-400 focus:outline-secondary-500 border border-darkGray-300 transition-all"
                :class="{
                  'border-red-500': passErr,
                  'text-red-500': passErr,
                }"
                @input="validatePass"
              />
              <div
                class="w-fit mt-1 ml-1 flex items-center gap-1"
                v-if="passErr"
              >
                <Icon name="solar:danger-circle-bold" class="text-red-500" />
                <p class="text-xs font-medium text-red-500 w-fit">
                  {{ $t("login.input.password.err") }}
                </p>
              </div>
            </div>
            <div class="px-4">
              <button
                type="submit"
                class="w-full py-3 px-6 mt-3 rounded-lg text-primary-950 bg-accent-500 hover:bg-accent-400 focus:outline-none transition-all text-sm font-medium"
              >
                {{ $t("login.input.submit") }}
              </button>
              <button
                type="button"
                @click="toSignup"
                class="w-full py-3 px-6 mt-1 rounded-lg text-accent-600 bg-transparent hover:bg-darkGray-200 focus:outline-none transition-all text-sm font-medium"
              >
                {{ $t("login.additional.register") }}
              </button>
            </div>
          </form>
          <div>
            <p
              class="text-center mt-4 mb-4 text-sm font-medium text-darkGray-950"
            >
              {{ $t("login.additional.oauth") }}
            </p>
            <div class="flex gap-2 justify-center">
              <button
                class="h-12 w-20 flex justify-center items-center rounded-md bg-accent-500 hover:bg-accent-400 transition-all"
              >
                <Icon name="carbon:logo-google" size="1.2em" />
              </button>
              <button
                class="h-12 w-20 flex justify-center items-center rounded-md bg-accent-500 hover:bg-accent-400 transition-all"
              >
                <Icon name="ic:outline-facebook" size="1.2em" />
              </button>
              <button
                class="h-12 w-20 flex justify-center items-center rounded-md bg-accent-500 hover:bg-accent-400 transition-all"
              >
                <Icon name="ri:twitter-x-fill" />
              </button>
            </div>
          </div>
          <div class="w-full flex justify-center mt-5">
            <nuxt-link
              to=""
              class="w-fit cursor-pointer px-4 py-2 text-accent-600 text-sm font-medium"
              >{{ $t("login.additional.forgotPassword") }}</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="absolute w-full h-fit -z-10 top-0 left-0">
        <img
          src="/assets/login_bg.png"
          class="w-full h-fit -mt-12"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "#imports";
const { t } = useI18n();

import { useLoginCompStore } from "#imports";
const loginCompStore = useLoginCompStore();
const loginCardElement = ref<HTMLElement | null>(null);
const closePopup = () => {
  loginCardElement.value?.classList.add("animate__bounceOut");
  setTimeout(() => {
    loginCompStore.toggleLoginVisibility(false);
    window.history.pushState(null, "", "/");
  }, 600);
};

const email = ref("");
const password = ref("");
const emailErr = ref(false);
const passErr = ref(false);
const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailErr.value = !emailRegex.test(email.value);
};
const validatePass = () => {
  passErr.value = password.value.length < 8;
};
const submit = () => {
  validateEmail();
  validatePass();
  if (!emailErr.value && !passErr.value) {
    console.log("Login successful!");
  }
};

import { useSignupCompStore } from "#imports";
const signupCompStore = useSignupCompStore();
const toSignup = () => {
  closePopup();
  setTimeout(() => {
    window.history.pushState(null, "", "/signup");
    signupCompStore.toggleSignupVisibility(true);
  }, 600);
};
</script>
