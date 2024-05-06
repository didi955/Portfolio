<script setup lang="ts">

  import { defineProps } from 'vue';
  import { Experience } from '../../interfaces/types.ts';

  defineProps<{
    exp: Experience
  }>();

</script>

<template>
  <div class="flex items-center mb-1">
    <div class="flex-shrink-0">
      <img :src="exp.icon" alt="Experience icon" class="w-8 h-8" loading="lazy">
    </div>
    <div class="ml-4">
      <h3 class="text-xl font-semibold text-gray-200">{{ exp.title }}</h3>
      <h4 class="text-lg font-normal text-gray-300">{{ exp.position }}</h4>
      <p class="text-gray-400 mb-2">{{ exp.date }}</p>
      <p class="text-gray-400" v-if="exp.description" v-html="exp.description.split('\n').join('<br/>')"></p>
    </div>
  </div>
</template>
