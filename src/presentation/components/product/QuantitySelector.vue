<script setup lang="ts">
import { ref, watch } from 'vue';
interface Props {
  quantity: number;
}

interface Emits {
  (e: 'onQuantityChanged', value: number): void;
}

const emits = defineEmits<Emits>();
defineProps<Props>();
</script>
<template>
  <div class="flex rounded-lg">
    <button class="p-2 text-tussock-700" @click="emits('onQuantityChanged', -1)">
      <i class="fa-solid fa-minus"></i>
    </button>
    <span className="w-20 mx-3 px-5 py-2 text-tussock-700 font-medium text-center bg-tussock-50">
      {{ quantity }}
    </span>
    <button class="p-2 text-tussock-700" @click="emits('onQuantityChanged', +1)">
      <i class="fa-solid fa-plus"></i>
    </button>
  </div>
</template>

<style scoped></style>
