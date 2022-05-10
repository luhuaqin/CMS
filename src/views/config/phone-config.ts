// 校验
export const rules = {
  phoneNum: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern: /^[0-9]{11}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  validateCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    {
      pattern: /^[0-9]{6}$/,
      message: '请输入正确的验证码',
      trigger: 'blur'
    }
  ]
}
