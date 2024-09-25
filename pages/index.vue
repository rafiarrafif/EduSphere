<template>
  <div class="w-full">
    <UiLogin />
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
</script>
