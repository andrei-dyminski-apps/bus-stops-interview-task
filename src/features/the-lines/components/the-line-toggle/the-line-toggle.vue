<script setup lang="ts">
defineProps<{
  to: string;
  name: string;
}>();
</script>

<template>
  <RouterLink :to="to" class="btn btn-primary" exact-active-class="btn-dark">{{
    name
  }}</RouterLink>
</template>

<style scoped></style>
