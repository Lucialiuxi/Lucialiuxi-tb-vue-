<template>
   <section>
       <base-layout>
            <!-- <template v-slot:nav="slotProps">
                {{slotProps.layoutInfo.newKeyword}}
            </template> -->
            <template #nav="slotProps">
                {{slotProps.layoutInfo.newKeyword}}
            </template>
            <template v-slot:header>
                <div>
                    <h3>插槽内容 ===在header的插槽中</h3>
                    <navigation-link url="/login">
                        回到登录页
                        <div class="block">
                            <span class="demonstration">默认不区分颜色</span>
                            <el-rate v-model="value1"></el-rate>
                        </div>
                    </navigation-link>
                </div>
            </template>

            <template v-slot:default="{ btnName }">
                <div>
                    <h3>编译作用域 === 没有命名 分配到main下面得插槽</h3>
                    <submit-button>{{btnName}}</submit-button>
                    <navigation-link url="/login">
                        <div>{{user.name}}</div>
                    </navigation-link>
                </div>
            </template>
            
            <template v-slot:footer>
                <div>
                    <h3>后备内容== 在footer的插槽中</h3>
                    <submit-button></submit-button>
                    <submit-button>提交</submit-button>
                </div>
            </template>
       </base-layout>
        <base-layout v-slot="slotProps">
            独占插槽{{slotProps}}
        </base-layout>
        <!-- 同上 -->
        <base-layout #default="slotProps">
            独占插槽{{slotProps}}
        </base-layout>


        <todo-List>
            <template #todo="{ todo }">
                {{todo.name}}
                <p v-for="item in todos" :key="item.myId">{{item.workFileName}}</p>
            </template>
        </todo-List>
   </section>
</template>

<script lang="ts">
import navigationLink from './navigationLink.vue';
import submitButton from './submitButton.vue';
import baseLayout from './baseLayout.vue';
import todoList from './todoList.vue';

export default {
    name: 'Demo',
    components: {
        'navigation-link': navigationLink,
        'submit-button': submitButton,
        'base-layout': baseLayout,
        'todo-List': todoList,
    },
    data() {
        return {
            value1: null,
            user: {
                name: 'lucia',
            },
            todos: [
                {"myId":"f6dfdb48-bbdc-4352-b2af-9e2286202f67","username":"lucia","workFileName":"我是谁手动阀手动阀"},
                {"myId":"5a3fc8be-60c5-4b9e-a502-86514a589826","username":"lucia","workFileName":"123紫萼五年间"},
            ]
        }
    }
}
</script>
