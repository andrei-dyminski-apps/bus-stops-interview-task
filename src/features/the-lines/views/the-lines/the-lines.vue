<script setup lang="ts">
import { TheLinesList } from "../../components";
import { useStore } from "vuex";
import { GET_STOPS_ACTION } from "@/constants/store";
import { TheStops } from "../../components";
import { TheTimes } from "../../components";

const store = useStore();
store.dispatch(GET_STOPS_ACTION);
</script>

<template>
  <section class="d-flex gap-3 flex-wrap">
    <TheLinesList class="w-100" />
    <TheStops class="w-25 flex-grow-1" />
    <TheTimes class="w-25 flex-grow-1" />
  </section>
</template>

<style scoped></style>
