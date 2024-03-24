<script setup lang="ts">
interface Props {
  height?: string;
  class?: string;
  width?: string;
}

const props = withDefaults(defineProps<Props>(), {
  height: '2px',
  width: '80%'
});
</script>
<template>
  <div class="bg-gray-400 my-6" :class="props.class" :style="{ height, width }" />
</template>

<style scoped></style>
