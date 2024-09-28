<script setup lang="ts">
import { STOPS_ROUTE } from "@/constants/router";
import { computed, toRefs } from "vue";
import { convertStringToKebabCase } from "@/utils/convert-string";
import { useRoute } from "vue-router";

const props = defineProps<{
  path: string;
  stop: string;
}>();
const { path } = toRefs(props);

const route = useRoute();
const to = computed(() => ({
  path: `${STOPS_ROUTE}/${convertStringToKebabCase(path.value)}`,
  query: route.query,
}));
</script>

<template>
  <RouterLink
    :to="to"
    class="px-4 py-3 border-bottom border-opacity-50 d-block text-decoration-none"
    exact-active-class="text-primary router-link-exact-active fw-bold"
  >
    <span v-html="stop" />
  </RouterLink>
</template>

<style scoped>
a:not(.router-link-exact-active) {
  color: var(--bs-dark);
}
</style>
