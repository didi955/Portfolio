<script setup lang="ts">

import cvUrl from "../assets/cv.pdf";

</script>

<template>

  <div id="Home" class="flex items-center w-full min-h-screen justify-center p-5">
    <div class="container max-w-5xl lg:m-auto text-center">
      <h1 class="text-5xl sm:text-8xl font-semibold text-cyan-600 mb-6">Dylan LANNUZEL</h1>
      <h2 class="text-4xl sm:text-5xl text-gray-100 mb-8">Développeur Full Stack</h2>
      <p class="text-gray-200 sm:text-xl text-sm my-8 leading-normal">
        Je suis un étudiant en alternance dans le cadre du BUT Informatique en tant que développeur full stack chez <a class="text-cyan-500 hover:text-cyan-600" href="https://ebrigade.app/" target="_blank">eBrigade</a>.
        Depuis mon enfance, je suis passionné par le développement, back-end de préférence. Ainsi, je suis en constante veille technologique pour élaborer de nouveaux projets.
      </p>
      <a class="inline-flex items-center leading-tight text-slate-200 group" aria-label="Voir CV" target="_blank" :href="cvUrl">
          <span>
            <span class="border-b border-transparent pb-px transition group-hover:border-cyan-500 font-semibold">Mon CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
              </svg>
          </span>
      </a>
    </div>
  </div>

</template>
