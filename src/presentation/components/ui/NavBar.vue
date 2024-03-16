<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useUiStore } from '../../stores/ui-store';
import LogoComponent from '../shared/LogoComponent.vue';
const store = useUiStore();
</script>

<template>
  <nav class="bg-white h-24">
    <div
      class="max-w-[1400px] flex flex-wrap items-center justify-between mx-auto h-full px-6 md:px-0"
    >
      <RouterLink to="/" class="flex items-center">
        <LogoComponent class="h-9 md:h-11" />
      </RouterLink>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-cta">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
        >
          <li>
            <RouterLink
              to="/"
              exact-active-class="text-tussock-400"
              class="text-lg block text-gray-700 md:hover:bg-transparent md:hover:text-tussock-400"
              >Inicio</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/nosotros"
              exact-active-class="text-tussock-400"
              class="text-lg block text-gray-700 md:hover:bg-transparent md:hover:text-tussock-400"
              >Sobre Nosotros</RouterLink
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

<style scoped>
nav {
  box-shadow: 0px 20px 34px #0000000d;
}
</style>
