<script setup lang="ts">
import { highlightQueryString } from "../../utils";
import { TheList } from "@/components/the-list";
import { TheStopToggle } from "../the-stop-toggle";
import { useRoute } from "vue-router";
import { getRouteParam } from "@/utils/get-route-param";
import type { StopItem } from "@/types/store";

defineProps<{
  items: StopItem[];
  query: string | null;
}>();

const route = useRoute();
</script>

<template>
  <TheList :items="items" :active-item="getRouteParam(route.params.stop)">
    <template #item="{ item: { name } }">
      <TheStopToggle :path="name" :stop="highlightQueryString(name, query)" />
    </template>
  </TheList>
</template>

<style scoped></style>
