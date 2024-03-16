<script setup lang="ts">
import BecauseCard from './BecauseCard.vue';
import BecauseCardOdd from './BecauseCardOdd.vue';
</script>
<template>
  <div class="hanger-line my-32 relative">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
      <BecauseCard text="Libre de crueldad">
        <template v-slot:image>
          <img src="/assets/cruelty-free.svg" alt="Cruelty Free" class="w-24 h-24" />
        </template>
      </BecauseCard>
      <BecauseCardOdd text="Producto natural">
        <template v-slot:image>
          <img src="/assets/product-natural.svg" alt="Product Natural" class="w-24 h-24" />
        </template>
      </BecauseCardOdd>
      <BecauseCard text="Reciclaje">
        <template v-slot:image>
          <img src="/assets/recycle.svg" alt="Recycle" class="w-24 h-24" />
        </template>
      </BecauseCard>
      <BecauseCardOdd text="Vegano">
        <template v-slot:image>
          <img src="/assets/vegan.svg" alt="Vegan" class="w-24 h-24" />
        </template>
      </BecauseCardOdd>
    </div>
  </div>
</template>

<style scoped>
.hanger-line::before {
  content: '';
  background: rgb(253, 252, 248);
  background: linear-gradient(
    90deg,
    rgba(253, 252, 248, 0.6924019607843137) 0%,
    rgba(195, 143, 57, 0.9473039215686274) 50%,
    rgba(253, 252, 248, 0.6924019607843137) 100%
  );

  height: 4px;
  width: 100%;
  position: absolute;
  top: 0px;
}
</style>
