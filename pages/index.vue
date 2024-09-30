<template>
  <div class="w-full">
    <UiLogin v-if="loginCompStore.isLoginVisible" />
    <UiSignup v-if="signupCompStore.isSignupVisible" />
    <PagesLandingpageHero />
    <PagesLandingpageSponsors />
    <PagesLandingpageSelectCourse />
    <PagesLandingpageWhyChooseUs />
    <PagesLandingpageForParent />
    <PagesLandingpageForMentor />
    <PagesLandingpageTestimonials />
    <PagesLandingpageFaq />
    <PagesLandingpageContact />
    <FooterLandingpage />
  </div>
</template>

<script lang="ts" setup>
import { useLoginCompStore } from "#imports";
const loginCompStore = useLoginCompStore();

import { useSignupCompStore } from "#imports";
const signupCompStore = useSignupCompStore();

useHead({
  title: "EduSphere - Learning Environment",
});
</script>
