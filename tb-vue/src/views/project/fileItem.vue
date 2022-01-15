<template>
    <el-card
        class="fileCover"
        :body-style="{ padding: '0px', height: '100%' }"
    >
        <div class="wrap" v-if="isFileItem" @click="toProjectDetail">
            <h4 class="text-content">
                <span>{{fileItemData.fileName}}</span>
                <span>{{fileItemData.fileAbstract}}</span>
                <span v-if="fileItemData.createTime">{{fileItemData.createTime | formatDate}}</span>
            </h4>
            <div class="buttons">
                <i class="el-icon-edit"
                    v-show="!fileItemData.inRecycleBin"
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
                <i 
                    class="el-icon-refresh-left" 
                    v-show="fileItemData.inRecycleBin"
                    @click="recoverConfirm"
                ></i>
                <i
                    class="el-icon-delete" 
                    v-show="fileItemData.inRecycleBin"
                    @click="deleteConfirm"
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
    props: ['fileItemData', 'onOpenDialog', 'onOpenEditDialog'],
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
        // 恢复项目确认
        recoverConfirm() {
            const { fileName } = this.fileItemData;
            this.$confirm(`恢复后，您就可以正常使用【${fileName}】项目了`, '恢复项目', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                beforeClose: this.recoverFile,
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '恢复成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '恢复已取消'
                });
            });
        },
         // 恢复项目
        recoverFile(action: 'confirm' | 'cancel', instance: any, done: ()=> void) {
            const _this = this;
            if (action=== 'confirm') {
                this.loading = true;
                this.$RequestServer.fileApi.moveFileToRecycleBinServer({
                    ..._this.fileItemData,
                    inRecycleBin: false,
                }).then(() => {
                    _this.getFileData({ username: _this.username});
                    _this.loading = false;     
                    done();
                });
            } else {
                done();   
            }
        },
        // 删除项目确认
        deleteConfirm() {
            const { fileName } = this.fileItemData;
            this.$confirm(
            `一旦你删除了项目【${fileName}】，所有与项目有关的信息将会被永久删除。这是一个不可恢复的操作，请谨慎对待！`,
            '删除项目', 
            {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                beforeClose: this.deleteFile,
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '删除已取消'
                });
            });
        },
        // 删除项目
        deleteFile(action: 'confirm' | 'cancel', instance: any, done: ()=> void) {
            const _this = this;
            if (action === 'confirm') {
                this.loading = true;
                this.$RequestServer.fileApi.deleteAFlieServer({
                    ..._this.fileItemData,
                    inRecycleBin: false,
                }).then(() => {
                    _this.getFileData({ username: _this.username});
                    _this.loading = false;     
                    done();
                });
            } else {
                done();   
            }
        },
        // 进入项目
        toProjectDetail(event: any) {
            const tagName = event.target.nodeName.toLowerCase();
            if (tagName !== 'i') {
            console.log(tagName)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import './file.scss';
</style>