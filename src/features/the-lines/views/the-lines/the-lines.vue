<script setup lang="ts">
import { TheLinesList } from "../../components/the-lines-list";
import { useStore } from "vuex";
import { GET_STOPS_ACTION } from "@/constants/store";

const store = useStore();
store.dispatch(GET_STOPS_ACTION);
</script>

<template>
  <section class="d-flex gap-3 flex-wrap">
    <TheLinesList class="w-100" />
  </section>
</template>

<style scoped></style>
