<script setup lang="ts">
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { GET_LINE_GETTER } from "@/constants/store";
import { ThePlaceholder } from "../the-placeholder";
import { TheStopToggle } from "../the-stop-toggle";
import { LINE_PLACEHOLDER } from "../../constants";
import { TheSortToggle } from "@/components/the-sort-toggle";
import { sortItemsByOrderField } from "@/utils/sort-items-by-order";
import { STORE_KEY } from "@/store";
import { TheList } from "@/components/the-list";
import { SortTypes } from "@/types/sorting";

const store = useStore(STORE_KEY);
const route = useRoute();

const lineItem = computed(() =>
  store.getters[GET_LINE_GETTER](route.params.line),
);

const sortType = ref(SortTypes.ASC);
const sortedStops = computed(() =>
  sortItemsByOrderField(lineItem.value?.stops, sortType.value),
);
</script>

<template>
  <section class="d-flex flex-column rounded-2 bg-white">
    <template v-if="lineItem">
      <header class="px-4 border-bottom border-opacity-50 py-3">
        <h2 class="py-2 h6">Bus line: {{ lineItem.name }}</h2>
        <h3 class="py-2 d-flex align-items-center h6 m-0">
          Bus stops <TheSortToggle v-model="sortType" />
        </h3>
      </header>
      <TheList
        :items="sortedStops"
        :active-item="route.params.stop?.toString()"
      >
        <template #item="{ item: { name } }">
          <TheStopToggle :stop="name" :line="lineItem.name" />
        </template>
      </TheList>
    </template>
    <ThePlaceholder v-else :text="LINE_PLACEHOLDER" />
  </section>
</template>

<style scoped></style>
