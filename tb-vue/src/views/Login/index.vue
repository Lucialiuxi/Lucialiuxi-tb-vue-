<template>
  <div class="loginPage">
      <div class="formWrap">
        <h1 class="logo">Teambition</h1>
        <el-form
            :model="ruleForm" 
            status-icon 
            :rules="rules" 
            ref="ruleForm" 
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
                    v-model="ruleForm[item.id]" 
                    :autocomplete="item.autocomplete"
                ></el-input>
                <el-button
                    v-else
                    v-for="childItem in item.children"
                    :key="childItem.id"
                    :type="childItem.type" 
                    v-model="ruleForm[childItem.id]"
                    @click="childItem.clickFn"
                >{{childItem.name}}</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
        var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入密码'));
        }
      };

      return {
        ruleForm: {
            username: '',
            password: '',
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
                        clickFn: this.submitForm,
                    },
                    {
                        id: 'register',
                        name: '注册',
                        type: 'primary',
                        clickFn: this.submitForm,
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
      submitForm() {
        this.$refs?.ruleForm?.validate((valid) => {
          if (valid) {
            console.log(valid)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm() {
        this.$refs?.ruleForm?.resetFields();
      }
  }
}
</script>

<style lang="scss" scoped>
@import './login.scss';
</style>