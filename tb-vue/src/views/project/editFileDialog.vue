<template>
    <el-dialog
        title="项目设置"
        :visible.sync="visible"
        width="670px"
        :before-close="onClose"
        custom-class="eidt-file-dialog"
        destroy-on-close
    >
        <div class="content-wrap">
            <ul class="content-left">
                <li 
                    v-for="item in leftConfig" 
                    :key="item.key"
                    :class="{active: activeKey === item.key}"
                    @click="onChangeTab(item.key)"
                >
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </li>
            </ul>
            <div class="content-right">
                <el-form 
                    ref="formRef" 
                    :model="fileDataItem" 
                    label-width="90px" 
                    label-position="left"
                    :rules="rules"
                    v-if="activeKey==='information'"
                >
                    <el-form-item label="项目名称:" prop="fileName">
                        <el-input type="textarea" v-model="fileDataItem.fileName"></el-input>
                    </el-form-item>
                    <el-form-item label="项目简介:" prop="fileAbstract">
                        <el-input type="textarea" v-model="fileDataItem.fileAbstract"></el-input>
                    </el-form-item>
                </el-form>
                <div class="operate-to-recycle-bin" v-else>
                    <h5>项目操作</h5>
                    <p>您可以执行一下操作</p>
                    <el-button type="danger" size="small" @click="openConfirmBox">移动到回收站</el-button>
                </div>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="onClose">取 消</el-button>
            <el-button type="primary" @click="onChangeFileInfo" :loading="loading">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';

export default {
    name: 'edit-file-dialog',
    props: ['visible', 'onClose', 'fileDataItem'],
    data() {
        return {
            activeKey: 'information',
            leftConfig: [
                {
                    title: '项目信息',
                    icon: 'el-icon-s-data',
                    key: 'information',
                },
                {
                    title: '项目操作',
                    icon: 'el-icon-receiving',
                    key: 'operation',
                },
            ],
            rules: {
                fileName: [{ required: true, message: '项目名称是必填项', trigger: 'blur' }],
                fileAbstract: [{ required: true, message: '项目简介是必填项', trigger: 'blur' }],
            },
            loading: false,
        };
    },
    computed: {
        ...mapState('users', [ 'username' ]),
    },
    methods: {
        ...mapActions('files', ['getFileData']),
        onChangeTab(activeKey) {
            this.activeKey = activeKey;
        },  
        // 点击确定按钮
        onChangeFileInfo() {
            if (this.activeKey === 'operation') {
                this.onClose();
                return;
            }
            // 修改改项目的名称/简介
            const _this = this;
            this.$refs?.formRef?.validate(function(valid: boolean) {
                if (valid) {
                    _this.loading = true;
                    _this.$RequestServer.fileApi.modifyFileInfo({
                        ..._this.fileDataItem
                    }).then(() => {
                        _this.getFileData({ username: _this.username});
                        _this.loading = false;                    
                    });
                }
            });
        },
        openConfirmBox() {
            const { fileName } = this.fileDataItem;
            const tips = `一旦将项目【${fileName}】项目移动到回收站, 所有与项目有关的信息将会被移到回收站。请谨慎对待！`;
            this.$confirm(tips, '移到回收站', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                beforeClose: this.moveToRecycleBin,
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '移到成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });
            });
        },
        moveToRecycleBin(action: 'confirm' | 'cancel', instance: any, done: ()=> void) {
            const _this = this;
            if (action=== 'confirm') {
                this.loading = true;
                this.$RequestServer.fileApi.moveFileToRecycleBinServer({
                    ..._this.fileDataItem,
                    inRecycleBin: true,
                }).then(() => {
                    _this.getFileData({ username: _this.username});
                    _this.loading = false;     
                    done();
                    _this.onClose();             
                });
            } else {
                done();   
                _this.onClose();    
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import './editFileDialog.scss';
</style>