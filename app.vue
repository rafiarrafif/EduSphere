<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const layout = ref<string>();
if (route.path === "/") {
  layout.value = "landing-page";
} else {
  layout.value = "desktop-student";
}
console.log(layout.value);
</script>
