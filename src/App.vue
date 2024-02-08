<script setup lang="ts">

import NavBar from "./components/navbar/NavBar.vue";
import SideBar from "./components/SideBar.vue";

import Home from "./components/About.vue";
import Skills from "./components/skills/Skills.vue";
import Projects from "./components/Projects.vue";

</script>

<template>
  <div class="w-full bg-gray-800 scroll-smooth" style="font-family: 'Roboto', sans-serif">
    <NavBar/>
    <SideBar/>
    <Home/>
    <Skills/>
    <Projects/>
  </div>

</template>
