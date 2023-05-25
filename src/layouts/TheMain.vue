<script setup lang="ts">
import SendButton from '../components/main/SendButton.vue';
import CardList from '../components/main/CardList.vue';
import send from '../assets/svg/send.svg?raw';
import AnswerInput from '../components/main/AnswerInput.vue';
</script>

<template>
  <main
    class="flex h-full w-full grow flex-col items-center justify-center gap-6 rounded-lg bg-white shadow-md dark:bg-gray-800"
  >
    <CardList />
    <form
      action=""
      class="flex w-full flex-col gap-4 px-6 sm:w-full sm:flex-row sm:gap-8 sm:px-6 md:w-3/5 md:px-0"
    >
      <AnswerInput></AnswerInput>
      <SendButton :child="send"></SendButton>
    </form>
  </main>
</template>
