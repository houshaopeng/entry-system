<template>
	<div class="login">
		<el-form :model="ruleForm"  ref="ruleForm" class="demo-ruleForm">
			<h1>商户登录</h1>
			<el-form-item>
				<el-input :maxlength="11" @blur="checkTel" v-model="ruleForm.username">
					<template slot="prepend">
						<img src="../assets/telephone (2).png" alt="手机" />
					</template>
				</el-input>

			</el-form-item>
			<el-form-item style="position: relative;">
				<el-input @change="Codechange" :maxlength="6" v-model="ruleForm.codeID" :disabled="editCode">
					<template slot="prepend">
						<img src="../assets/password.png" alt="密码" />
					</template>
				</el-input>
				<el-button type="primary" :disabled="getcodeshow" @click="getCode" style="position: absolute;top:0;right:0;border-radius: 0 4px 4px 0;">
					{{getcode}}
				</el-button>
			</el-form-item>
			<el-form-item v-if="isFlag">
				<el-checkbox @click="dialogFormVisible = true" v-model="checked"></el-checkbox>
				<el-button type="text" @click="dialogFormVisible = true">我已认真阅读并同意《注册协议》</el-button>
				<el-dialog title="咨询协议" :visible.sync="dialogFormVisible">
					<div slot="footer" class="dialog-footer" style="text-align:center;">
						<el-button type="primary" @click="dialogFormVisible = false,checked = true">同意</el-button>
					</div>
				</el-dialog>
			</el-form-item>
			<el-form-item>
				<el-button class="btn_login" :disabled="dislogin" type="primary" @click="login">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				editCode:true,
				isFlag: false,
				checked: false,
				dialogFormVisible: false,
				getcode: "获取验证码",
				getCodeTime:0,
				getcodeshow: false,
				dislogin: true,
				ruleForm: {
					username: '',
					codeID: '',
				},
				flagArr: [],
				msg: "",
				token: ""
			};
		},
		methods: {
			checkTel() {
				if(!this.ruleForm.username) {
					this.$message({
							message: "手机号不能为空",
							type: 'error'
						})
				} else if(!/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i.test(this.ruleForm.username)) {
					this.$message({
							message: "请输入正确手机号",
							type: 'error'
						})
				}
			},
			Codechange() {
				if(this.ruleForm.codeID.length) {
					this.dislogin = false;
				} else {
					this.dislogin = true;
				}
			},
			getCode() { //获取验证码
				if(!/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i.test(this.ruleForm.username)) {
					this.$message({
						message: "请输入正确手机号",
						type: 'error'
					})
					return false;
				}else{
				var countdown = 60;
				this.editCode = false;
				this.getCodeTime++;
				if(this.getCodeTime>1){
					this.this.getCodeTime=2;
				}
				this.$http.post(process.env.API + "/getMessageCode", {
					"userId": this.ruleForm.username,
					"getMessageCodeFlag":this.getCodeTime
				}).then((res) => {
					if(res.data.code == '0000') {
						if(res.data.data.isFlag == "1") {
							this.isFlag = true;
						} else if(res.data.data.isFlag == "2") {
							this.isFlag = false;
						}
						this.getcodeshow = true;
						var timer = setInterval(() => {
								if(countdown > 0) {
									countdown--;
									this.getcode = "再次获取" + countdown + "s";
								} else if(countdown == 0) {
									clearInterval(timer)
									this.getcode = "再次获取"
									this.getcodeshow = false;
								}
							},1000)
						} else {
							this.$message({
								message: res.data.messages,
								type: 'error'
							})
						}
					},(res)=>{
						this.$message({
							message: res.data.messages,
							type: 'error'
						})
					})
				}
			},
			// 申请编号
			applicationNumber() {
				this.$http.post(process.env.API + "/terminal/getNumber", "", {
					headers: {
						"x-sljr-session-token": this.token,
					}
				}).then((res) => {
					if(res.data.code == '000000') {
						this.msg = res.data.data.requestNo;
						sessionStorage.setItem('userInfo', JSON.stringify({
							userToken: this.token,
							telPhone: this.ruleForm.username,
							requestNo: this.msg
						}));
						this.stepLogin();
					} else {
						this.$message({
							type: "error",
							message: res.data.messages
						})
					}

				}, (res) => {
					this.$message({
						message: res.data.messages,
						type: 'error'
					})
				})
			},
			stepLogin() {
				this.$http({
					method: "POST",
					url: process.env.API + "/terminal/stepLogin",
					headers: {
						"x-sljr-session-token": this.token,
					},
					body: {
						"userId": this.ruleForm.username,
						"requestNo": this.msg
					}
				}).then((res) => {
					if(res.data.code == "000000") {
						console.log(res.data.data)
						this.flagArr = res.data.data.list;
						for(let i = 0; i < this.flagArr.length; i++) {
							if(this.flagArr[i].flag) {
								this.$router.push({
									path: this.flagArr[i].value
								});
								return false;
							}
						}
					} else {
						this.$message({
							type: "error",
							message: res.data.messages
						})
					}
				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})
			},
			login() { 								//登录
				//验证手机号码
				if(!/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i.test(this.ruleForm.username)){
					this.$message({
						type: "error",
						message: "请输入正确的手机号码"
					})
				//验证码输入提示
				}else if(!/^\d{6}$/.test(this.ruleForm.codeID)){
					this.$message({
						type: "error",
						message: "请输入正确的验证码"
					})
				}else{
					//手机号验证码输入都正确
					if(!this.isFlag) {
						this.gologin()
					}else if(this.isFlag && this.checked) {
						this.isFlag = false;
						this.gologin()
					}else {
						this.$message({
							type: "error",
							message: "请勾选认真阅读并同意《注册协议》"
						})
					}
				}

			},
			gologin() {

				this.$http({
					method: "POST",
					url: process.env.API + "/login",
					body: {
						"userId": this.ruleForm.username,
						"password": this.ruleForm.codeID
					}
				}).then((res) => {
					if(res.data.code == "000000") {
						this.token = res.data.data["x-sljr-session-token"];
						this.applicationNumber();
						sessionStorage.setItem('userInfo', JSON.stringify({
							userToken: res.data.data["x-sljr-session-token"],
							telPhone: this.ruleForm.username,
							requestNo: this.msg
						}));
					} else {
						this.$message({
							type: "error",
							message: "请输入正确的验证码"
						})
					}
				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
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
		},
		mounted: function() {

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