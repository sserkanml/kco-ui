<script setup lang="ts">
import TheHeader from './layouts/TheHeader.vue';
import TheMain from './layouts/TheMain.vue';
</script>

<template>
  <div
    class="container flex min-h-screen w-screen max-w-full flex-col gap-5 bg-background-color p-16"
  >
    <TheHeader></TheHeader>
    <TheMain></TheMain>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
.container {
  font-family: 'Indie Flower', cursive;
}
</style>
