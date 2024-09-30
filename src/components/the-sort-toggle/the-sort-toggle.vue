<script setup lang="ts">
import { onMounted, toRefs, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { isSortType } from "@/predicates/is-sort-type";
import { getRouteQuery } from "@/utils/get-route-query";
import { SortListNames, SortTypes } from "@/types/sorting";

const emit = defineEmits<{
  "update:modelValue": [value: SortTypes];
}>();

const props = defineProps<{
  listName: SortListNames;
  modelValue: SortTypes;
}>();
const { listName, modelValue } = toRefs(props);
const router = useRouter();
const route = useRoute();

const setSortType = (value: SortTypes): void => {
  emit("update:modelValue", value);
  router.push({ query: { ...route.query, [listName.value]: value } });
};

const handleToggle = (): void => {
  const value = Object.values(SortTypes).find(
    (value): boolean => value !== modelValue.value,
  );
  if (value) setSortType(value);
};

const initSortType = (): void => {
  const value = getRouteQuery(route.query[listName.value]);
  if (!value || !isSortType(value)) setSortType(SortTypes.ASC);
  if (value && value !== modelValue.value && isSortType(value))
    setSortType(value);
};

onMounted(initSortType);
watch(route, initSortType);
</script>

<template>
  <button
    class="d-flex flex-column gap-1 py-2 px-2 border-0 bg-transparent"
    type="button"
    @click="handleToggle"
  >
    <span
      v-for="type in SortTypes"
      :key="type"
      class="arrow"
      :class="type === modelValue ? 'text-primary' : 'text-dark opacity-25'"
    />
  </button>
</template>

<style scoped lang="scss">
.arrow {
  &:first-child,
  &:last-child {
    display: block;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }

  &:first-child {
    border-bottom: 6px solid currentColor;
  }

  &:last-child {
    border-top: 6px solid currentColor;
  }
}
</style>
