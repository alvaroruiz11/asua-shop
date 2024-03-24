<script setup lang="ts">
interface Props {
  class?: string;
  background?: string;
}

const props = withDefaults(defineProps<Props>(), {
  background: '#fff'
});
</script>
<template>
  <div
    :class="`max-w-[100vw] px-6 py-14 md:px-12 md:py-20 lg:px-16 lg:py-24`"
    :style="{ backgroundColor: props.background }"
  >
    <section class="max-w-[1400px] mx-auto" :class="props.class">
      <slot></slot>
    </section>
  </div>
</template>

<style scoped></style>
