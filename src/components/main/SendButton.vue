<script setup lang="ts">
defineProps<{
  child: string;
}>();
</script>

<template>
  <button
    type="submit"
    class="flex h-16 w-full items-center justify-center rounded-md bg-pink-800 transition-all duration-500 hover:bg-pink-500 sm:w-16"
  >
    <span v-html="child"></span>
  </button>
</template>
