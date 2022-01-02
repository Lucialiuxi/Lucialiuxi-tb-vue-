<template>
    <el-card
        class="fileCover"
        :body-style="{ padding: '0px', height: '100%' }"
    >
        <div class="wrap">
            <h4 class="text-content">
                <span>{{fileItemData.FileName}}</span>
                <span>{{fileItemData.FileAbstract}}</span>
            </h4>
            <div class="buttons">
                <i class="el-icon-edit"></i>
                <i class="el-icon-star-on star unstar"></i>
            </div>
        </div>
    </el-card>
</template>

<script lang="ts">
export default {
    name: 'file-item',
    props: ["fileItemData"]
}
</script>

<style lang="scss" scoped>
@import './file.scss';
</style>