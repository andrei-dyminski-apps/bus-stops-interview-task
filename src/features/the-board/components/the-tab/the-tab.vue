<script setup lang="ts">
defineProps<{
  to: string;
  name: string;
}>();
</script>

<template>
  <RouterLink
    :to="to"
    class="py-3 px-3 d-block text-decoration-none text-black"
    active-class="border-primary border-bottom border-2 router-link-active"
    >{{ name }}</RouterLink
  >
</template>

<style scoped>
a:not(.router-link-active) {
  opacity: 0.5;
}
</style>
