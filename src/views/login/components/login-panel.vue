<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="activeName">
      <el-tab-pane label="账号登录" name="account">
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="phone">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="loginPhoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="forgetter-pwd">
      <el-checkbox size="small" v-model="isKeepPwd">记住密码</el-checkbox>
      <el-link :underline="false" type="danger">忘记密码</el-link>
    </div>
    <el-button type="primary" class="immediate-login" @click="handleLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";
export default defineComponent({
  name: "LoginPanel",
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // const activeName = ref("phone");
    const activeName = ref("account");
    const isKeepPwd = ref(true);
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>();
    const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>();
    const handleLogin = () => {
      if (activeName.value === "account") {
        loginAccountRef.value?.loginAction(isKeepPwd.value);
      } else {
        loginPhoneRef.value?.loginAction();
      }
    };
    return {
      isKeepPwd,
      handleLogin,
      activeName,
      loginAccountRef,
      loginPhoneRef
    };
  }
});
</script>

<style scoped>
.login-panel {
  width: 320px;
}
.login-panel .title {
  text-align: center;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.el-icon >>> {
  top: 2px;
}
/* .el-checkbox:last-of-type >>> {
  height: 25px;
} */
.forgetter-pwd {
  display: flex;
  justify-content: space-between;
}
.immediate-login {
  width: 100%;
}
</style>
