<template>
	<!--借款服务协议-->
	<div class="loanAgreement">
		<!--借款服务协议-->
		<div class="title">
			<el-row>
				<h3>借款服务协议</h3>
			</el-row>
		</div>
		<div class="content">
			<div class="img_box">

			</div>
			<div class="code">
				<el-row>
					<el-col :span="6" :offset="6">
						若您同意此服务协议，请点击获取验证码进行确认
					</el-col>
					<el-col :span="4">
						<el-input placeholder="请输入验证码"></el-input>
					</el-col>
					<el-col :span="2">
						<el-button type="primary">获取验证码</el-button>
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="footer">
			<el-button type="primary" @click="onSubmit">提交</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'loanAgreement',
		data() {
			return {
				msg:'',
			}
		},
		methods:{
			onSubmit(){
				this.$router.push({
					name: '借款合同确认',
					params: {
						currentOrder: this.msg
					}
				});
			}
		},
		created: function() {
			this.msg = this.$route.params.currentOrder;
		},
	}
</script>

<style lang='scss' scoped>
	.loanAgreement {
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