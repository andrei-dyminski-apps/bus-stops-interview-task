<script setup lang="ts">
import { highlightQueryString } from "../../utils";
import { TheList } from "@/components/the-list";
import { TheStopToggle } from "../the-stop-toggle";
import { useRoute } from "vue-router";
import type { StopItem } from "@/types/store";

defineProps<{
  items: StopItem[];
  query: string;
}>();

const route = useRoute();
</script>

<template>
  <TheList :items="items" :active-item="route.params.stop?.toString()">
    <template #item="{ item: { name } }">
      <TheStopToggle :stop="highlightQueryString(name, query)" />
    </template>
  </TheList>
</template>

<style scoped>
.list {
  height: 10px;
}
</style>
