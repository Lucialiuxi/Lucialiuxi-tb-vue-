<template>
  <div class="loginPage">
      <div class="formWrap">
        <h1 class="logo">Teambition</h1>
        <el-form
            :model="formValues" 
            status-icon 
            :rules="rules" 
            ref="formRef" 
            label-width="100px" 
            class="ruleForm"
        >
            <el-form-item
                :label="item.name" 
                :prop="item.prop"
                v-for="item in formConfig()"
                :key="item.id"
                :class="item.className"
            >
                <el-input
                    v-if="!item.children"
                    :type="item.type" 
                    v-model="formValues[item.id]" 
                    :autocomplete="item.autocomplete"
                ></el-input>
                <el-button
                    v-else
                    v-for="childItem in item.children"
                    :key="childItem.id"
                    :type="childItem.type" 
                    v-model="formValues[childItem.id]"
                    @click="childItem.clickFn"
                >{{childItem.name}}</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script lang="ts">
import { mapMutations } from 'vuex';
import { Session } from '@/utils/storage';

export default {
  name: 'Login',
  data() {
        var checkUsername = (rule: FormRuleType, value: string, callback: Function) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        callback();
      };
      var validatePassword = (rule: FormRuleType, value: number, callback: Function) => {
        if (!value) {
          return callback(new Error('请输入密码'));
        }
        callback();
      };

      return {
        formValues: {
            username: 'lucia',
            password: '123456',
        },
        rules: {
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
        },
      };
  },
  methods: {
      ...mapMutations('users', ['setUserInfo']),
      formConfig() {
        return [
              {
                  id: 'username',
                  name: '用户名',
                  prop: 'username',
                  type: 'text',
                  autocomplete: 'off',
              },
              {
                  id: 'password',
                  name: '密码',
                  prop: 'password',
                  type: 'password',
                  autocomplete: 'off',
              },
              {
                  type: 'buttons',
                  children: [
                    {
                        id: 'login',
                        name: '登录',
                        type: 'primary',
                        clickFn: this.loginHandle,
                    },
                    {
                        id: 'register',
                        name: '注册',
                        type: 'primary',
                        clickFn: this.registerHandle,
                    },
                    {
                        id: 'reset',
                        name: '重置',
                        type: 'default',
                        clickFn: this.resetForm
                    },
                  ]
              }
        ]
      },
      commonHandle(type: 'login' | 'register') {
        const formRef: any = this.$refs?.formRef;
        const _this = this;
        console.log(this.$router)
        formRef?.validate(function(valid: boolean){
          if (valid) {
            _this.$RequestServer.userApi[type](_this.formValues).then( function(res: DataType){
              const { code, success } = res;
                if (code === 200 && success) {
                   _this.setUserInfo(_this.formValues);
                   (Session as any).set('userInfo', {
                     ..._this.formValues
                   });
                   _this.$router.push({
                     path: "/file",
                   })
                }
            });
          } else {
            return false;
          }
        });
      },
      loginHandle() {
        this.commonHandle('login');
      },
      registerHandle() {
        this.commonHandle('register');
      },
      resetForm() {
        const formRef: any = this.$refs?.formRef;
        formRef?.resetFields();
      }
  }
}
</script>

<style lang="scss" scoped>
@import './login.scss';
</style>