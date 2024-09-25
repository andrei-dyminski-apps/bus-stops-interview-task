<script setup lang="ts">
import { TheTabs } from "../../components";
import { useRouter } from "vue-router";
import { LINES_ROUTE } from "@/constants/router";

const router = useRouter();
if (router.currentRoute.value.path === "/") router.push(LINES_ROUTE);
</script>

<template>
  <section class="d-flex flex-column gap-2 flex-grow-1">
    <TheTabs />
    <RouterView />
  </section>
</template>

<style scoped></style>
