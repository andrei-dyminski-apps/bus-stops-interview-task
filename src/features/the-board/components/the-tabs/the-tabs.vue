<script setup lang="ts">
import { TheTab } from "../the-tab";
</script>

<template>
  <ul class="d-flex px-3 gap-3 list-group-horizontal bg-white">
    <li>
      <TheTab to="/lines" name="Bus Lines" />
    </li>
    <li>
      <TheTab to="/stops" name="Stops" />
    </li>
  </ul>
</template>

<style scoped></style>
