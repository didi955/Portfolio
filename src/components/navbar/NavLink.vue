<script lang="ts" setup>

const { href = '#'} = defineProps<{
    href: string
}>();

</script>

<template>

    <a :href="href"
       class="text-gray-100 md:mr-2 md:px-4 py-2 text-sm lg:text-base hover:text-cyan-500 transition duration-300 ease-in-out sm:text-sm p-2 mx-2 group">
        <span class="group-hover:border-b border-solid border-cyan-500"><slot></slot></span>
    </a>

</template>
