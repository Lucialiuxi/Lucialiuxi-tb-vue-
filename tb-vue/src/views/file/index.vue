<template>
    <layout>
        <template v-slot: default>
            <div class="files-wrap">
                <file-item
                    v-for="item in fileData"
                    :key="item.fileId"
                    :fileItemData="item"
                ></file-item>
                <file-item key="new-file-item"></file-item>
            </div>
        </template>
    </layout>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';
import layout from '@/components/layout/index.vue';
import fileItem from './fileItem.vue';
import { Session } from '@/utils/storage';

const { mapState, mapActions } = createNamespacedHelpers('files/');

export default {
    name: 'File',
    components: {
        layout,
        'file-item': fileItem,
    },
    data() {
        return {};
    },
    created(){
        const { username } : { username: string } = Session.get('userInfo');
        this.getFileData({ userLoginName: username});
    },
    methods: {
        ...mapActions(['getFileData']),
    },
    computed: {
        ...mapState([ 'fileData' ]),
    },
}
</script>

<style lang="scss" scoped>
    @import './file.scss';
</style>