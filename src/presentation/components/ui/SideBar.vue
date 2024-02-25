<script setup lang="ts">
import { useUiStore } from '../../stores/ui-store';
const store = useUiStore();
</script>

<template>
  <div>
    <!-- Background black  -->

    <div
      v-if="store.isSidebarOpen"
      class="fixed top-0 left-0 w-screen h-screen z-20 bg-black opacity-30"
    />

    <!-- Blur -->
    <div
      v-if="store.isSidebarOpen"
      @click="store.closeSidebar()"
      class="fixed top-0 left-0 w-screen h-screen z-20 backdrop-filter backdrop-blur-sm animate-fade animate-duration-300"
    />

    <nav
      class="fixed p-5 right-0 top-0 w-[320px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300"
      :class="{ 'translate-x-full': !store.isSidebarOpen }"
    ></nav>
  </div>
</template>

<style scoped></style>
