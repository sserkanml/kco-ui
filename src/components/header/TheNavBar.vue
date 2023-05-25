<script setup lang="ts">
import { onMounted } from 'vue';
import { initModals } from 'flowbite';
import SettingModal from './SettingModal.vue';

</script>

<template>
  <nav class="flex gap-10">
    <SettingModal />
  </nav>
</template>
