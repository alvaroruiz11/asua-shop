<script setup lang="ts">
interface Props {
  selectedSize: string;
  availableSizes: string[];
}

interface Emits {
  (e: 'onSizeChanged', size: string): void;
}

defineProps<Props>();
const emits = defineEmits<Emits>();
</script>
<template>
  <div class="my-5">
    <h3 class="text-tussock-700 font-bold mb-3">Cantidades</h3>
    <div class="flex">
      <button
        v-for="size of availableSizes"
        :key="size"
        @click="emits('onSizeChanged', size)"
        class="py-2 px-4 border border-tussock-500 rounded-lg mx-2 transition-all duration-200"
        :class="`${selectedSize === size ? 'bg-tussock-500 text-white border-tussock-500' : ''}`"
      >
        {{ size }}
      </button>
    </div>
  </div>
</template>

<style scoped></style>
