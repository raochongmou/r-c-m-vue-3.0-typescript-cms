<template>
  <div class="login-accout">
    <el-form label-width="60" :rules="rulesPhone" :model="phone" ref="phoneRef">
      <el-form-item label="手机号:" prop="num">
        <el-input size="small" v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码:" prop="code">
        <div class="phone-code">
          <el-input size="small" v-model="phone.code" />
          <el-button size="small" type="primary">获取</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { rulesPhone } from "../config/account-config";
import { ElForm } from "element-plus";

export default defineComponent({
  name: "LoginAccount",
  setup() {
    const phoneRef = ref<InstanceType<typeof ElForm>>();
    const phone = reactive({
      num: "",
      code: ""
    });
    const loginAction = () => {
      phoneRef.value?.validate((valid) => {
        if (valid) {
          console.log("valid");
        }
      });
    };
    return {
      phone,
      rulesPhone,
      loginAction
    };
  }
});
</script>

<style lang="less" scoped>
.phone-code {
  display: flex;
  .el-button {
    margin-left: 8px;
  }
}
</style>
