<script setup lang="ts">

import ProjectCard from "./ProjectCard.vue";
import { Project } from "../../interfaces/types.ts";

  const projects: Project[] = [
    {
      title: "Projet 1",
      description: "Description du projet 1",
      labels: ["Vue.js", "Tailwind CSS"],
      image: "https://via.placeholder.com/150",
      production: "https://example.com/projet1",
      github: "https://github.com/example/projet1",
    },
    {
      title: "Projet 2",
      description: "Description du projet 2",
      labels: ["React", "Node.js"],
      image: "https://via.placeholder.com/150",
      github: "https://github.com/example/projet2",
    },
  ];
</script>


<template>
  <div id="Projects" class="bg-gray-800 rounded-lg p-6">
    <h2 class="text-4xl font-semibold text-center mb-6 text-cyan-600">Projets</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
      />
    </div>
  </div>
</template>
