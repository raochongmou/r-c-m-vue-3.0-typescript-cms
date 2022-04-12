export const rules = {
  name: [
    { required: true, message: "请输入账号", trigger: "blur" },
    {
      pattern: /[a-z0-9]{5,8}$/,
      trigger: "blur",
      message: "账号必须是5-8位字母或数字组成"
    }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    {
      pattern: /[a-z0-9]{5,}$/,
      trigger: "blur",
      message: "密码必须是5位字母或数字以上的字符串组成"
    }
  ]
};

export const rulesPhone = {
  num: [
    { required: true, message: "请输入手机号码", trigger: "blur" },
    {
      patter: /^1(3|5|7|8|9)[0-9]{9,9}$/,
      message: "手机号码格式不对",
      trigger: "blue"
    }
  ],
  code: [
    { required: true, message: "请输入验证码", trigger: "blue" },
    {
      patter: /[0-9]{4,4}$/,
      message: "验证码必须是4位数字组成",
      trigger: "blur"
    }
  ]
};
