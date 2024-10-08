<script lang="ts" setup>

import {Project} from "../../interfaces/types.ts";

defineProps<{
    project: Project;
}>();

</script>

<template>
    <div class="bg-gray-700 rounded-lg p-4 relative">
        <div class="flex flex-col md:flex-row md:items-start">
            <img
                :alt="project.title + ' cover image'"
                :src="project.image"
                class="w-full md:w-72 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
                loading="lazy"
            />
            <div class="md:flex-1 md:ml-3 lg:ml-6">
                <h3 class="text-2xl font-semibold text-gray-200">{{ project.title }}</h3>
                <p class="text-gray-300 mt-2">{{ project.description }}</p>
                <div class="flex items-center mt-4">
                    <a
                        v-if="project.production"
                        :href="project.production"
                        class="mr-2 flex items-center"
                        target="_blank"
                    >
                        <svg
                            aria-hidden="true"
                            class="h-6 w-6 mr-1 fill-white/80 hover:fill-cyan-500 transition delay-75"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                            />
                            <path
                                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                            />
                        </svg>
                        <span class="sr-only">Lien vers site externe</span>
                    </a>
                    <a
                        v-if="project.github"
                        :href="project.github"
                        class="flex items-center"
                        target="_blank"
                    >
                        <svg
                            aria-hidden="true"
                            class="w-7 mr-1 fill-white/80 hover:fill-cyan-500 transition delay-75"
                            viewBox="0 0 128 128"
                        >
                            <path
                                clip-rule="evenodd"
                                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                                fill-rule="evenodd"
                            ></path>
                            <path
                                d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
                            ></path>
                        </svg>
                        <span class="sr-only">Lien vers le dépôt GitHub</span>
                    </a>
                </div>
                <div class="flex items-center mt-4 flex-wrap">
                    <div
                        v-for="label in project.labels"
                        :key="label"
                        class="bg-cyan-800 text-white rounded-full px-2 py-1 text-xs mr-2 mb-2"
                    >
                        {{ label }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
