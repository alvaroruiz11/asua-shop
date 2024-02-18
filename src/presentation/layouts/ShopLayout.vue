<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '../components/ui/NavBar.vue';
import FooTer from '../components/ui/FooTer.vue';
</script>
<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <FooTer />
</template>

<style scoped></style>
