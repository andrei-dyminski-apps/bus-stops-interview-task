<script setup lang="ts">
import { TheHeader } from "../../components";
</script>

<template>
  <section class="d-flex flex-column gap-2 flex-grow-1">
    <TheHeader />
    <div class="flex-grow-1 flex-column d-flex">
      <slot />
    </div>
  </section>
</template>

<style scoped></style>
