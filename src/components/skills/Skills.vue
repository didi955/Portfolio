<script setup lang="ts">

import SkillCard from "./SkillCard.vue";

import browserImg from "../../assets/images/browser.svg";
import backendImg from "../../assets/images/server.svg";
import databaseImg from "../../assets/images/database.svg";
import {ref} from "vue";

const activeCard = ref<string>("");

</script>

<template>
  <div id="Skills" class="mt-2">
    <div class="grid grid-cols-1 gap-6 lg:gap-8 text-3xl">
      <SkillCard :img="browserImg" @click="activeCard = 'front'" :activeCard="activeCard" id="front">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>VueJS</li>
      </SkillCard>
      <SkillCard :img="backendImg" @click="activeCard = 'back'" :activeCard="activeCard" id="back">
        <li>PHP</li>
        <li>Laravel</li>
        <li>Python</li>
        <li>Java</li>
      </SkillCard>
      <SkillCard :img="databaseImg" @click="activeCard = 'database'" :activeCard="activeCard" id="database">
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Redis</li>
      </SkillCard>
    </div>
  </div>
</template>