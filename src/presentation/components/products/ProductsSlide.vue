<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProductCard from '@/presentation/components/products/ProductCard.vue';
import type { SeedProduct } from '../../seed/seed';

interface Props {
  products: SeedProduct[];
}
defineProps<Props>();
</script>
<template>
  <Swiper
    :slides-per-view="3"
    :space-between="10"
    class="mySwiper"
    :modules="[Navigation, Pagination]"
    navigation
    :pagination="{ clickable: true }"
  >
    <SwiperSlide v-for="product in products" :key="product.slug">
      <ProductCard :product="product" />
    </SwiperSlide>
  </Swiper>
</template>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 560px;
}

.swiper-pagination-bullet-active {
  background-color: #815027;
}

.swiper-button-prev,
.swiper-button-next {
  color: #374151;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 20px;
}
</style>
