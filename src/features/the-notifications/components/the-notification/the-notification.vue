<script setup lang="ts">
import CloseIcon from "@/assets/icons/close.svg";
import { NotificationItem, NotificationType } from "../../types";

const emit = defineEmits<{
  removeNotification: [value: void];
}>();

defineProps<NotificationItem>();
</script>

<template>
  <section
    class="d-flex gap-4 align-items-start rounded-2 bg-white px-4 py-4 border border-1 justify-content-between"
  >
    <div class="d-flex flex-column gap-2">
      <h3
        class="title"
        :class="{
          'text-warning': type === NotificationType.WARNING,
          'table-success': type === NotificationType.SUCCESS,
          'text-info': type === NotificationType.INFO,
          'text-danger': type === NotificationType.ERROR,
        }"
      >
        {{ title }}
      </h3>
      <p v-if="description" class="p-0 m-0">{{ description }}</p>
    </div>
    <button
      class="px-3 py-3 bg-transparent close d-flex border-0"
      type="button"
      @click="emit('removeNotification')"
    >
      <CloseIcon class="icon" />
    </button>
  </section>
</template>

<style scoped lang="scss">
.title {
  font-size: 1.25rem;
}

.close {
  margin-top: -12px;
  margin-right: -16px;

  &:hover {
    opacity: 0.7;
  }

  .icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
