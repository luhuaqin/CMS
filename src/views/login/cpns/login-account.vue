<template>
  <div class="login-account">
    <el-form label-width="70px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账 号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密 码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../../config/account-config'
import type { ElForm } from 'element-plus'
import cache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: cache.getCache('account')?.name ?? '',
      password: cache.getCache('account')?.password ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const validateAccountForm = (isRememberPsw: boolean) => {
      formRef.value?.validate((valid) => {
        // 验证
        if (valid) {
          // 记住密码
          if (isRememberPsw) {
            cache.setCache('account', account)
          }

          // 登录
          store.dispatch('loginModule/accountLoginAction', {
            ...account
          })
        }
      })
    }

    return {
      account,
      rules,
      formRef,
      validateAccountForm
    }
  }
})
</script>

<style scoped></style>
