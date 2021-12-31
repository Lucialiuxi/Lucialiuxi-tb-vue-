<template>
    <ul>
        <li
            v-for="item in list"
            :key="item.id"
        >
            <slot name="todo" :todo="item">
                <!-- 后备内容 -->
                {{ item.name }}
            </slot>
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    data() {
        return {
            list: [
                {"fileId":34604376564880,"id":1640239963134,"subTaskCount":0,"index":0,"name":"待处理"},
                {"fileId":34604376564880,"id":1640236750004,"subTaskCount":0,"index":2,"name":"已完成", isComplete: true},
                {"fileId":34604342588638,"id":1640240169590,"subTaskCount":0,"index":0,"name":"待处理"},
                {"fileId":34604342588638,"id":1640233693731,"subTaskCount":0,"index":1,"name":"进行中"}
            ]
        }
    }
}
</script>