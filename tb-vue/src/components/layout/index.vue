<template>
    <div class="main-page">
        <!-- 头部导航栏 -->
        <div class="nav-bar-wrap">
            <div class="nav-bar">
                <div class="left-area">
                    <i class="el-icon-search"></i>
                    <el-select
                        v-model="value"
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
                            :label="item.fileName"
                            :value="item.fileId"
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
import { mapState, mapMutations } from 'vuex';
import { Session } from '@/utils/storage';

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
    mounted() {
        setTimeout(() => {
            if (!this.username) {
                const userInfo = (Session as any).get('userInfo');
                this.setUserInfo(userInfo);
                this.userInfo = userInfo;
            }
        });
        
    },
    filters: {
        
    },
    methods: {
        ...mapMutations('users', ['setUserInfo']),
        remoteMethod(query: string){
            if (query) {
                this.options = this.fileData.filter(({ fileName }: fileDataItemType) => {
                    const parttern = new RegExp("[A-Za-z]+");
                    if(
                        parttern.test(query) &&
                        fileName.toLowerCase().indexOf(query.toLowerCase()) !== -1
                    ) {
                        return true;
                    } else if (fileName.indexOf(query) !== -1) {
                        return true;
                    }
                    return false;
                });
            } else {
                this.options = [];
            }
        },
    },
    computed: {
        ...mapState('files',['fileData']),
        ...mapState('users',['username']),
    },
}
</script>

<style lang="scss" scoped>
@import './layout.scss';
</style>