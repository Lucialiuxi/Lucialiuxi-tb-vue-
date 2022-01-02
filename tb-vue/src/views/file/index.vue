<template>
    <layout>
        <template v-slot: default>
        </template>
    </layout>
</template>

<script lang="ts">
import layout from '@/components/layout/index.vue';

export default {
    name: 'File',
    components: {
        layout,
    },
    data() {
        return {
            a: 123
        }
    }
}
</script>