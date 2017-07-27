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
			<el-button type="primary">提交</el-button>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isAgree: ''
			}
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