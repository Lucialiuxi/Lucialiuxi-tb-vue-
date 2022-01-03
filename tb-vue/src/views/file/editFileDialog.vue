<template>
    <el-dialog
        title="项目设置"
        :visible.sync="visible"
        width="670px"
        :before-close="onClose"
    >
        <div class="content-wrap">
            <ul class="content-left" v-for="item in leftConfig" :key="item.icon">
                <li>
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="onClose">取 消</el-button>
            <el-button type="primary" @click="onClose">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script lang="ts">

export default {
    name: 'edit-file-dialog',
    props: ['visible', 'onClose'],
    data() {
        return {
            leftConfig: [
                {
                    title: '项目信息',
                    icon: 'el-icon-s-data',
                },
                {
                    title: '项目信息',
                    icon: 'el-icon-receiving',
                },
            ]
        };
    },
    methods: {
        
    },
}
</script>