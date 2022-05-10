<template>
  <div class="login-phone">
    <el-form label-width="80px" :rules="rules" :model="handset" ref="formRef">
      <el-form-item label="手机号码" prop="phoneNum">
        <el-input v-model="handset.phoneNum" />
      </el-form-item>
      <el-form-item label="验证码" prop="validateCode">
        <div class="get-code">
          <el-input v-model="handset.validateCode" />
          <el-button type="primary" class="getButton">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../../config/phone-config'
import type { ElForm } from 'element-plus'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const handset = reactive({
      phoneNum: '',
      validateCode: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const validatePhoneLogin = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          store.dispatch('loginModule/phoneLoginAction', { ...handset })
        } else {
          console.log('验证失败，请检查填写的内容')
        }
      })
    }

    return {
      handset,
      rules,
      formRef,
      validatePhoneLogin
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  .getButton {
    margin-left: 10px;
  }
}
</style>
