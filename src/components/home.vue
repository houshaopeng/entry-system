<template>
	<div class="home">
		<div class="fix_top">
			<div class="header">
				<h2>终端机借款进件系统</h2>
				<el-button class="exit">退出</el-button>
			</div>
			<div class="link_btn">
				<el-button @click="$router.push({path: '/storeMsg'})">门店信息录入</el-button> ——————
				<el-button @click="$router.push({path: '/imageFileUpload'})">影像资料上传</el-button> ——————
				<el-button @click="$router.push({path: '/loanAgreement'})">借款协议服务确认</el-button> ——————
				<el-button @click="$router.push({path: '/loanContract'})">借款合同确认</el-button>
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
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style lang='scss' scoped>
	.home {
		.fix_top{
			width:100%;
			position: fixed;
			top:0;
			left:0;
			background-color: #fff;
			z-index: 2;
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