<script setup lang="ts">
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { TheSortToggle } from "@/components/the-sort-toggle";
import { sortItemsByOrderField } from "@/utils/sort-items-by-order";
import { TheSearch, TheStopsList } from "@/features/the-stops/components";
import { STORE_KEY } from "@/store";
import { SortTypes } from "@/types/sorting";
import type { StopItem } from "@/types/store";

const store = useStore(STORE_KEY);
const router = useRouter();

const query = ref(router.currentRoute.value.query.search?.toString() || "");
const filteredStops = computed(
  () =>
    store.state.stops?.filter((stop) =>
      stop.name.toLowerCase().includes(query.value.toLowerCase()),
    ) || [],
);

const sortType = ref(SortTypes.ASC);
const sortedStops = computed(() =>
  sortItemsByOrderField<StopItem>(filteredStops.value, sortType.value),
);
</script>

<template>
  <section class="d-flex flex-column rounded-2 bg-white flex-grow-1">
    <header class="px-4 border-bottom border-opacity-50 py-3">
      <TheSearch v-model="query" />
      <h4 class="py-2 d-flex align-items-center subtitle">
        Bus stops <TheSortToggle v-model="sortType" />
      </h4>
    </header>
    <TheStopsList :items="sortedStops" />
  </section>
</template>

<style scoped>
.subtitle {
  font-size: 0.8rem;
}
</style>
