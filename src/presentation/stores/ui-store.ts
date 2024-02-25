import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', () => {
  const isSidebarOpen = ref<boolean>(false);

  return {
    // State properties
    isSidebarOpen,

    // Actions
    openSidebar: () => (isSidebarOpen.value = true),
    closeSidebar: () => (isSidebarOpen.value = false)
  };
});
