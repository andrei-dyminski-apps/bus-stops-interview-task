<script setup lang="ts">
import { TheLinesList, TheStops, TheTimes } from "../../components";
</script>

<template>
  <section class="d-flex gap-3 flex-column flex-grow-1">
    <TheLinesList class="w-100" />
    <div class="d-flex gap-3 flex-grow-1 flex-lg-nowrap flex-wrap">
      <TheStops class="w-100" />
      <TheTimes class="w-100" />
    </div>
  </section>
</template>

<style scoped></style>
