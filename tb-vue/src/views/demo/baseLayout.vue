<template>
    <div lclass="base-layout-container">
        <nav>
            关键字: 
            <slot name="nav" :layoutInfo="layoutInfo">{{layoutInfo.keyword}}</slot>
        </nav>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot :btnName="btnName">123</slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script lang="ts">
export default {
    name: 'base-layout',
    data() {
        return {
            layoutInfo: {
                keyword: 'lastYear',
                newKeyword: 'newYear',
            },
            btnName: '删除',
        }
    }
}
</script>