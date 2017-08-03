<template>
	<!--借款协议-->
	<div class="loanContract">
		<div class="title">
			<el-row>
				<h3>借款协议</h3>
			</el-row>
		</div>
		<div class="content">
			<div class="img_box">

			</div>
			<div class="code">
				<el-row>
					<el-checkbox-group v-model="isAgree">
						<el-checkbox label="我已认真阅读并同意《借款协议》" name="type"></el-checkbox>
					</el-checkbox-group>
				</el-row>
			</div>
		</div>
		<div class="footer">
			<el-button type="primary" @click="onSubmit">确认借款</el-button>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isAgree: '',
			}
		},
		methods: {
			// 路由接口调试
			routerApi() {
				console.log(JSON.parse(sessionStorage.getItem("userInfo")).requestNo)
				this.$http({
					method: "POST",
					url: process.env.API+"/terminal/step",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body: {
						"userId": JSON.parse(sessionStorage.getItem("userInfo")).telPhone, // TODO    手机号码

						"level": "4",
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo // 请求流水号
					}
				}).then((res) => {
					if(res.data.dara == "000000") {
						alert(666)
					}
				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})
			},
			// 项目状态查询
			initStatus(){
				this.$http({
					method:"POST",
					url:process.env.API+"/terminal/queryProject",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body:{
						
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo,         //  申请编号
					}
				}).then((res)=>{
					if(res.data.code=="000000"){
						// TODO
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
			onSubmit() {
				if(this.isAgree) {
					this.$http({
						method: "POST",
						url: process.env.API+"/terminal/loanSubmit",
						headers: {
							"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
						},
						body: {
							"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo
						}
					}).then((res) => {
						if(res.data.code == '000000') {
							console.log(res)
						} else {
							this.$message({
								message: res.data.messages,
								type: 'error'
							})
						}

					}, (res) => {
						this.$message({
							message: res.data.messages,
							type: 'error'
						})
					})
				} else {
					this.$message({
						type: "error",
						message: "请确认是否已确认同意本协议"
					})
				}
			},
		},
		mounted: function() {
			this.routerApi();
			this.initStatus();
		}
	}
</script>

<style lang='scss' scoped>
	.loanContract {
		.title {
			margin-bottom: 20px;
		}
		.content {
			.img_box {
				width: 80%;
				height: 400px;
				margin: 0 auto;
				background-color: #666666;
			}
			.code {
				margin: 30px;
				line-height: 36px;
			}
		}
		.footer {
			margin: 30px 0;
			.el-button {
				width: 150px;
			}
		}
	}
</style>