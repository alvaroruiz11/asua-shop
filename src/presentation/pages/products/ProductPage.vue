<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

import { initialState } from '../../seed/seed';
import ProductSlideshow from '@/presentation/components/product/ProductSlideshow.vue';
import CustomSeparator from '@/presentation/components/shared/CustomSeparator.vue';
import QuantitySelector from '@/presentation/components/product/QuantitySelector.vue';
import SizeSelector from '@/presentation/components/product/SizeSelector.vue';
import ProductMobileSlideshow from '@/presentation/components/product/ProductMobileSlideshow.vue';
import HorizontalCarousel from '@/presentation/components/products/HorizontalCarousel.vue';

const route = useRoute();
const slug = computed<string>(() => route.params.slug as string);
const product = computed(() =>
  initialState.products.find((product) => product.slug === slug.value)
);
const differentProducts = computed(() =>
  initialState.products.filter((product) => product.slug !== slug.value)
);
const quantity = ref<number>(1);
const size = ref<string>('');
const onSizeChanged = (selectSize: string) => {
  size.value = selectSize;
};

const onQuantityChanged = (value: number) => {
  if (quantity.value + value < 1) return;

  quantity.value += value;
};

const onBuyProduct = () => {
  console.log({ quantity: quantity.value, selectedSize: size.value });
};

watch(
  slug,
  () => {
    quantity.value = 1;
  },
  { immediate: true }
);
</script>
<template>
  <div v-if="product" class="max-w-[1400px] mx-auto mt-10">
    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-20">
      <div class="col-span-1">
        <ProductSlideshow class="hidden md:block" :images="product.images || []" />
        <ProductMobileSlideshow class="block md:hidden" :images="product.images || []" />
      </div>
      <div class="col-span-2 px-4 mt-10 md:px-12">
        <h1>{{ product.title }}</h1>
        <CustomSeparator width="25%" class="bg-tussock-400" />
        <p class="font-bold">{{ product.price }} Bs.</p>
        <p class="mt-3">{{ product.description }}</p>

        <SizeSelector
          v-if="product.sizes"
          :available-sizes="product.sizes"
          :selected-size="size"
          @on-size-changed="onSizeChanged"
        />

        <div class="flex justify-between gap-4 items-center my-5">
          <QuantitySelector :quantity="quantity" @on-quantity-changed="onQuantityChanged" />

          <a
            class="cursor-pointer uppercase w-[80%] text-center mt-2 block rounded-2xl bg-tussock-500 text-white border-2 border-tussock-500 px-10 py-2 font-semibold hover:text-tussock-700 hover:bg-white transition-all duration-300"
            @click="onBuyProduct()"
          >
            Comprar
          </a>
        </div>
      </div>

      <!-- Details -->
    </div>
    <HorizontalCarousel :products="differentProducts ?? []" />
    <div class="h-[100px]" />
  </div>
</template>

<style scoped></style>
