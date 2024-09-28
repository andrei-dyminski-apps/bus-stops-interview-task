<script setup lang="ts">
import SearchIcon from "@/assets/icons/search.svg";
import CloseIcon from "@/assets/icons/close.svg";

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

defineProps<{
  modelValue: string;
}>();

const handleInput = (event: Event) =>
  emit("update:modelValue", (event.target as HTMLInputElement).value);

const handleClear = () => emit("update:modelValue", "");
</script>

<template>
  <label class="position-relative w-25">
    <input
      :value="modelValue"
      class="px-3 w-100 border border-1 border-dark py-2 border-opacity-25 rounded-2"
      type="text"
      @input="handleInput"
    />
    <transition name="fade">
      <button
        v-if="modelValue?.length"
        type="button"
        class="position-absolute top-0 h-100 clear d-flex justify-content-center align-items-center border-0 bg-transparent"
        @click="handleClear"
      >
        <CloseIcon />
      </button>
      <SearchIcon v-else class="position-absolute top-50 icon" />
    </transition>
  </label>
</template>

<style scoped lang="scss">
.icon {
  width: 24px;
  height: 24px;
  right: 8px;
  transform: translateY(-50%);
  color: gray;
}

.clear {
  right: 0;
  width: 42px;
  color: gray;
  transition-duration: 300ms;

  &:hover {
    color: #000;
  }

  svg {
    width: 20px;
    height: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
