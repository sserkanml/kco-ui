<script setup lang="ts">
import TheHeader from './layouts/TheHeader.vue';
import TheMain from './layouts/TheMain.vue';
</script>

<template>
  <div class="container">
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
