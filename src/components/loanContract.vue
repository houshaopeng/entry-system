<template >
	<div>
		<!--借款协议-->
		<div class="link_btn">
				<el-button @click="$router.push({path: '/storeMsg'})" :disabled = "storeMsg">门店信息录入</el-button> ——————
				<el-button @click="$router.push({path: '/imageFileUpload'})" :disabled = "imageFileUpload">影像资料上传</el-button> ——————
				<el-button @click="$router.push({path: '/imageFileUpload2'})" :disabled = "imageFileUpload2">影像资料上传</el-button> ——————
				<el-button @click="$router.push({path: '/loanContract'})" :disabled = "loanContract">借款合同确认</el-button>
		</div>
        <hr />
		<div class="loanContract" v-loading="loading" element-loading-text="资料正在审核中，请耐心等待">
			<div class="loanContract">
				<div class="title">
					<el-row>
						<h3>借款协议</h3>
					</el-row>
				</div>
				<div class="content">
					<div class="img_box">
						<iframe :src="url" width="100%" height="400">
						</iframe>
					
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
					<el-button type="primary" @click="onSubmit" :disabled="loading">确认借款</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isAgree: '',
				url:"",
				loading:true,
				storeMsg:null,
				imageFileUpload:null,
				imageFileUpload2:null,
				loanContract:null,
			}
		},
		methods: {
			// 路由接口调试
			routerApi() {
				//console.log(JSON.parse(sessionStorage.getItem("userInfo")).requestNo)
				this.$http({
					method: "POST",
					url: process.env.API + "/terminal/step",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body: {
						"userId": JSON.parse(sessionStorage.getItem("userInfo")).telPhone, // TODO    手机号码

						"level": "4",
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo // 请求流水号
					}
				}).then((res) => {
					if(res.data.code == "000000") {
						console.log(res.data)
					}
				},(res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})
			},
			// 项目状态查询
			initStatus() {
				this.$http({
					method: "POST",
					url: process.env.API + "/terminal/queryProject",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body: {

						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo, //  申请编号
					}
				}).then((res) => {
					if(res.data.code == "000000") {
						this.url = res.data.data.h5Url;
						this.loading = false;
					} else {
						this.$message({
							type: "info",
							message: "资料正在审核中，请耐心等待"
						})
					}
				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})
			},
			onSubmit() {
				if(this.isAgree) {
					this.$http({
						method: "POST",
						url: process.env.API + "/terminal/loanSubmit",
						headers: {
							"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
						},
						body: {
							"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo
						}
					}).then((res) => {
						this.$message({
							message: res.data.messages,
							type: 'success'
						});

						/*if(res.data.code == '000000') {
							this.$message({
								message: res.data.messages,
								type: 'error'
							})
						} else {
							this.$message({
								message: res.data.messages,
								type: 'error'
							})
						}*/
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
			// 路由接口调试
			routerDisable() {
				this.$http.get(process.env.API + "/terminal/getTerminalType",{
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					params: {
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo,         //  申请编号 
					}
				}).then((res)=>{
					if(res.data.code=="000000"){
						if(res.data.data.status == 1){
							this.storeMsg=false;
							this.imageFileUpload=true;
							this.imageFileUpload1=true;
							this.storeMsg=true;
						}else if(res.data.data.status == 2){
							this.storeMsg=false;

							this.imageFileUpload=false;
							this.imageFileUpload2=true;
							this.loanContract=true;
						}else if(res.data.data.status == 3){
							this.storeMsg=false;
							this.imageFileUpload=false;
							this.imageFileUpload2=false;
							this.loanContract=true;
						}else if(res.data.data.status == 4){
							this.storeMsg=false;
							this.imageFileUpload=false;
							this.imageFileUpload2=false;
							this.loanContract=false;
						}
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
		},
		mounted: function() {
			this.routerApi();
			this.initStatus();
			this.routerDisable();
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