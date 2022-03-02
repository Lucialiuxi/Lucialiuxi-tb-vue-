<template>
    <layout>
        <template v-slot: default>
            <div 
                :class="[config.class]"
                v-for="config in renderFileConfig"
                :key="config.class"
            >
                <h3>
                    {{config.title}}
                    <span 
                        v-if="config.showSwitch" 
                        class="swich-recycle"
                        @click="onHandleSwitch"
                    >
                        {{ showRecycle ? '显示' : '隐藏' }}
                    </span>
                </h3>
                <div class="files-wrap">
                    <file-item
                        v-for="item in config.fileData"
                        :key="item.fileId"
                        :fileItemData="item"
                        :onOpenEditDialog="onOpenEditDialog"
                    ></file-item>
                    <file-item 
                        v-if="config.showCreateCard"
                        key="new-file-item" 
                        :onOpenDialog="onOpenDialog"
                    ></file-item>
                </div>
            </div>
            
            <create-file-dialog
                v-if="createFileDialogVisible"
                :visible="createFileDialogVisible" 
                :onCloseDialog="onCloseDialog"
            ></create-file-dialog>
            <edit-file-dialog
                v-if="editFileDialogVisible"
                :visible="editFileDialogVisible" 
                :onClose="onCloseEditDialog"
                :fileDataItem="currentFileItem"
            ></edit-file-dialog>
        </template>
    </layout>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';
import layout from '@/components/layout/index.vue';
import fileItem from './fileItem.vue';
import { Session } from '@/utils/storage';
import createFileDialog from './createFileDialog.vue';
import editFileDialog from './editFileDialog.vue';

const { mapState, mapActions } = createNamespacedHelpers('files/');

export default {
    name: 'File',
    components: {
        layout,
        'file-item': fileItem,
        'create-file-dialog': createFileDialog,
        'edit-file-dialog': editFileDialog,
    },
    data() {
        return {
            createFileDialogVisible: false,
            editFileDialogVisible: false,
            showRecycle: false,
            currentFileItem: {},
        };
    },
    created(){
        const { username } : { username: string } = Session.get('userInfo');
        this.getFileData({ username: username});
    },
    methods: {
        ...mapActions(['getFileData']),
        // 打开新建项目弹出页面
        onOpenDialog(){
            this.createFileDialogVisible = true;
        },
        // 关闭新建项目弹出页面
        onCloseDialog(){
            this.createFileDialogVisible = false;
        },
        // 打开新建项目弹出页面
        onOpenEditDialog(currentFileItem: fileDataItemType){
            this.editFileDialogVisible = true;
            this.currentFileItem = currentFileItem;
        },
        // 关闭项目设置弹出页面
        onCloseEditDialog(){
            this.editFileDialogVisible = false;
        },
        // 切换项目回收站文件显示模式
        onHandleSwitch() {
            const { showRecycle } = this;
            this.showRecycle = !showRecycle;
        }
    },
    computed: {
        ...mapState([ 'fileData' ]),
        starFileData() {
            return this.fileData.filter((item: fileDataItemType) => item.star);
        },
        normalFileData() {
            return this.fileData.filter((item: fileDataItemType) => !item.inRecycleBin);
        },
        recycledFileData() {
            return this.fileData.filter((item: fileDataItemType) => item.inRecycleBin);
        },
        renderFileConfig() {
            return [
                {
                    title: '星表项目',
                    fileData: this.starFileData,
                    class: 'star-files',
                },
                {
                    title: '我拥有的项目',
                    fileData: this.normalFileData,
                    showCreateCard: true,
                    class: 'my-own-files',
                },
                {
                    title: '项目回收站',
                    fileData: this.recycledFileData,
                    showSwitch: true,
                    class: 'recycled-Flies',
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    @import './file.scss';
</style>