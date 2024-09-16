<script lang="ts" setup>

import cvUrl from "../assets/cv.pdf";
import safranSvg from "../assets/icons/safran.svg";

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
                Je suis un étudiant en alternance à ESIEE-Paris en tant que développeur chez
                <a class="text-cyan-500 hover:text-cyan-800 inline-flex items-center"
                   href="https://www.safran-group.com/fr/societes/safran-electronics-defense/"
                   target="_blank">
                    <img :src="safranSvg" class="h-5 w-5 mr-1 inline" loading="lazy" alt="Safran icon">
                    <span class="inline-flex items-center">Safran Electronics & Defense</span>
                </a>.
                Je me suis passionné pour le développement logiciel durant mon enfance avec le jeu Minecraft. Ainsi, j'aimerais
                me spécialiser dans l'architecture logicielle.
            </p>
            <a :href="cvUrl" aria-label="Voir CV" class="inline-flex items-center leading-tight text-slate-200 group"
               target="_blank" type="application/pdf">
          <span>
            <span
                class="border-b border-transparent pb-px transition group-hover:border-cyan-500 font-semibold">Mon CV</span>
              <svg aria-hidden="true" class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" fill="currentColor"
                   viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      fill-rule="evenodd"></path>
              </svg>
          </span>
            </a>
            <div class="cursor-pointer absolute bottom-0 left-0 right-0 flex justify-center lg:mb-14 mb-8"
                 @click="scrollToSkills">
                <svg class="h-8 w-8 mx-auto text-cyan-500 hover:text-cyan-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"></path>
                </svg>
            </div>
        </div>
    </div>

</template>
