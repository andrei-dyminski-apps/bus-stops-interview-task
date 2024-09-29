<script setup lang="ts" generic="T extends LineStop | Time">
import { convertStringToKebabCase } from "@/utils/convert-string";
import { nextTick, ref, toRefs, watch } from "vue";
import type { LineStop, Time } from "@/types/store";

const props = defineProps<{
  items: T[];
  activeItem?: string;
}>();
const { items, activeItem } = toRefs(props);

const listRef = ref<HTMLUListElement | null>(null);
const scrollToActive = () => {
  nextTick(() => {
    const item = listRef.value?.querySelector(
      `[data-name="${activeItem.value}"]`,
    );
    if (item) item.scrollIntoView();
    else listRef.value?.scrollTo(0, 0);
  });
};
watch(items, scrollToActive, { immediate: true });
</script>

<template>
  <ul ref="listRef" class="overflow-auto flex-lg-grow-1 list list-unstyled">
    <li
      v-for="item in items"
      :key="item.name"
      :data-name="convertStringToKebabCase(item.name)"
    >
      <slot name="item" :item="item" />
    </li>
  </ul>
</template>

<style scoped>
.list {
  height: 300px;
}

@media (max-width: var(--bs-breakpoint-lg)) {
  .list {
    height: 10px;
  }
}
</style>
