<script lang="ts" setup>

withDefaults(
    defineProps<{
        href: string
    }>(),
    {
        href: '#'
    }
);

</script>

<template>
    <a :href="href" rel="noreferrer" target="_blank">
        <slot></slot>
    </a>

</template>
