<template>
    <el-card
        class="fileCover"
        :body-style="{ padding: '0px', height: '100%' }"
    >
        <div class="wrap" v-if="isFileItem">
            <h4 class="text-content">
                <span>{{fileItemData.fileName}}</span>
                <span>{{fileItemData.fileAbstract}}</span>
            </h4>
            <div class="buttons">
                <i class="el-icon-edit"></i>
                <i class="el-icon-star-on star unstar"></i>
            </div>
        </div>
        <div v-else class="create-file-card" @click="onOpenDialog">
            <i class="el-icon-circle-plus"></i>
            <p class="text">创建新的项目</p>
        </div>
    </el-card>
</template>

<script lang="ts">
export default {
    name: 'file-item',
    props: ["fileItemData", 'onOpenDialog'],
    computed: {
        isFileItem(){
            if (!this.fileItemData) return false;
            return !!Object.keys(this.fileItemData).length;
        }
    },
}
</script>

<style lang="scss" scoped>
@import './file.scss';
</style>