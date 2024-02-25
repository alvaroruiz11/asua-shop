<script setup lang="ts">
import ProductsSlide from '@/presentation/components/products/ProductsSlide.vue';
import { initialState } from '../../seed/seed';
</script>

<template>
  <!-- section hero -->
  <div class="bg-red-100 w-full h-[50vh] md:h-[90vh] relative">
    <div
      class="absolute inset-0 h-full justify-center z-10 m-auto flex flex-col items-center w-full"
    >
      <section
        class="absolute z-10 animate-fade-up flex justify-center items-center gap-8 flex-col"
      >
        <h1 class="flex items-center gap-5 text-4xl md:text-6xl lg:gap-20 lg:text-8xl text-white">
          <span>A</span>
          <span>S</span>
          <span>U</span>
          <span>A</span>
        </h1>
      </section>
      <img
        src="https://kyliecosmetics.com/cdn/shop/files/020724_Lip-Butter_Site-Assets_Desktop_Kylie_REV-1.jpg?crop=center&height=1616&v=1707159051&width=2880"
        alt="jenner"
        class="w-full h-full object-cover"
      />
    </div>
  </div>

  <!-- section about -->
  <section class="grid grid-cols-1 md:grid-cols-2 max-w-[1400px] mx-auto p-6 md:p-12 lg:p-16">
    <div
      class="flex flex-col items-center text-center md:justify-start gap-7 w-full md:w-3/4 md:mt-32"
    >
      <h1>SOBRE NOSOTROS</h1>
      <p class="text-base md:text-xl">
        Explora el origen de ASUA para descubrir su misión, visión y valores fundamentales...
      </p>
      <button
        class="w-2/3 text-tussock-700 border border-tussock-700 rounded-sm text-lg font-medium p-2 hover:bg-tussock-600 hover:text-white hover:border-tussock-500 transition-all duration-300"
      >
        VER MAS
      </button>
    </div>
    <div
      class="relative shadow-inner shadow-black/10 rounded-lg bg-red-100 overflow-hidden group h-[450px] md:h-[610px] mt-5 md:mt-0"
    >
      <div
        style="background-image: url('/assets/about-2.webp')"
        class="bg-center bg-cover absolute bottom-0 left-0 top-0 w-full h-full duration-1000 ease-in-out group-hover:scale-110"
      />
    </div>
  </section>

  <div class="max-w-[100vw] bg-gray-600 p-6 md:p-12 lg:p-16" style="background-color: #fdfcf8">
    <section class="max-w-[1400px] mx-auto">
      <h1 class="text-center">NUESTROS PRODUCTOS</h1>
      <p class="text-center text-xl mt-3">
        Los auténticos productos del cuidado de la piel de lujo
      </p>

      <ProductsSlide :products="initialState.products" />
    </section>
  </div>
</template>

<style scoped>
h1 {
  @apply text-tussock-800 font-bold md:text-4xl text-3xl;
}
p {
  @apply text-tussock-800;
}
</style>
