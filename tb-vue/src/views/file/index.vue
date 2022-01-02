<template>
    <layout>
        <template v-slot: default>
            <div class="files-wrap">
                <file-item
                v-for="item in fileData"
                :key="item.fileId"
                :fileItemData="item"
            ></file-item>
            </div>
        </template>
    </layout>
</template>

<script lang="ts">
import layout from '@/components/layout/index.vue';
import fileItem from './fileItem.vue';
import { Session } from '@/utils/storage';

export default {
    name: 'File',
    components: {
        layout,
        'file-item': fileItem,
    },
    data() {
        return {
            a: 123,
            fileData: [],
        }
    },
    async beforeCreate(){
        this.userInfo = Session.get('userInfo');
        const data = await this.$RequestServer.fileApi.getAllFilesInfo({ userLoginName: this.userInfo.username});
        this.fileData = data.data;
    },
}
</script>

<style lang="scss" scoped>
    @import './file.scss';
</style>