<script setup lang="ts">
import TheDefault from "@/layouts/the-default.vue";
</script>

<template>
  <TheDefault>
    <template #default>
      <RouterView />
    </template>
  </TheDefault>
</template>
