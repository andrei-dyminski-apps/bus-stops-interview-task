<script setup lang="ts">
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { TheSortToggle } from "@/components/the-sort-toggle";
import { sortItemsByOrderField } from "@/utils/sort-items-by-order";
import { TheSearch, TheStopsList } from "../../components";
import { STORE_KEY } from "@/store";
import { SortTypes } from "@/types/sorting";
import type { StopItem } from "@/types/store";

const store = useStore(STORE_KEY);
const router = useRouter();

const query = ref(router.currentRoute.value.query.search?.toString() ?? "");
watch(query, (value) => router.push({ query: { search: value } }));

const filteredStops = computed(
  () =>
    store.state.stops?.filter((stop) =>
      stop.name.toLowerCase().includes(query.value.toLowerCase()),
    ) ?? [],
);

const sortType = ref(SortTypes.ASC);
const sortedStops = computed(() =>
  sortItemsByOrderField<StopItem>(filteredStops.value, sortType.value),
);
</script>

<template>
  <section class="d-flex flex-column rounded-2 bg-white flex-grow-1">
    <header class="border-bottom border-opacity-50 py-2">
      <div class="px-2">
        <TheSearch v-model="query" />
      </div>
      <h4 class="px-4 py-2 d-flex align-items-center subtitle">
        Bus stops <TheSortToggle v-model="sortType" />
      </h4>
    </header>
    <TheStopsList :items="sortedStops" :query="query" />
  </section>
</template>

<style scoped>
.subtitle {
  font-size: 0.8rem;
}
</style>
