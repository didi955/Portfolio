<script setup lang="ts">

  import cvUrl from "../assets/cv.pdf";

  const scrollToSkills = () => {
    const skills = document.getElementById('Skills');
    skills?.scrollIntoView();
  };

</script>

<template>

  <div id="Home" class="flex items-center w-full min-h-screen justify-center p-5">
    <div class="container max-w-5xl lg:m-auto text-center">
      <h1 class="text-5xl sm:text-8xl font-semibold text-cyan-600 mb-6">Dylan LANNUZEL</h1>
      <h2 class="text-4xl sm:text-5xl text-gray-100 mb-8">Apprenti ingénieur logiciel</h2>
      <p class="text-gray-200 sm:text-xl text-sm my-8 leading-normal">
        Je suis un étudiant en alternance dans le cadre du BUT Informatique en tant que développeur full stack chez <a class="text-cyan-500 hover:text-cyan-600" href="https://ebrigade.app/" target="_blank">eBrigade</a>.
        Je me suis passionné pour le développement logiciel durant mon enfance avec le jeu Minecraft. Ainsi, j'aimerais me spécialiser dans l'architecture logicielle.
      </p>
      <a class="inline-flex items-center leading-tight text-slate-200 group" aria-label="Voir CV" target="_blank" type="application/pdf" :href="cvUrl">
          <span>
            <span class="border-b border-transparent pb-px transition group-hover:border-cyan-500 font-semibold">Mon CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
              </svg>
          </span>
      </a>
      <div @click="scrollToSkills" class="cursor-pointer absolute bottom-0 left-0 right-0 flex justify-center mb-14">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8 mx-auto text-cyan-500 hover:text-cyan-600">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </div>

</template>
