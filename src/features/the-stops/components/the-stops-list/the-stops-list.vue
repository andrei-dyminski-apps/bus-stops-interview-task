<script setup lang="ts">
import type { StopItem } from "@/types/store";
import { highlightQueryString } from "@/features/the-stops/utils/highlight-query-string";

defineProps<{
  items: StopItem[];
  query: string;
}>();
</script>

<template>
  <ul class="overflow-auto flex-grow-1 list">
    <li
      v-for="{ name } in items"
      :key="name"
      class="px-4 py-3 border-bottom border-opacity-50 d-block text-decoration-none"
      v-html="highlightQueryString(name, query)"
    />
  </ul>
</template>

<style scoped>
.list {
  height: 10px;
}
</style>
