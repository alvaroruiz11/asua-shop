import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', () => {
  const count = ref<number>(0);

  return {
    // State propeties
    count,

    // Getters
    squareCount: computed(() => count.value * count.value)

    // Actions
  };
});
