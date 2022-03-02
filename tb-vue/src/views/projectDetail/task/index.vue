<template>
    <ul class="tasksWrap">
        <li class="taskItem">任务1</li>
        <li class="taskItem">任务12</li>
        <li class="taskItem">任务13</li>
        <li class="taskItem">任务14</li>
    </ul>
</template>

<script>
export default {
    name: "task",
    beforeCreate() {

    },
    methods: {
        // 获取当前项目下的任务
        getCurrentTaskItems() {

        },
    },
}
</script>

<style lang="sass" scoped>
 @import './task.scss';
 </style>