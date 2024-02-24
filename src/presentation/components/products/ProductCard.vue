<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { SeedProduct } from '../../seed/seed';
interface Props {
  product: SeedProduct;
}
defineProps<Props>();
</script>
<template>
  <div class="overflow-hidden">
    <RouterLink :to="`/productos/${product.slug}`">
      <img
        :src="`/assets/products/${product.images[0]}`"
        :alt="product.title"
        width="310"
        height="310"
        class="mx-auto object-cover"
      />
    </RouterLink>
    <RouterLink :to="`/productos/${product.slug}`">
      <div class="mt-5 flex justify-center flex-col items-center gap-2">
        <p class="text-tussock-800 text-lg font-medium uppercase max-w-60 block">
          {{ product.title }}
        </p>
        <div class="h-[1px] bg-gray-400 w-[15%] rounded my-3" />
        <p class="text-tussock-700 font-medium">{{ product.price }} BS.</p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped></style>
