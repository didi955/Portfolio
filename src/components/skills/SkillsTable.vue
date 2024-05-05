<script setup lang="ts">

  import { PropType } from 'vue';
  import { Skill } from "../../interfaces/types.ts";

  defineProps({
    title: {
      type: String,
      required: true,
    },
    skills: {
      type: Array as PropType<Skill[]>,
      required: true,
    },
  });

</script>

<template>

  <div class="bg-gray-200 rounded-lg shadow-lg p-4 transition-all duration-200 hover:border-cyan-500 hover:border hover:outline hover:outline-3 hover:outline-cyan-400/20">
    <h3 class="text-xl font-semibold mb-2 text-gray-600">{{ title }}</h3>

    <div class="flex flex-wrap">

      <div v-for="(skill, index) in skills" :key="index" class="w-1/2 p-2">
        <div class="flex items-center">
          <a :href="skill.link" target="_blank">
            <img :src="skill.logo" :alt="skill.name" class="h-8 w-8 mr-2">
            <span>{{ skill.name }}</span>
          </a>
        </div>
      </div>

    </div>
  </div>

</template>
