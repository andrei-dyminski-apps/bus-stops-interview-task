<script setup lang="ts">
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { GET_LINE_GETTER } from "@/constants/store";
import { ThePlaceholder } from "../the-placeholder";
import { TheStopToggle } from "../the-stop-toggle";
import { LINE_PLACEHOLDER } from "@/features/the-lines/constants/placeholders";
import { TheSortToggle } from "@/components/the-sort-toggle";
import { sortItemsByOrderField } from "@/utils/sort-items-by-order";
import { STORE_KEY } from "@/store";
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
  <section class="times d-flex flex-column rounded-2 bg-white">
    <template v-if="lineItem">
      <header class="px-4 border-bottom border-opacity-50 py-3">
        <h3 class="py-2 title">Bus line: {{ lineItem.name }}</h3>
        <h4 class="py-2 d-flex align-items-center subtitle">
          Bus stops <TheSortToggle v-model="sortType" />
        </h4>
      </header>
      <ul class="overflow-auto">
        <li v-for="{ name } in sortedStops" :key="name">
          <TheStopToggle :stop="name" :line="lineItem.name" />
        </li>
      </ul>
    </template>
    <ThePlaceholder v-else :text="LINE_PLACEHOLDER" />
  </section>
</template>

<style scoped>
.times {
  height: 50vh;
}

.title {
  font-size: 1rem;
}

.subtitle {
  font-size: 0.8rem;
}
</style>
