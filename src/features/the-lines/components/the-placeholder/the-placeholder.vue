<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div
    class="d-flex justify-content-center align-items-center wrapper rounded-2 flex-grow-1 text-center px-3 py-3"
  >
    <p class="text-black-50">{{ text }}</p>
  </div>
</template>

<style scoped>
.wrapper {
  border-style: solid;
  border-width: 1px;
  border-image: repeating-conic-gradient(black 0deg 4deg, transparent 4deg 8deg)
    12;
}
</style>
