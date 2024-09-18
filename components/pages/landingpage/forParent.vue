<template>
  <div class="w-full mt-24">
    <div class="flex justify-center -ml-6 items-stretch">
      <div class="bg-accent-500 h-full w-128 pt-10 pb-8 rounded-3xl -mr-6 z-10">
        <div class="ml-10 mr-24 mt-4 flex flex-col gap-4">
          <h1 class="text-primary-950 font-semibold text-2xl">
            Looking for the Best for Your Child?
          </h1>
          <p class="font-medium text-darkGray-950">
            As a parent, you want to ensure your child receives the best
            education possible. With detailed progress reports—including grades,
            study time, and areas for improvement—you can actively support and
            guide them along the way. Together, ensure they stay on the right
            path to achieve the success they aspire to.
          </p>
        </div>
        <div class="flex justify-between pr-12 mt-12">
          <div></div>
          <nuxt-link to="">
            <button
              class="bg-darkGray-950 group flex py-3 px-8 gap-4 items-center rounded-xl"
            >
              <span class="text-accent-500 group-hover:opacity-90"
                >Sign as a Parent</span
              >
              <div
                class="rounded-full flex h-fit w-fit bg-accent-500 p-2 group-hover:opacity-90"
              >
                <Icon name="ph:arrow-right-bold" size="1.2em" />
              </div>
            </button>
          </nuxt-link>
        </div>
      </div>
      <div>
        <PagesLandingpageForParentDescription />
      </div>
    </div>
  </div>
</template>
