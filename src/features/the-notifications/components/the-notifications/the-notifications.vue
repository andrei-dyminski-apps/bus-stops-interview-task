<script setup lang="ts">
import { TheNotification } from "../the-notification";
import { useNotifications } from "../../composables";

const { notifications, removeNotification } = useNotifications();
</script>

<template>
  <ul class="d-flex gap-1 flex-column position-fixed notifications w-100">
    <transition-group name="slide-to-left">
      <li
        v-for="{ id, type, title, description } in notifications"
        :key="id"
        class=""
      >
        <TheNotification
          :type="type"
          :title="title"
          :description="description"
          @remove-notification="removeNotification(id)"
        />
      </li>
    </transition-group>
  </ul>
</template>

<style scoped>
.notifications {
  max-width: 500px;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.slide-to-left-enter-from,
.slide-to-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-to-left-enter-active,
.slide-to-left-leave-active {
  transition: all 0.5s ease;
}

.slide-to-left-enter-to,
.slide-to-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
