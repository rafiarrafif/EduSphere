<template>
  <div
    class="fixed h-screen w-screen bg-black bg-opacity-40 z-[9999] flex justify-center items-center"
  >
    <div
      class="relative h-128 w-96 bg-primary-50 overflow-hidden rounded-lg drop-shadow-md"
    >
      <div class="mt-16">
        <div class="flex flex-col gap-0.5">
          <h1 class="text-3xl font-bold text-center">Welcome Back</h1>
          <h1 class="text-xs font-medium text-center text-darkGray-950">
            Please sign in or register a new account
          </h1>
        </div>
        <div class="mt-6">
          <form class="flex flex-col px-8 gap-2">
            <input
              type="email"
              placeholder="Email"
              required
              class="flex-1 py-2 px-4 rounded-lg outline-transparent placeholder:text-sm placeholder-darkGray-400 focus:outline-secondary-500 border border-darkGray-300 transition-all"
            />
            <input
              type="email"
              placeholder="Password"
              required
              class="flex-1 py-2 px-4 rounded-lg outline-transparent placeholder:text-sm placeholder-darkGray-400 focus:outline-secondary-500 border border-darkGray-300 transition-all"
            />
          </form>
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

<script lang="ts" setup></script>
