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
                <i class="el-icon-edit"
                    @click="onOpenEditDialog(fileItemData)"
                ></i>
                <i 
                    v-show="!fileItemData.inRecycleBin"
                    :class="{
                        'el-icon-star-on': true,
                        star: fileItemData.star,
                    }"
                    @click="onStarHandle"
                ></i>
            </div>
        </div>
        <div v-else class="create-file-card" @click="onOpenDialog">
            <i class="el-icon-circle-plus"></i>
            <p class="text">创建新的项目</p>
        </div>
    </el-card>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';
export default {
    name: 'file-item',
    props: ["fileItemData", 'onOpenDialog', 'onOpenEditDialog'],
    data () {
        return {
            loading: true,
        };
    },
    computed: {
        ...mapState('users', ['username']),
        isFileItem(){
            if (!this.fileItemData) return false;
            return !!Object.keys(this.fileItemData).length;
        },
    },
    methods: {
        ...mapActions('files', ['getFileData']),
        onStarHandle() {
            const _this = this;
            this.$RequestServer.fileApi.toggleFileStarServer({
                ...this.fileItemData,
                star: !this.fileItemData.star,
            }).then((res: DataType) => {
                if (res.success) {
                    this.$message({
                         type: 'success',
                         message: !_this.fileItemData.star ? '标星成功': '取消标星',
                    });
                    _this.getFileData({ username: _this.username});
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
@import './file.scss';
</style>