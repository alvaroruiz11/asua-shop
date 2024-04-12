<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { initialState } from '../../seed/seed';
import HorizontalCarousel from '@/presentation/components/products/HorizontalCarousel.vue';

import BecauseList from '@/presentation/components/home/because/BecauseList.vue';
import CustomSection from '@/presentation/components/shared/CustomSection.vue';
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
      <img src="/assets/home.webp" alt="jenner" class="w-full h-full object-cover" />
    </div>
  </div>

  <!-- section about -->
  <CustomSection class="grid grid-cols-1 md:grid-cols-3" background="#fdfcf8">
    <div
      class="col-span-2 flex flex-col items-center md:justify-start gap-7 w-full md:w-3/4 md:mt-32"
    >
      <h1>SOBRE NOSOTROS</h1>
      <p class="text-base md:text-lg text-center">
        ASUA® se erige como la pionera en la producción de aceite de semilla de uva de altura en
        Bolivia. Aspiramos a consolidarnos a nivel nacional como la marca líder de este exclusivo
        aceite, reconocido por su eficacia tanto en el ámbito cosmético como en el consumo
        saludable...
      </p>

      <RouterLink
        to="/nosotros"
        class="rounded-2xl border-2 border-tussock-400 text-tussock-700 px-10 py-1 font-semibold hover:bg-tussock-400 hover:text-white transition-all duration-300"
      >
        Ver más
      </RouterLink>
    </div>
    <div
      class="relative shadow-inner shadow-black/10 rounded-lg bg-red-100 overflow-hidden group h-[450px] md:h-[610px] mt-5 md:mt-0"
    >
      <div
        style="background-image: url('/assets/about-2.webp')"
        class="bg-center bg-cover absolute bottom-0 left-0 top-0 w-full h-full duration-1000 ease-in-out group-hover:scale-110"
      />
    </div>
  </CustomSection>

  <CustomSection>
    <h1 class="text-center">NUESTROS PRODUCTOS</h1>
    <p class="text-center text-xl mt-3">Los auténticos productos del cuidado de la piel de lujo</p>

    <HorizontalCarousel :products="initialState.products" />
  </CustomSection>

  <CustomSection background="#fdfcf8">
    <div class="text-center">
      <p class="font-medium mb-2 inline-flex bg-tussock-100 px-5 py-2 rounded-2xl shadow text-sm">
        ¿Por qué ASUA?
      </p>
      <h1>Asua es un producto natural al cuidado de nuestra naturaleza</h1>
    </div>
    <BecauseList />
  </CustomSection>
</template>
