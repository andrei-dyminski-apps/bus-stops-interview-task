<script setup lang="ts">
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { GET_LINE_GETTER, GET_STOP_GETTER } from "@/constants/store";
import { ThePlaceholder } from "../the-placeholder";
import {
  LINE_PLACEHOLDER,
  STOP_PLACEHOLDER,
} from "@/features/the-lines/constants/placeholders";
import { sortItemsByNameField } from "@/utils/sort-items-by-name";
import { TheSortToggle } from "@/components/the-sort-toggle";
import { STORE_KEY } from "@/store";
import { SortTypes } from "@/types/sorting";

const store = useStore(STORE_KEY);
const route = useRoute();

const lineItem = computed(() =>
  store.getters[GET_LINE_GETTER](route.params.line),
);

const stopItem = computed(() =>
  store.getters[GET_STOP_GETTER](route.params.line, route.params.stop),
);

const placeholderText = computed(() =>
  lineItem.value ? STOP_PLACEHOLDER : LINE_PLACEHOLDER,
);

const sortType = ref(SortTypes.ASC);
const sortedTimes = computed(() =>
  sortItemsByNameField(stopItem.value?.times, sortType.value),
);
</script>

<template>
  <section class="times d-flex flex-column rounded-2 bg-white">
    <template v-if="stopItem">
      <header class="px-4 border-bottom border-opacity-50 py-3">
        <h3 class="py-2 title">Bus stop: {{ stopItem.name }}</h3>
        <h4 class="py-2 d-flex align-items-center subtitle">
          Time <TheSortToggle v-model="sortType" />
        </h4>
      </header>
      <ul class="overflow-auto">
        <li
          v-for="{ name } in sortedTimes"
          :key="name"
          class="px-4 py-3 border-bottom border-opacity-50 d-block"
        >
          {{ name }}
        </li>
      </ul>
    </template>
    <ThePlaceholder v-else :text="placeholderText" />
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
