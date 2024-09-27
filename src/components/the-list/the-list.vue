<script setup lang="ts" generic="T extends LineStop | Time">
import { convertStringToKebabCase } from "@/utils/convert-string";
import { ref, toRefs } from "vue";
import type { LineStop, Time } from "@/types/store";

const props = defineProps<{
  items: T[];
  activeItem?: string;
}>();
const { activeItem } = toRefs(props);

const listRef = ref<HTMLUListElement | null>(null);
const handleMounted = () => {
  const item = listRef.value?.querySelector(
    `[data-name="${activeItem.value}"]`,
  );
  if (item) item.scrollIntoView();
};
</script>

<template>
  <ul
    v-if="items.length"
    ref="listRef"
    class="overflow-auto flex-grow-1 list"
    @vue:mounted="handleMounted"
  >
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
  height: 10px;
}
</style>
