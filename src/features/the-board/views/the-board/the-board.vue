<script setup lang="ts">
import { TheTabs } from "../../components";
import { useRouter } from "vue-router";
import { LINES_ROUTE } from "@/constants/router";
import { STORE_KEY } from "@/store";
import { GET_STOPS_ACTION } from "@/constants/store";
import { useStore } from "vuex";

const router = useRouter();
if (router.currentRoute.value.path === "/") router.push(LINES_ROUTE);

const store = useStore(STORE_KEY);
store.dispatch(GET_STOPS_ACTION);
</script>

<template>
  <section class="d-flex flex-column gap-2 flex-grow-1">
    <TheTabs />
    <RouterView />
  </section>
</template>

<style scoped></style>
