<script setup lang="ts">
import { useStore } from "vuex";
import { TheLineToggle } from "../the-line-toggle";
import { LINES_ROUTE } from "@/constants/router";
import { STORE_KEY } from "@/store";

const store = useStore(STORE_KEY);
</script>

<template>
  <section class="d-flex flex-column gap-2 px-4 py-2 bg-white rounded-2">
    <header class="py-3">
      <h2 class="h6">Select bus line</h2>
    </header>
    <ul class="d-flex flex-wrap gap-2">
      <li v-for="{ name } in store.state.lines" :key="name">
        <TheLineToggle :to="`${LINES_ROUTE}/${name}`" :name="name" />
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
