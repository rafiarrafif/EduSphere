<template>
  <div>
    <NuxtLayout :name="layout">
      <div v-if="isLoading">
        <Loading />
      </div>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "#imports";
import { useLangPreference } from "./stores/langPreference";
const { locale } = useI18n();
const langPreference = useLangPreference();
locale.value = langPreference.locale;

const route = useRoute();
const layout = ref<string>();
if (route.path === "/") {
  layout.value = "landing-page";
} else {
  layout.value = "desktop-student";
}

const isLoading = ref(true);
onMounted(() => {
  isLoading.value = false;
});
</script>
