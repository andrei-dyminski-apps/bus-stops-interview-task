<script setup lang="ts">
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

defineProps<{
  modelValue: string;
}>();

const handleInput = (event: Event) =>
  emit("update:modelValue", (event.target as HTMLInputElement).value);
</script>

<template>
  <label class="position-relative">
    <input
      :value="modelValue"
      class="px-3 border border-1 border-dark py-2 border-opacity-25 rounded-2"
      type="text"
      @input="handleInput"
    />
    <img src="" alt="" />
  </label>
</template>

<style scoped></style>
