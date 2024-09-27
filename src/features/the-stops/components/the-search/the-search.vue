<script setup lang="ts">
import SearchIcon from "@/assets/icons/search.svg";

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

defineProps<{
  modelValue: string;
}>();

const handleInput = (event: Event) =>
  emit("update:modelValue", (event.target as HTMLInputElement).value);
</script>

<template>
  <label class="position-relative w-25">
    <input
      :value="modelValue"
      class="px-3 w-100 border border-1 border-dark py-2 border-opacity-25 rounded-2"
      type="text"
      @input="handleInput"
    />
    <SearchIcon class="position-absolute top-50 icon" />
  </label>
</template>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
  right: 8px;
  transform: translateY(-50%);
  color: gray;
}
</style>
