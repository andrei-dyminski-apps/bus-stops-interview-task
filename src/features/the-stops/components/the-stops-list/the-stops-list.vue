<script setup lang="ts">
import type { StopItem } from "@/types/store";

defineProps<{
  items: StopItem[];
}>();
</script>

<template>
  <ul class="overflow-auto flex-grow-1">
    <li
      v-for="{ name } in items"
      :key="name"
      class="px-4 py-3 border-bottom border-opacity-50 d-block text-decoration-none"
    >
      {{ name }}
    </li>
  </ul>
</template>

<style scoped></style>
