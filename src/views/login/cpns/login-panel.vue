<template>
  <div class="login-panel">
    <h3 class="title">后台管理系统</h3>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div v-if="currentTab === 'account'" class="password-opt">
      <el-checkbox v-model="isRememberPsw">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isRememberPsw = ref(false)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const currentTab = ref<string>('account')
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()

    const handleLoginClick = () => {
      if (currentTab.value == 'account') {
        accountRef.value?.validateAccountForm(isRememberPsw.value)
      } else {
        phoneRef.value?.validatePhoneLogin()
      }
    }

    return {
      isRememberPsw,
      accountRef,
      currentTab,
      phoneRef,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 20%;
  .title {
    text-align: center;
  }
  .custom-tabs-label {
    span {
      margin-left: 5px;
    }
  }
  .password-opt {
    display: flex;
    justify-content: space-between;
    margin-top: 3px;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
