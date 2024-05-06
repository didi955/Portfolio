<script setup lang="ts">

  import ProjectCard from "./ProjectCard.vue";
  import { Project } from "../../interfaces/types.ts";

  import blogImage from "../../assets/images/projects/blog.webp";
  import descenteGradientImage from "../../assets/images/projects/descenteGradient.webp";
  import iiifImage from "../../assets/images/projects/iiif.webp";

  const projects: Project[] = [
    {
      title: "Laravel Blog",
      description: "Laravel Blog is a project for learning the Laravel framework based on Jeffrey Way's web application from the Laracasts series, Laravel From Scratch. " +
          "I have developed this application in parallel to this series.",
      labels: ["Laravel", "Tailwind CSS", "Alpine JS"],
      image: blogImage,
      production: "https://blog.dylan-lannuzel.fr",
      github: "https://github.com/didi955/Laravel-Blog",
    },
    {
      title: "SAE BUT1 Exploration algorithmique",
      description: "Ceci est un projet en binôme dans le cadre du BUT1 informatique, l'objectif était de" +
          " proposer une approche graphique et algorithmique sur la Descente de Gradient",
      labels: ["Jupyter Notebook", "Numpy", "Matplotlib"],
      image: descenteGradientImage,
      github: "https://github.com/didi955/SAE_MATH_METHODE_NUM",
    },
    {
      title: "API IIIF Image",
      description: "API REST avec Spring Boot, conforme aux spécifications IIIF. " +
          "Cette API permet de récupérer, extraire, redimensionner et convertir des images haute résolution via des interfaces normalisées. " +
          "Elle facilite l'interopérabilité et un partage optimisé des ressources numériques.",
      labels: ["Java", "SpringBoot", "Gradle"],
      image: iiifImage,
      production: "https://iiif.io/api/image/3.0/",
      github: "https://github.com/didi955/iiif-image",
    }
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
