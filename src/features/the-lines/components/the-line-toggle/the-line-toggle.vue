<script setup lang="ts">
defineProps<{
  to: string;
  name: number;
}>();
</script>

<template>
  <RouterLink :to="to" class="btn btn-primary" active-class="btn-dark">{{
    name
  }}</RouterLink>
</template>

<style scoped></style>
