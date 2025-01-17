<script setup lang="ts">
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { TheSortToggle } from "@/components/the-sort-toggle";
import { sortItemsByOrderProp } from "@/utils/sort-items-by-order";
import { TheSearch, TheStopsList } from "../../components";
import { STORE_KEY } from "@/store";
import { STOPS_ROUTE } from "@/constants/router";
import { getRouteQuery } from "@/utils/get-route-query";
import { filterStopsByQuery } from "../../utils";
import { SortListNames, SortTypes } from "@/types/sorting";
import type { StopItem } from "@/types/store";

const store = useStore(STORE_KEY);
const router = useRouter();
const route = useRoute();

const query = ref(getRouteQuery(route.query.search));
watch(query, (value) =>
  router.push({ path: STOPS_ROUTE, query: { ...route.query, search: value } }),
);

const filteredStops = computed<StopItem[]>(() =>
  filterStopsByQuery(store.state.stops, query.value),
);

const sortType = ref(SortTypes.ASC);
const sortedStops = computed<StopItem[]>(() =>
  sortItemsByOrderProp<StopItem>(filteredStops.value, sortType.value),
);
</script>

<template>
  <section class="d-flex flex-column rounded-2 bg-white flex-grow-1">
    <header class="border-bottom border-opacity-50 py-2">
      <div class="px-2 d-flex">
        <TheSearch v-model="query" />
      </div>
      <h4 class="px-4 py-2 d-flex align-items-center h6 m-0">
        Bus stops
        <TheSortToggle v-model="sortType" :list-name="SortListNames.STOPS" />
      </h4>
    </header>
    <TheStopsList :items="sortedStops" :query="query" />
  </section>
</template>

<style scoped></style>
