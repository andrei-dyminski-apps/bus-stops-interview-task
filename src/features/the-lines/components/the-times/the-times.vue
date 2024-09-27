<script setup lang="ts">
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { GET_LINE_GETTER, GET_STOP_GETTER } from "@/constants/store";
import { ThePlaceholder } from "../the-placeholder";
import { LINE_PLACEHOLDER, STOP_PLACEHOLDER } from "../../constants";
import { sortItemsByNameField } from "@/utils/sort-items-by-name";
import { TheSortToggle } from "@/components/the-sort-toggle";
import { STORE_KEY } from "@/store";
import { TheList } from "@/components/the-list";
import { TheTimeToggle } from "../the-time-toggle";
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
  <section class="d-flex flex-column rounded-2 bg-white">
    <template v-if="stopItem">
      <header class="px-4 border-bottom border-opacity-50 py-3">
        <h2 class="py-2 h6">Bus stop: {{ stopItem.name }}</h2>
        <h3 class="py-2 d-flex align-items-center subtitle">
          Time <TheSortToggle v-model="sortType" />
        </h3>
      </header>
      <TheList
        :items="sortedTimes"
        :active-item="route.params.time?.toString()"
      >
        <template #item="{ item: { name } }">
          <TheTimeToggle
            :time="name"
            :line="lineItem.name"
            :stop="stopItem.name"
          />
        </template>
      </TheList>
    </template>
    <ThePlaceholder v-else :text="placeholderText" />
  </section>
</template>

<style scoped>
.subtitle {
  font-size: 0.8rem;
}

.list {
  height: 10px;
}
</style>
