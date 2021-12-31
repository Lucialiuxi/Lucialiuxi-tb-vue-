<template>
    <a
        v-bind:href="url"
        class="nav-link"
    >
        <slot></slot>
    </a>
</template>

<script lang="ts">

export default {
    name: 'navigation-link',
    props: ['url'],
}
</script>