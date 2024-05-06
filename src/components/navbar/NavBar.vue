<script setup lang="ts">

import NavLink from "./NavLink.vue";
import NavBarLeft from "./NavBarLeft.vue";
import logoUrl from "../../assets/images/moi.webp";

</script>

<template>
  <div>
    <nav class="fixed w-full lg:h-20 z-10 bg-gray-800 border-b-2 border-solid border-cyan-500 rounded-b-md md:border-0 md:bg-transparent">
      <div class="flex items-center">
        <NavBarLeft>
          <img class="h-14 w-14 mx-2 rounded-2xl" :src="logoUrl" alt="Dylan LANNUZEL">
        </NavBarLeft>
        <div class="flex justify-center md:flex-row md:mr-0 md:ml-auto w-full md:w-auto">
          <NavLink href="#Skills">Compétences</NavLink>
          <NavLink href="#Experience">Parcours</NavLink>
          <NavLink href="#Projects">Projets</NavLink>
        </div>
      </div>
    </nav>
  </div>

</template>