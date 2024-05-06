<script setup lang="ts">

  import { Project } from "../../interfaces/types.ts";
  import githubIcon from '../../assets/icons/github.svg';

  defineProps<{
    project: Project;
  }>();

</script>

<template>
  <div class="bg-gray-700 rounded-lg p-4 relative">
    <div class="flex flex-col md:flex-row items-start">
      <img
          :src="project.image"
          :alt="project.title"
          class="w-full md:w-64 h-48 md:h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
          loading="lazy"
      />
      <div class="md:flex-1">
        <h3 class="text-2xl font-semibold text-gray-200">{{ project.title }}</h3>
        <p class="text-gray-400 mt-2">{{ project.description }}</p>
        <div class="flex items-center mt-4">
          <a
              v-if="project.production"
              :href="project.production"
              target="_blank"
              class="text-cyan-500 hover:text-cyan-600 mr-2"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              />
              <path
                  d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              />
            </svg>
          </a>
          <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="text-cyan-500 hover:text-cyan-600"
          >
            <img :src="githubIcon" class="w-6 h-6" alt="Github Icon" loading="lazy">
          </a>
        </div>
        <div class="flex items-center mt-4">
          <div
              v-for="label in project.labels"
              :key="label"
              class="bg-cyan-500 text-white rounded-full px-2 py-1 text-xs mr-2"
          >
            {{ label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
