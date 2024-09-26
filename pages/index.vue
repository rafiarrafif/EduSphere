<template>
  <div class="w-full">
    <UiLogin v-if="loginCompStore.isLoginVisible" />
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

useHead({
  title: "EduSphere - Learning Environment",
});
</script>
