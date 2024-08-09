<script lang="ts" setup>

import NavBar from "./components/navbar/NavBar.vue";
import SideBar from "./components/sidebar/SideBar.vue";

import About from "./components/About.vue";
import Skills from "./components/skills/Skills.vue";
import ExperienceSection from "./components/experience/ExperienceSection.vue";
import ProjectSection from "./components/projects/ProjectSection.vue";
</script>

<template>
    <div class="w-full bg-gray-800 scroll-smooth" style="font-family: 'Roboto', sans-serif">
        <NavBar/>
        <SideBar/>
        <About/>
        <Skills/>
        <ExperienceSection/>
        <ProjectSection/>
    </div>

</template>
