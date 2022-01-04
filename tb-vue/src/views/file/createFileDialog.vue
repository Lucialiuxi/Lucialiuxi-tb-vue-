<template>
    <el-dialog 
        title="创建项目" 
        :visible.sync="visible"
        append-to-body
        width="360px"
        center
        custom-class="create-file-dialog"
        :before-close="onCloseDialog"
        destroy-on-close
    >
        <div class="description">
            <img :src="imgSrc"/>
            <p>为不同的事务建立各自的项目</p>
        </div>
        <el-form :model="form"  ref="formRef" :rules="rules">
            <el-form-item prop="fileName">
                <el-input 
                    v-model="form.fileName" 
                    autocomplete="off" 
                    placeholder="请输入项目名称"
                ></el-input>
            </el-form-item>
            <el-form-item prop="fileAbstract">
                <el-input 
                    v-model="form.fileAbstract" 
                    autocomplete="off" 
                    placeholder="请输入项目简介"
            ></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="onCreateFile" :loading="loading">完成并创建</el-button>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import imgSrc from '@/assets/illustration.png';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'createFileDialog',
    props: ['visible', 'onCloseDialog'],
    data() {
        return {
            form: {
                fileName: '',
                fileAbstract: '',
            },
            formLabelWidth: '80px',
            imgSrc,
            rules: {
                fileName: [{ required: true, message: '项目名称是必填项', trigger: 'blur' }],
                fileAbstract: [{ required: true, message: '项目简介是必填项', trigger: 'blur' }],
            },
            loading: false,
        }
    },
    computed: {
        ...mapState('users', [ 'username' ]),
    },
    methods: {
        ...mapActions('files', ['getFileData']),
        onCreateFile() {
            const _this = this;
            this.$refs?.formRef?.validate(function(valid: boolean) {
                if (valid) {
                    _this.loading = true;
                    _this.$RequestServer.fileApi.createAFileServer({
                        username: _this.username,
                        ..._this.form,
                    }).then(() => {
                        _this.getFileData({ username: _this.username});
                        _this.loading = false;
                        _this.onCloseDialog();
                    });
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
@import './createFileDialog';
</style>