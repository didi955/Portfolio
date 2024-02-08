<script setup lang="ts">

  import ProjectCard from "./projects/ProjectCard.vue";
  import plexNotifierImg from "../assets/images/plexnotifier.png";
  import iiifImg from "../assets/images/iiif.png";

</script>

<template>

  <div id="Projects" class="mt-2">
    <div class="grid grid-cols-1 gap-6 lg:gap-8">
      <ProjectCard
        image="https://via.placeholder.com/150"
        title="Laravel Blog"
        description="Laravel Blog is a project for learning the Laravel framework based on Jeffrey Way's web application from the Laracasts series, Laravel From Scratch. I have developed this application in parallel to this series. "
        :labels="['Laravel', 'Tailwind', 'AlpineJS']"
        githubLink="https://github.com/didi955/Laravel-Blog"
        webLink="https://blog.dylan-lannuzel.fr"
      />
      <ProjectCard
        :image="plexNotifierImg"
        title="PlexNotifier"
        description="PlexNotifier is a script to run a background searcher for new movies and episodes in your Plex server "
        :labels="['Python']"
        githubLink="https://github.com/didi955/PlexNotifier"
      />
      <ProjectCard
        :image="iiifImg"
        title="API IIIF-Image"
        description="The IIIF (International Image Interoperability Framework) API Image is a project that aims to create a universal standard for the delivery of images on the Internet. This API allows you to retrieve images from various sources, process them, and distribute them uniformly."
        :labels="['Java', 'Spring']"
        githubLink="https://github.com/didi955/iiif-image"
      />

    </div>

  </div>

</template>

<style scoped>

</style>