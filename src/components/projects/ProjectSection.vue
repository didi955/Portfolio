<script setup lang="ts">

  import ProjectCard from "./ProjectCard.vue";
  import { Project } from "../../interfaces/types.ts";

  import blogImage from "../../assets/images/projects/blog.webp";
  import descenteGradientImage from "../../assets/images/projects/descenteGradient.webp";
  import iiifImage from "../../assets/images/projects/iiif.webp";
  import RcbImage from "../../assets/images/projects/rcb.webp";
  import IAImage from "../../assets/images/projects/ia.webp";
  import animathImage from "../../assets/images/projects/animath.webp";

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
      title: "SAE S2 Exploration algorithmique",
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
    },
    {
      title: "SAE S6 Chatbot IA",
      description: "Chatbot IA est un projet de développement d'un chatbot en Python avec un processus de fine-tuning sur les transformers des modèles Bert, Google T5 et Roberta avec le dataset SquadV2" +
          " Ce chatbot est capable de répondre à des questions sur un sujet donné en contexte, de manière naturelle et intelligente.",
      labels: ["Transformers", "PyTorch", "Python", "Streamlit"],
      image: IAImage,
    },
    {
      title: "Rushcubeland",
      description: "Rushcubeland est un projet large de développement d'un réseau de serveurs de jeu Minecraft et des services qui y sont reliés." +
          " Regroupant de larges compétences en POO Java, SQL, Redis, Admin Sys, Conception de scénario de jeu, développement d'une communauté.",
      labels: ["Java", "Minecraft", "Redis", "SQL"],
      image: RcbImage,
      github: "https://github.com/Rushcubeland",
    },
    {
      title: "SAE S3 Animath Planning",
      description: "Ce projet consiste à proposer une solution web fiable et pérenne à l'association Animath pour pouvoir gérer les inscriptions " +
          "et prises de rendez-vous dans le cadre d'un salon dédié aux mathématiques pour les Jeunes.",
      labels: ["PHP", "JS", "MVC", "PostgreSQL"],
      image: animathImage,
      github: "https://github.com/didi955/Animath-Planning",
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
