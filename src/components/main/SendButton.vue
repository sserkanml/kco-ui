<script setup lang="ts">
defineProps<{
  child: string;
}>();
</script>

<template>
  <button
    type="submit"
    class="flex h-16 w-16 items-center justify-center rounded-md bg-pink-800 transition-all duration-500 hover:bg-pink-500"
  >
    <span v-html="child"></span>
  </button>
</template>
