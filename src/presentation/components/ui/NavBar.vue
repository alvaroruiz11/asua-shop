<script setup lang="ts">
import { useUiStore } from '../../stores/ui-store';
const store = useUiStore();
</script>

<template>
  <nav class="bg-white h-24">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-full">
      <RouterLink to="/" class="flex items-center">
        <img src="/assets/logo.svg" class="pl-6 h-9 md:h-11" alt="ASUA" />
      </RouterLink>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-cta">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
        >
          <li>
            <a
              href="#"
              class="text-lg block text-gray-700 md:hover:bg-transparent md:hover:text-tussock-400"
              >Inicio</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-lg block text-gray-700 md:hover:bg-transparent md:hover:text-tussock-400"
              >Nosotros</a
            >
          </li>
        </ul>
      </div>
      <div class="">
        <button @click="store.openSidebar()">
          <svg
            class="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <!-- ButtonSearch -->
        <!-- Cart (carrito) -->
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
