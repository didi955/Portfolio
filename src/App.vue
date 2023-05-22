
<template>
  <div class="bg-gray-800 h-screen text-white">
    <div class="pt-14 mb-24">
      <header class="p-10">
        <h1 class="text-6xl font-bold text-center">Portfolio</h1>
      </header>
      <div>
        <p class="text-center text-xl">En cours de construction</p>
      </div>
    </div>
    <div class="bg-blue-900 rounded-2xl text-center mt-2 m-72">
      <h2 class="text-4xl font-bold">Projets</h2>
      <article
          class="transition-colors duration-300 border-4 border-black border-opacity-20 hover:border-opacity-30 rounded-xl m-64 mt-12">
        <div class="py-6 px-5 lg:flex">

          <div class="flex-1 flex flex-col justify-between">
            <header class="mt-8 lg:mt-0">
              <div class="mt-4">
                <h1 class="text-4xl">
                  <a href="https://blog.dylan-lannuzel.fr" class="break-all">Laravel Blog</a>
                </h1>
              </div>
            </header>

            <div class="text-sm mt-4 space-y-4">
              <p>Laravel Blog est un projet d'apprentissage du framework Laravel basé sur l'application web de Jeffrey Way de
                la série Laracasts, Laravel From Scratch. J'ai développé cette application en parallèle avec cette série.
              </p>
            </div>

            <footer class="flex justify-center items-center mt-8">
              <div>
                <a href="https://blog.dylan-lannuzel.fr"
                   class="transition-colors duration-300 text-xs font-semibold bg-gray-700 hover:bg-gray-800 rounded-full py-2 px-8"
                >En savoir plus</a>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  </div>

</template>
<script setup lang="ts">
</script>