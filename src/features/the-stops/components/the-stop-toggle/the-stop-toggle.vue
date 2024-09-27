<script setup lang="ts">
import { STOPS_ROUTE } from "@/constants/router";
import { toRefs } from "vue";
import { convertStringToKebabCase } from "@/utils/convert-string";

const props = defineProps<{
  stop: string;
}>();
const { stop } = toRefs(props);
const path = `${STOPS_ROUTE}/${convertStringToKebabCase(stop.value)}`;
</script>

<template>
  <RouterLink
    :to="path"
    class="px-4 py-3 border-bottom border-opacity-50 d-block text-decoration-none"
    active-class="text-primary router-link-exact-active"
  >
    <span v-html="stop" />
  </RouterLink>
</template>

<style scoped>
a:not(.router-link-exact-active) {
  color: var(--bs-dark);
}
</style>
