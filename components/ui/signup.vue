<template>
  <div
    class="fixed z-[9999] h-screen w-screen bg-black bg-opacity-40 backdrop-blur-md flex justify-center items-center"
  >
    <div
      class="flex bg-primary-50 h-fit w-fit -mt-12 py-3 pl-3 pr-12 rounded-xl gap-14 drop-shadow-md animate__animated animate__bounceIn"
      ref="signupCardElement"
      v-click-outside="closePopup"
    >
      <div class="h-auto w-100 overflow-hidden rounded-lg shadow-md">
        <img
          src="/assets/signup-jumbotron.jpeg"
          class="h-full w-full object-cover"
        />
      </div>
      <div>
        <div class="my-8 flex flex-col gap-4">
          <h1 class="text-darkGray-950 text-4xl font-medium">
            Create an account
          </h1>
          <span class="text-sm text-darkGray-900"
            >Already have an account?
            <span
              class="text-accent-600 underline cursor-pointer"
              @click="toLogin"
              >login</span
            ></span
          >
          <div class="mt-8">
            <form class="flex flex-col gap-2" @submit.prevent="submit">
              <div class="flex gap-2">
                <div class="w-52">
                  <input
                    type="text"
                    v-model="firstname"
                    :placeholder="t('signup.input.firstname')"
                    class="w-full py-2 px-4 rounded-lg outline-transparent placeholder:text-sm placeholder-darkGray-400 focus:outline-secondary-500 border border-darkGray-300 transition-all"
                    :class="{
                      'border-red-500': firstnameErr,
                      'text-red-500': firstnameErr,
                    }"
                    @input="validateFirstname"
                  />
                  <div
                    class="w-fit mt-1 ml-1 flex items-center gap-1"
                    v-if="firstnameErr"
                  >
                    <Icon
                      name="solar:danger-circle-bold"
                      class="text-red-500"
                    />
                    <p class="text-xs font-medium text-red-500 w-fit">
                      {{ $t("signup.input.firstname.err") }}
                    </p>
                  </div>
                </div>
                <div class="w-52">
                  <input
                    type="text"
                    v-model="lastname"
                    :placeholder="t('signup.input.lastname')"
                    class="w-full py-2 px-4 rounded-lg outline-transparent placeholder:text-sm placeholder-darkGray-400 focus:outline-secondary-500 border border-darkGray-300 transition-all"
                  />
                </div>
              </div>
              <div class="flex w-full">
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
                    <Icon
                      name="solar:danger-circle-bold"
                      class="text-red-500"
                    />
                    <p class="text-xs font-medium text-red-500 w-fit">
                      {{ $t("login.input.email.err") }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex w-full">
                <div class="w-full">
                  <input
                    type="password"
                    v-model="pass"
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
                    <Icon
                      name="solar:danger-circle-bold"
                      class="text-red-500"
                    />
                    <p class="text-xs font-medium text-red-500 w-fit">
                      {{ $t("login.input.password.err") }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex gap-3 mt-2">
                <div class="inline-flex items-center">
                  <label class="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      checked
                      class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-accent-500 checked:border-accent-500"
                      id="check"
                    />
                    <span
                      class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <span class="text-sm text-darkGray-900"
                  >I agree to the
                  <span class="text-accent-600 underline"
                    >Terms & Conditions</span
                  ></span
                >
              </div>
              <div class="mt-8">
                <button
                  type="submit"
                  class="w-full py-3 px-6 rounded-lg text-primary-950 bg-accent-500 hover:bg-accent-400 focus:outline-none transition-all text-sm font-medium"
                >
                  {{ $t("signup.input.submit") }}
                </button>
              </div>
            </form>
            <div class="flex items-center px-6 mt-6">
              <div class="flex-1 bg-darkGray-500" style="height: 1px"></div>
              <div class="text-xs text-darkGray-800 mx-6">
                {{ $t("signup.additional.orRegisterWith") }}
              </div>
              <div class="flex-1 bg-darkGray-500" style="height: 1px"></div>
            </div>
            <div class="flex gap-2 justify-center px-4 mt-4">
              <button
                class="h-12 flex-1 flex justify-center items-center rounded-md border border-accent-700 hover:bg-darkGray-100 transition-all"
              >
                <Icon
                  name="carbon:logo-google"
                  size="1.2em"
                  class="text-accent-700"
                />
              </button>
              <button
                class="h-12 flex-1 flex justify-center items-center rounded-md border border-accent-700 hover:bg-darkGray-100 transition-all"
              >
                <Icon
                  name="ic:outline-facebook"
                  size="1.2em"
                  class="text-accent-700"
                />
              </button>
              <button
                class="h-12 flex-1 flex justify-center items-center rounded-md border border-accent-700 hover:bg-darkGray-100 transition-all"
              >
                <Icon name="ri:twitter-x-fill" class="text-accent-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "#imports";
const { t } = useI18n();

const lastname = ref("");
const firstname = ref("");
const firstnameErr = ref(false);
const validateFirstname = () => {
  firstnameErr.value = firstname.value.length < 3;
};
const email = ref("");
const emailErr = ref(false);
const validateEmail = () => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailErr.value = !re.test(email.value);
};
const pass = ref("");
const passErr = ref(false);
const validatePass = () => {
  passErr.value = pass.value.length < 8;
};

const submit = () => {
  validateFirstname();
  validateEmail();
  validatePass();
  if (!emailErr.value && !passErr.value && !firstnameErr.value) {
    closePopup();
  }
};

import { useSignupCompStore } from "#imports";
const signupCompStore = useSignupCompStore();
const signupCardElement = ref<HTMLElement | null>(null);
const closePopup = () => {
  signupCardElement.value?.classList.add("animate__bounceOut");
  setTimeout(() => {
    signupCompStore.toggleSignupVisibility(false);
    window.history.pushState(null, "", "/");
  }, 600);
};

import { useLoginCompStore } from "#imports";
const loginCompStore = useLoginCompStore();
const toLogin = () => {
  closePopup();
  setTimeout(() => {
    window.history.pushState(null, "", "/login");
    loginCompStore.toggleLoginVisibility(true);
  }, 600);
};
</script>
