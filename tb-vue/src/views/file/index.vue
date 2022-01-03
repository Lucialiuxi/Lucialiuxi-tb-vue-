<template>
    <layout>
        <template v-slot: default>
            <div class="files-wrap">
                <file-item
                    v-for="item in fileData"
                    :key="item.fileId"
                    :fileItemData="item"
                ></file-item>
                <file-item key="new-file-item" :onOpenDialog="onOpenDialog"></file-item>
            </div>
            <create-file-dialog 
                :visible="createFileDialogVisible" 
                :onCloseDialog="onCloseDialog"
            ></create-file-dialog>
        </template>
    </layout>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';
import layout from '@/components/layout/index.vue';
import fileItem from './fileItem.vue';
import { Session } from '@/utils/storage';
import createFileDialog from './createFileDialog.vue';

const { mapState, mapActions } = createNamespacedHelpers('files/');

export default {
    name: 'File',
    components: {
        layout,
        'file-item': fileItem,
        'create-file-dialog': createFileDialog,
    },
    data() {
        return {
            createFileDialogVisible: false,
        };
    },
    created(){
        const { username } : { username: string } = Session.get('userInfo');
        this.getFileData({ username: username});
    },
    methods: {
        ...mapActions(['getFileData']),
        onOpenDialog(){
            console.log('打开')
            this.createFileDialogVisible = true;
        },
        onCloseDialog(){
            console.log('关闭')
            this.createFileDialogVisible = false;
        },
    },
    computed: {
        ...mapState([ 'fileData' ]),
    },
}
</script>

<style lang="scss" scoped>
    @import './file.scss';
</style>