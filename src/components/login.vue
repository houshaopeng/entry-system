<template>
	<div class="login">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
			<h1>商户登录</h1>
			<el-form-item prop="username">
				<el-input :maxlength="11" v-model="ruleForm.username">
					<template slot="prepend"><img src="../assets/telephone (2).png" alt="手机" /></template>
				</el-input>

			</el-form-item>
			<el-form-item prop="codeID">
				<el-input :maxlength="6" v-model="ruleForm.codeID">
					<template slot="prepend"><img src="../assets/password.png" alt="密码" /></template>
					<el-button slot="append" type="primary" @click="getCode">获取验证码</el-button>
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button class="btn_login" type="primary" @click = "login">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			var checkTel = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('手机号不能为空'));
				} else if(!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(value)) {
					return callback(new Error('请输入正确手机号'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					username: '',
					codeID: '',
				},
				rules: {
					username: [{
						validator: checkTel,
						trigger: 'blur'
					}],
					codeID: [{
							required: true,
							message: '请输入验证码',
							trigger: 'blur'
						},
						{
							min: 6,
							max: 6,
							message: '请输入正确验证码',
							trigger: 'blur'
						}
					],
				}
			};
		},
		methods: {
			getCode(){								//获取验证码
				this.$http.post("/api/getMessageCode", {
					"userId":this.ruleForm.username
				}).then((res) => {
					console.log(res)
					if(res.data.code == '000000') {
						//获取验证码成功
					} else {}

				}, (res) => {
					this.$message({
						message: res.data.messages,
						type: 'error'
					})
				})
			},
			login(){								//登录
				this.$http({
					method:"POST",
					url:"/api/login",
					body:{
						"userId":this.ruleForm.username,
						"password":this.ruleForm.codeID
					}
				}).then((res)=>{
					if(res.data.code == "000000"){
						sessionStorage.setItem('userInfo', JSON.stringify({userToken:res.data.data.token}));
						//需保存token 成功后跳转
						// this.$router.push({path:"/storeMsg"})
					}else{
						this.$message({
							type:"error",
							message:res.data.messages
						})
					}
				},(res)=>{
					this.$message({
						type:"error",
						message:res.data.messages
					})
				})
			},
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