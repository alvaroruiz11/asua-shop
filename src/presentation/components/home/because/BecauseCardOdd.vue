<script setup lang="ts">
interface Props {
  text: string;
}
defineProps<Props>();
</script>
<template>
  <div
    :class="`relative because 
    bg-white rounded-md 
    flex flex-col justify-center items-center 
    p-8 gap-4 mt-[60px] h-[90%] w-[90%] mx-auto`"
  >
    <slot name="image" />

    <div>
      <p class="font-medium md:">{{ text }}</p>
    </div>

    <div class="gradient" />
  </div>
</template>

<style scoped>
.because {
  box-shadow: var(--shadow-1);
  margin-top: 30px;
}

.because::after {
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 100%;
  left: 50%;
  bottom: calc(100% + 23px);
  transform: translateX(-50%);
  background: #f9f9ff;
  border: 4px solid #c38f39;
}

.because::before {
  content: '';
  width: 3px;
  height: 32px;
  background: linear-gradient(
    rgba(195, 143, 57, 0.9473039215686274),
    rgba(253, 252, 248, 0.6924019607843137)
  );
  left: 50%;
  bottom: 100%;
  position: absolute;
  transform: translateX(-50%);
}
.gradient {
  position: absolute;
  width: 100%;
  height: 4px;
  background: rgb(253, 252, 248);

  background: linear-gradient(
    90deg,
    rgba(230, 213, 162, 1) 0%,
    rgba(195, 143, 57, 0.9473039215686274) 76%
  );
  bottom: 0;
  border-radius: 6px;
}

@media (min-width: 768px) {
  .because {
    box-shadow: var(--shadow-1);
    margin-top: 60px;
  }

  .because-hover:hover {
    transform: translateY(-3px);
    position: relative;
  }

  .because::after {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 100%;
    left: 50%;
    bottom: calc(100% + 53px);
    transform: translateX(-50%);
    background: #f9f9ff;
    border: 4px solid #c38f39;
  }

  .because::before {
    content: '';
    width: 3px;
    height: 62px;
    background: linear-gradient(
      rgba(195, 143, 57, 0.9473039215686274),
      rgba(253, 252, 248, 0.6924019607843137)
    );
    left: 50%;
    bottom: 100%;
    position: absolute;
    transform: translateX(-50%);
  }
}
</style>
