<template>
  <div class="flex w-full justify-center mt-16 gap-36 max-sm:mt-10">
    <div
      class="flex w-186 gap-32 mx-8 max-2xl:gap-20 max-lg:flex-col-reverse max-sm:mx-4 max-lg:gap-2"
    >
      <div
        class="h-full mt-10 relative w-100 max-2xl:w-96 max-xl:w-80 max-lg:w-full max-lg:flex max-lg:justify-center"
      >
        <img
          src="/assets/faq.png"
          class="absolute w-full h-fit bottom-0 max-lg:static max-lg:w-64"
          draggable="false"
        />
      </div>
      <div class="flex-1 mt-10">
        <div id="header" class="flex flex-col gap-1 max-sm:mx-2">
          <h1 class="text-4xl font-semibold text-primary-950 max-md:text-2xl">
            Frequently Asked Questions
          </h1>
          <p class="text-medium text-primary-900 max-md:text-sm">
            Find answers to the most common questions about our platform and
            courses
          </p>
        </div>
        <div id="content" class="flex flex-col gap-4 w-full mt-10 max-sm:mt-6">
          <div v-for="(question, index) in questions" :key="index">
            <PagesLandingpageFaqContent
              :question="question.question"
              :answer="question.answer"
              :isOpen="index === openQuestion"
              @toggle="toggle(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import questions from "~/data/faq.json";

const openQuestion = ref<number | null>(null);
const toggle = (index: number) => {
  openQuestion.value = openQuestion.value === index ? null : index;
};
</script>
