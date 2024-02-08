<script setup lang="ts">

const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  activeCard: {
    type: String,
  },
  id: {
    type: String,
  },
});

</script>

<template>
  <div :class="{ 'border-2 border-cyan-500' : props.activeCard === props.id }" class="md:ml-72 ml-32 p-6 rounded-lg hover:border-cyan-500 hover:border-2 flex motion-safe:hover:scale-[1.01] transition-all duration-250 hover:shadow-lg focus:shadow-lg max-w-xl mx-auto">
    <svg class="w-220 h-250 flex-none stroke-gray-100" width="220" height="220">
      <image :xlink:href="props.img" alt="icon" width="220" height="220"/>
    </svg>
    <ul class="m-0 pl-8 flex-none flex flex-col items-center justify-center text-gray-300">
      <slot></slot>
    </ul>
  </div>
</template>

<style scoped>

  div {
   border: 0 solid #06b6d4;
  }

</style>
