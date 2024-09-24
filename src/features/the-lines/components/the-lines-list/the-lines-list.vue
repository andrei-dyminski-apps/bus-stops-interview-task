<script setup lang="ts">
import { useStore } from "vuex";
import { TheLineToggle } from "../the-line-toggle";
import { LINES_ROUTE } from "@/constants/router";

const store = useStore();
</script>

<template>
  <section class="d-flex flex-column gap-3 px-3 py-3 bg-white">
    <header class="py-3">
      <h2>Select bus line</h2>
    </header>
    <ul class="d-flex flex-wrap gap-2">
      <li v-for="{ line } in store.state.lines" :key="line">
        <TheLineToggle :to="`${LINES_ROUTE}/${line}`" :name="line" />
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
