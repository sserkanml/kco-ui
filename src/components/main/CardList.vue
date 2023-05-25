<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCards } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import soundFull from '../../assets/svg/sound_full.svg?raw';

import 'swiper/css/effect-cards';

// import required modules
let modules = [EffectCards];
</script>
<template>
  <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
    <swiper-slide>
      <div class="flex justify-between">
        <div
          class="containerSound flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-red-600"
        >
          <span v-html="soundFull"></span>
        </div>
      </div>
      <p>Comments anlamı?</p>
      <div class="bottomSideCard flex flex-col gap-6">
        <p class="text-gray-400">Yaygın Anlamları</p>
        <p class="text-xl text-white">anlamları kısmı</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex justify-between">
        <div
          class="containerSound flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-red-600"
        >
          <span v-html="soundFull"></span>
        </div>
      </div>
      <p>Comments anlamı?</p>
      <div class="bottomSideCard flex flex-col gap-6">
        <p class="text-gray-400">Yaygın Anlamları</p>
        <p class="text-xl text-white">anlamları kısmı</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex justify-between">
        <div
          class="containerSound flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-red-600"
        >
          <span v-html="soundFull"></span>
        </div>
      </div>
      <p>Comments anlamı?</p>
      <div class="bottomSideCard flex flex-col gap-6">
        <p class="text-gray-400">Yaygın Anlamları</p>
        <p class="text-xl text-white">anlamları kısmı</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex justify-between">
        <div
          class="containerSound flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-red-600"
        >
          <span v-html="soundFull"></span>
        </div>
      </div>
      <p>Comments anlamı?</p>
      <div class="bottomSideCard flex flex-col gap-6">
        <p class="text-gray-400">Yaygın Anlamları</p>
        <p class="text-xl text-white">anlamları kısmı</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  width: 320px;
  height: 520px;
}

@media screen and (max-width: 998px) {
  .swiper {
    width: 250px;
    height: 370px;
  }
  @media screen and (max-width: 600px) {
    .swiper {
      width: 220px;
      height: 320px;
    }
  }
}

.swiper-slide {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
</style>
