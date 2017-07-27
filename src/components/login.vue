<template>
	<div class="login">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
			<h1>商户登录</h1>
			<el-form-item prop="tel">
				<el-input :maxlength="11" v-model="ruleForm.tel">
					<template slot="prepend"><img src="../assets/telephone (2).png" alt="手机" /></template>
				</el-input>

			</el-form-item>
			<el-form-item prop="name">
				<el-input v-model="ruleForm.password">
					<template slot="prepend"><img src="../assets/password.png" alt="密码" /></template>
					<el-button slot="append" type="primary">获取验证码</el-button>
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button class="btn_login" type="primary">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					tel: '',
					password: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				rules: {
					name: [{
						required: true,
						message: '请输入活动名称',
						trigger: 'blur'
					}, {
						min: 3,
						max: 5,
						message: '长度在 3 到 5 个字符',
						trigger: 'blur'
					}],
					tel: [{
							required: true,
							message: '用户名不能为空',
						},
						{
							type: 'number',
							message: '用户名必须为数字值',
						}
					],
					date1: [{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}],
					date2: [{
						type: 'date',
						required: true,
						message: '请选择时间',
						trigger: 'change'
					}],
					type: [{
						type: 'array',
						required: true,
						message: '请至少选择一个活动性质',
						trigger: 'change'
					}],
					resource: [{
						required: true,
						message: '请选择活动资源',
						trigger: 'change'
					}],
					desc: [{
						required: true,
						message: '请填写活动形式',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style lang='scss' scoped>
	.login {
		.demo-ruleForm {
			margin: 100px auto;
			max-width: 500px;
			h1 {
				margin: 20px 0;
			}
			.btn_login {
				width: 100%;
				margin-top: 30px;
			}
		}
	}
</style>