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
  <input :value="modelValue" type="text" @input="handleInput" />
</template>

<style scoped></style>
