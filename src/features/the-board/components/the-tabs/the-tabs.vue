<script setup lang="ts">
import { TheTab } from "../the-tab";
import { LINES_ROUTE, STOPS_ROUTE } from "@/constants/router";
</script>

<template>
  <ul
    class="d-flex px-4 gap-3 list-group-horizontal bg-white rounded-2 list-unstyled"
  >
    <li>
      <TheTab :to="LINES_ROUTE" name="Bus Lines" />
    </li>
    <li>
      <TheTab :to="STOPS_ROUTE" name="Stops" />
    </li>
  </ul>
</template>

<style scoped></style>
