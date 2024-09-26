<script setup lang="ts">
import { TheLinesList, TheStops, TheTimes } from "../../components";
</script>

<template>
  <section class="d-flex gap-3 flex-column flex-grow-1">
    <TheLinesList class="w-100" />
    <div class="d-flex gap-3 flex-grow-1">
      <TheStops class="w-25 flex-grow-1" />
      <TheTimes class="w-25 flex-grow-1" />
    </div>
  </section>
</template>

<style scoped></style>
