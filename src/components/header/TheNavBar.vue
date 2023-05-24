<script setup lang="ts">
import NavListCircleIconContainer from './NavListCircleIconContainer.vue';
import Setting from '../../assets/svg/setting.svg?raw';
</script>

<template>
  <nav class="flex gap-10">
    <NavListCircleIconContainer :icon="Setting"> </NavListCircleIconContainer>
  </nav>
</template>
