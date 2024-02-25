<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '../components/ui/NavBar.vue';
import FooTer from '../components/ui/FooTer.vue';
import SideBar from '../components/ui/SideBar.vue';
</script>
<template>
  <NavBar />
  <SideBar />
  <main>
    <RouterView />
  </main>
  <FooTer />
</template>

<style scoped></style>
