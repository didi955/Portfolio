<script setup lang="ts">

  import { defineProps } from 'vue'

  defineProps({
    image: String,
    title: String,
    description: String,
    labels: Array,
    githubLink: String,
    webLink: String
  });

</script>

<template>
  <div class="max-w-md mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-4xl m-3">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:w-48" :src="image" alt="Project image">
      </div>
      <div class="p-8">
        <div v-for="(label, index) in labels" :key="index" class="uppercase tracking-wide text-sm text-gray-600 font-semibold">{{ label }}</div>
        <a href="#" class="block mt-2 text-lg leading-tight font-medium text-black hover:underline">{{ title }}</a>
        <p class="mt-2 text-gray-500">{{ description }}</p>
        <div class="mt-4">
          <a :href="githubLink" class="text-cyan-500 hover:underline" target="_blank">GitHub</a>
          <a v-if="webLink" :href="webLink" class="text-cyan-500 hover:underline ml-4" target="_blank">Web</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
