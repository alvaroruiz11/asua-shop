<script setup lang="ts">
interface Props {
  class?: string;
}

const props = defineProps<Props>();
</script>
<template>
  <img src="/assets/logo.svg" :class="props.class" alt="ASUA" />
</template>

<style scoped></style>
