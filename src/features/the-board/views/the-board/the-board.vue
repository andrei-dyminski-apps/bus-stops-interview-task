<script setup lang="ts">
import { TheTabs } from "../../components";
import { STORE_KEY } from "@/store";
import { GET_STOPS_ACTION } from "@/constants/store";
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore(STORE_KEY);
const isLoading = ref(!store.state.stops);
store.dispatch(GET_STOPS_ACTION).finally(() => (isLoading.value = false));
</script>

<template>
  <section
    v-loading:board="isLoading"
    class="d-flex flex-column gap-2 flex-grow-1"
  >
    <TheTabs />
    <RouterView />
  </section>
</template>

<style scoped></style>
