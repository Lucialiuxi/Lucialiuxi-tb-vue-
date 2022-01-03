<template>
    <div class="main-page">
        <!-- 头部导航栏 -->
        <div class="nav-bar-wrap">
            <div class="nav-bar">
                <div class="left-area">
                    <i class="el-icon-search"></i>
                    <el-select
                        v-model="value"
                        multiple
                        filterable
                        remote
                        reserve-keyword
                        clearable
                        placeholder="搜索个人项目"
                        :remote-method="remoteMethod"
                        :loading="loading"
                        class="search-file-box"
                        size="small"
                    >
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="right-area">
                    <span class="greeting-text">你好, {{userInfo.username}} ~~</span>
                    <el-button type="text" size="medium">登出</el-button>
                    <el-avatar icon="el-icon-user-solid"></el-avatar>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('files/');

export default {
    name: "layout",
    data() {
        return {
            loading: false,
            value: [],
            userInfo: {},
            options: [],
        }
    },
    methods: {
        remoteMethod(query: string){
            this.fileData.filter((item: fileDataItemType) => {
                if (item.fileName.indexOf(query) !== -1) {
                    return true;
                }
            });
            console.log(query, this.fileData)
        },
    },
    computed: {
        ...mapState(['fileData']),
    },
}
</script>

<style lang="scss" scoped>
@import './layout.scss';
</style>