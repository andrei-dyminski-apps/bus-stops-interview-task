<script setup lang="ts">
import { LINES_ROUTE } from "@/constants/router";
import { computed, toRefs } from "vue";
import { convertStringToKebabCase } from "@/utils/convert-string";
import { type RouteLocationRaw, useRoute } from "vue-router";

const props = defineProps<{
  time: string;
  line: string;
  stop: string;
}>();
const { time, stop, line } = toRefs(props);

const route = useRoute();
const to = computed<RouteLocationRaw>(() => ({
  path: `${LINES_ROUTE}/${line.value}/${convertStringToKebabCase(stop.value)}/${convertStringToKebabCase(time.value)}`,
  query: route.query,
}));
</script>

<template>
  <RouterLink
    :to="to"
    class="px-4 py-3 border-bottom border-opacity-50 d-block text-decoration-none"
    exact-active-class="text-primary router-link-exact-active fw-bold"
  >
    {{ time }}</RouterLink
  >
</template>

<style scoped>
a:not(.router-link-exact-active) {
  color: var(--bs-dark);
}
</style>
