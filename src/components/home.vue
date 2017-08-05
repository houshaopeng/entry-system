<template>
	<div class="home">
		<div class="fix_top">
			<div class="header">
				<h2>终端机借款进件系统</h2>
				<el-button class="exit" @click="loginOut">退出</el-button>
			</div>
			<div class="link_btn">
				<el-button @click="$router.push({path: '/storeMsg'})" :disabled = "storeMsg">门店信息录入</el-button> ——————
				<el-button @click="$router.push({path: '/imageFileUpload'})" :disabled = "imageFileUpload">影像资料上传</el-button> ——————
				<el-button @click="$router.push({path: '/imageFileUpload2'})" :disabled = "imageFileUpload2">影像资料上传</el-button> ——————
				<el-button @click="$router.push({path: '/loanContract'})" :disabled = "loanContract">借款合同确认</el-button>
			</div>
			<hr />
		</div>
		<div class="container">
			<el-col :span="24">
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
			</el-col>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				storeMsg:null,
				imageFileUpload:null,
				imageFileUpload2:null,
				loanContract:null,
			}
		},
		methods: {
			loginOut() {
				this.$http({
					method: "POST",
					url: process.env.API+"/terminal/exit",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					}
				}).then((res) => {
					if(res.data.code == "000000") {
						this.$router.push({
							path: "/login"
						})
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
			// 路由接口调试
			routerApi() {
				this.msg1 = JSON.parse(sessionStorage.getItem("userInfo")).requestNo;
				var level=4;
				this.$http({
					method: "POST",
					url: process.env.API + "/terminal/step",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body: {
						"userId": JSON.parse(sessionStorage.getItem("userInfo")).telPhone,
						"level": level,
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo
					}
				}).then((res) => {
					if(res.data.code == "000000") {
						this.storeMsg = res.data.data.list[0].flag;
						this.imageFileUpload = res.data.data.list[1].flag;
						this.imageFileUpload2 = res.data.data.list[2].flag;
						this.loanContract = res.data.data.list[3].flag;
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
				});
			},
			// 登录时回到待提交接口
			stepLogin() {
				this.$http({
					method: "POST",
					url: process.env.API+"/terminal/stepLogin",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body: {
						'userId': JSON.parse(sessionStorage.getItem("userInfo")).telPhone,
						'request': JSON.parse(sessionStorage.getItem("userInfo")).requestNo,
					}
				}).then((res) => {
					if(res.data.code=="000000"){
						console.log(res.data.data.list)
						this.storeMsg = res.data.data.list[0].flag;
						this.imageFileUpload = res.data.data.list[1].flag;
						this.imageFileUpload2 = res.data.data.list[2].flag;
						this.loanContract = res.data.data.list[3].flag;
					}
				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})
			}
		},
		mounted: function() {
			// this.stepLogin();
			this.routerApi();
		}
	}
</script>

<style lang='scss' scoped>
	.home {
		.fix_top {
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			background-color: #fff;
			z-index: 200;
		}
		.header {
			height: 100px;
			line-height: 100px;
			background-color: #20a0ff;
			position: relative;
			h2 {
				color: #ffffff;
			}
			.exit {
				position: absolute;
				top: 30px;
				right: 50px;
			}
		}
		.link_btn {
			margin: 20px 0;
		}
		.container {
			margin-top: 216px;
			padding: 0 30px;
		}
	}
</style>