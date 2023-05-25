<script setup lang="ts">
import { Modal } from 'flowbite';
import { onMounted, ref } from 'vue';
import soundFull from '../../assets/svg/sound_full.svg?raw';
import soundMute from '../../assets/svg/sound_mute.svg?raw';
import light from '../../assets/svg/light.svg?raw';
import dark from '../../assets/svg/dark.svg?raw';
import { Howl, Howler } from 'howler';
const isSoundClose = ref(false);
const isDarkMode = ref(false);
const isAudioPlaying = ref(true);
let audio = new Howl({
  src: ['../../assets/sound/selena-gomez-the-heart-wants-what-it-wants.mp3'],
  autoplay: true,
  loop: true,
});
function toggleSound() {
  isSoundClose.value = !isSoundClose.value;
}

function toggleDarkMode() {
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      isDarkMode.value = false;
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      isDarkMode.value = true;
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      isDarkMode.value = false;
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      isDarkMode.value = true;
    }
  }
}

function InitialAudioPlaying() {
  audio.play();
}

function checkInitialThemeMode() {
  if (localStorage.getItem('color-theme') === 'light') {
    isDarkMode.value = true;
  } else {
    isDarkMode.value = false;
  }
}
function InitialModal() {
  const $buttonElement = document.querySelector('#button');
  const $modalElement = document.querySelector('#modal');
  const $closeButton = document.querySelector('#closeButton');

  const modalOptions = {
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
  };

  if ($modalElement) {
    const modal = new Modal($modalElement as HTMLElement, modalOptions);
    $buttonElement?.addEventListener('click', () => modal.toggle());
    $closeButton?.addEventListener('click', () => modal.hide());
  }
}

onMounted(() => {
  InitialModal();
  checkInitialThemeMode();
  InitialAudioPlaying();
});
</script>

<template>
  <button
    type="button"
    id="button"
    data-modal-target="modal"
    data-modal-toggle="modal"
    class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <svg
      aria-hidden="true"
      class="mr-2 h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      ></path>
    </svg>
    Ayarlar
  </button>

  <!-- Main modal -->
  <div
    id="modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0"
  >
    <div class="relative max-h-full w-full max-w-md">
      <!-- Modal content -->
      <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
        <button
          type="button"
          id="closeButton"
          class="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="modal"
        >
          <svg
            aria-hidden="true"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <!-- Modal header -->
        <div class="rounded-t border-b px-6 py-4 dark:border-gray-600">
          <h3 class="text-base font-semibold text-gray-900 dark:text-white lg:text-xl">Ayarlar</h3>
        </div>
        <!-- Modal body -->
        <div class="p-6">
          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
            Oyunun ayarlarını bu sekmeden değiştirebilirsiniz
          </p>
          <ul class="my-4 space-y-3">
            <li
              @click="toggleSound"
              class="group flex cursor-pointer items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
            >
              <span v-if="isSoundClose"><span v-html="soundMute"></span></span>
              <span v-else> <span v-html="soundFull"></span></span>
              <span class="ml-3 flex-1 whitespace-nowrap">Ses</span>
            </li>
            <li
              @click="toggleDarkMode"
              id="theme-toggle"
              class="group flex cursor-pointer items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
            >
              <span v-if="isDarkMode"><span v-html="dark"></span></span>
              <span v-else> <span v-html="light"></span></span>
              <span class="ml-3 flex-1 whitespace-nowrap">Karanlık Mod</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
