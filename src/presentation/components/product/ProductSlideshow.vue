<script setup lang="ts">
interface Props {
  images: string[];
  class?: string;
}
import { ref } from 'vue';
import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const props = defineProps<Props>();
const thumbsSwiper = ref<SwiperObject>();

const setThumbsSwiper = (swiper: SwiperObject) => {
  thumbsSwiper.value = swiper;
};
</script>
<template>
  <div :class="props.class">
    <Swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff'
      }"
      :spaceBetween="10"
      navigation
      :autoplay="{
        delay: 2500
      }"
      :thumbs="{
        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
      }"
      :modules="[FreeMode, Navigation, Thumbs, Autoplay]"
      class="mySwiper2"
    >
      <SwiperSlide v-for="image of images" :key="image">
        <img
          :src="`/assets/products/${image}`"
          class="mx-auto my-auto"
          style="width: 400px; height: 400px"
        />
      </SwiperSlide>
    </Swiper>

    <Swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="[FreeMode, Navigation, Thumbs, Autoplay]"
      class="mySwiper"
    >
      <SwiperSlide v-for="image of images" :key="image">
        <img :src="`/assets/products/${image}`" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
/* .swiper-slide {
  
  display: flex;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 900px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 500px;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
