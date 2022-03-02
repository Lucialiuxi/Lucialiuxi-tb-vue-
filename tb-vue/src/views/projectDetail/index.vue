<template>
    <layout>
        <template v-slot: default>
            <div class="project-detail-content">
                <el-breadcrumb 
                    separator-class="el-icon-arrow-right"
                    :separator="currentPath"
                >
                    <el-breadcrumb-item @click="handleChangePath" :to="{ path: '/'}">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="任务" name="task">
                        <task/>
                    </el-tab-pane>
                    <el-tab-pane label="文件" name="work">文件</el-tab-pane>
                </el-tabs>
            </div>
        </template>
    </layout>
</template>

 <script lang="ts">
import layout from '@/components/layout/index.vue';
import task from './task/index.vue';
 
 export default {
    name: "ProjectDetail",
    components: {
      layout,
      task,
    },
    data() {
        return {
            activeName: 'task',
            fileId: '',
        };
    },
    mounted() {
        console.log('created====', this.$router.currentRoute.params)
        this.fileId = this.$router.currentRoute.params.id;
    },
    methods: {
        handleClick() {

        },
        handleChangePath(e) {
            console.log(e)
        },
    },
    computed: {
        currentPath() {
            return `/projectDetail/${this.fileId}`;
        }
    }
 }
 </script>
 
 <style lang="sass" scoped>
 @import './projectDetail.scss';
 </style>