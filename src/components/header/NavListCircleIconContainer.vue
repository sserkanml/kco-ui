<script setup lang="ts">
defineProps<{
  icon: string;
}>();
</script>

<template>
  <div
    class="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white shadow-md"
  >
    <span v-html="icon"></span>
  </div>
</template>
