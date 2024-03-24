<script setup lang="ts">
import { useRoute } from 'vue-router';
import { initialState } from '../../seed/seed';
import ProductSlideshow from '@/presentation/components/product/ProductSlideshow.vue';
import CustomSeparator from '@/presentation/components/shared/CustomSeparator.vue';
const route = useRoute();
const product = initialState.products.find((product) => product.slug === route.params.slug);
</script>
<template>
  <div class="max-w-[1400px] mx-auto mt-14">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-20">
      <div class="col-span-1">
        <ProductSlideshow class="hidden md:block" :images="product?.images || []" />
      </div>
      <div class="col-span-2">
        <h1>{{ product?.title }}</h1>
        <CustomSeparator width="25%" class="bg-tussock-400" />
        <p class="font-semibold">{{ product?.price }} Bs.</p>
        <p>{{ product?.description }}</p>
        <p>{{ product?.capacity }}</p>
      </div>

      <!-- Details -->
    </div>
  </div>
</template>

<style scoped></style>
