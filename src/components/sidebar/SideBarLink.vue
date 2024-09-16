<script lang="ts" setup>

const { href = '#'} = defineProps<{
    href: string
}>();

</script>

<template>
    <a :href="href" rel="noreferrer" target="_blank">
        <slot></slot>
    </a>

</template>
