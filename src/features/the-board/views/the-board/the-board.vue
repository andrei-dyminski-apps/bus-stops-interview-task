<script setup lang="ts">
import { TheHeader, TheTabs } from "../../components";
</script>

<template>
  <section class="d-flex flex-column gap-2">
    <TheHeader />
    <TheTabs />
    <RouterView />
  </section>
</template>

<style scoped></style>
