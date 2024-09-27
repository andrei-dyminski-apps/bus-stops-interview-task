<script setup lang="ts">
import { toRefs } from "vue";
import { SortTypes } from "@/types/sorting";

const emit = defineEmits<{
  "update:modelValue": [value: SortTypes];
}>();

const props = defineProps<{
  modelValue: SortTypes;
}>();
const { modelValue } = toRefs(props);

const handleToggle = () => {
  const value = Object.values(SortTypes).find(
    (value) => value !== modelValue.value,
  );
  if (value) emit("update:modelValue", value);
};
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
