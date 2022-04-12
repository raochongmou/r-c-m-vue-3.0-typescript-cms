<template>
  <div class="login-accout">
    <el-form label-width="60" :rules="rules" :model="account" ref="elFormRef">
      <el-form-item label="账号:" prop="name">
        <el-input size="small" v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input size="small" v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { rules } from "../config/account-config";
import localCache from "../../../utils";
import { ElForm } from "element-plus";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const account = reactive({
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? ""
    });
    // const elFormRef = ref();
    const elFormRef = ref<InstanceType<typeof ElForm>>();
    // const loginAccountRef = ref<InstanceType<typeof LoginAccount>>();
    const loginAction = (isKeepPwd: boolean) => {
      elFormRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPwd) {
            localCache.setCache("name", account.name);
            localCache.setCache("password", account.password);
          } else {
            // localCache.clearCache();
            localCache.deleteCache("name");
            localCache.deleteCache("password");
          }
          store.dispatch("loginState/accountLoginAction", { ...account });
        }
      });
    };
    return {
      account,
      rules,
      elFormRef,
      loginAction
    };
  }
});
</script>

<style></style>
