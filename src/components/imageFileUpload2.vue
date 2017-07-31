<template>
	<!--资料上传页面2-->
	<div class="imageFileUpload2">
		<!--影像文件上传-->
		<div>
			<div class="title">
				<el-row>
					<h3>影像文件上传</h3>
				</el-row>
			</div>
			<div class="content">
				<el-row>

					<!--个人资料-->
					<el-col :span="24">
						<div class="img_title">
							<span style="margin: 0 20px 0 24px;">经营情况证明：</span>
							<vue-file-upload url="/terminal-oper/file/upload" ref="vueFileUploader" v-bind:events='cbEvents' v-bind:filters="filters" v-bind:request-options="reqopts" v-on:onAdd="onAddItem">
							</vue-file-upload>
							<span v-if="!files.length">未选择任何文件</span>
							<span v-else>一共选择{{files.length}}个文件</span>
							<input type="button" value="清空图片" @click="clearAll" class="clear_buttton" />
							<div>
								<div class="no_img1">
									<span>身份证正面</span>
								</div>
								<div class="no_img1">
									<span>身份证反面</span>
								</div>
								<div class="no_img1">
									<span>手持身份证</span>
								</div>
								<div class="no_img1">
									<span>身份证正面</span>
								</div>
								<div class="no_img1">
									<span>身份证反面</span>
								</div>
								<div class="no_img1">
									<span>手持身份证</span>
								</div>
							</div>
						</div>
					</el-col>

					<!--销售产品资料-->
					<el-col :span="24">
						<div class="img_title">
							<span style="margin: 0 20px 0 24px;">收入证明：</span>
							<vue-file-upload url="/terminal-oper/file/upload" ref="vueFileUploader" v-bind:events='cbEvents' v-bind:filters="filters" v-bind:request-options="reqopts" v-on:onAdd="onAddItem">
							</vue-file-upload>
							<span v-if="!files.length">未选择任何文件</span>
							<span v-else>一共选择{{files.length}}个文件</span>
							<input type="button" value="清空图片" @click="clearAll" class="clear_buttton" />
							<div>
								<div class="no_img1">
									<span>质检报告复印件</span>
								</div>
								<div class="no_img1">
									<span>商标注册受理书</span>
								</div>
								<div class="no_img1">
									<span>产品清单</span>
								</div>
								<div class="no_img1">
									<span>质检报告复印件</span>
								</div>
								<div class="no_img1">
									<span>商标注册受理书</span>
								</div>
								<div class="no_img1">
									<span>产品清单</span>
								</div>
							</div>
						</div>
					</el-col>

					<!--企业经营证明文件-->
					<el-col :span="12">
						<div class="img_title">
							<span style="margin: 0 20px 0 24px;">居住证明(任选一个)：</span>
							<vue-file-upload url="/terminal-oper/file/upload" ref="vueFileUploader" v-bind:events='cbEvents' v-bind:filters="filters" v-bind:request-options="reqopts" v-on:onAdd="onAddItem">
							</vue-file-upload>
							<span v-if="!files.length">未选择任何文件</span>
							<span v-else>一共选择{{files.length}}个文件</span>
							<input type="button" value="清空图片" @click="clearAll" class="clear_buttton" />
							<div>
								<div class="no_img1">
									<span>居住证明</span>
								</div>
							</div>
						</div>
					</el-col>

					<!--本人在店铺内照片-->
					<el-col :span="12">
						<div class="img_title">
							<span style="margin: 0 20px 0 24px;">办公场所证明(任选一个)：</span>
							<vue-file-upload url="/terminal-oper/file/upload" ref="vueFileUploader" v-bind:events='cbEvents' v-bind:filters="filters" v-bind:request-options="reqopts" v-on:onAdd="onAddItem">
							</vue-file-upload>
							<span v-if="!files.length">未选择任何文件</span>
							<span v-else>一共选择{{files.length}}个文件</span>
							<input type="button" value="清空图片" @click="clearAll" class="clear_buttton" />
							<div>
								<div class="no_img1">
									<span>办公场所证明</span>
								</div>
								<div class="no_img1">
									<span>办公场所证明</span>
								</div>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="footer">
				<el-button type="primary" @click="onSubmit">提交</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import VueFileUpload from './components/vue-file-upload.vue'
	import Modal from './components/modal.vue'
	export default {
		name: 'imageFileUpload2',
		data() {
			return {
				msg: '',
				//图片上传插件部分 start
				//过滤器回调
				files: [],
				filters: [{
					name: "imageFilter",
					fn(file) {
						if(/^[A-Z]+$/.test(file.name.split(".")[1])) {
							return false;
						} else {
							var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
							return '|jpg|png|jpeg|bmp|gif|pdf|vnd.openxmlformats-officedocument.wordprocessingml.document|msword|'.indexOf(type) !== -1;
						}

					}
				}],
				//事件回调
				cbEvents: {
					onCompleteUpload: (file, response, status, header) => {
						this.routerTogg++;
						if(this.routerTogg == this.files.length && this.routerJump) {
							this.fullscreenLoading = false;
							this.$router.push({
								path: '/channelOffering'
							});
						}
					},
					onAddFileSuccess: (file) => {}
				},
				reqopts: {
					formData: {
						'applicationNo': "555",
					},
					responseType: 'json',
					withCredentials: false
				},
				//图片上传插件部分 end
			}
		},
		methods: {
			//图片上传插件部分 start
			onStatus(file) {
				if(file.isSuccess) {
					return "上传成功";
				} else if(file.isError) {
					return "上传失败";
				} else if(file.isUploading) {
					return "正在上传";
				} else {
					return "待上传";
				}
			},
			onPreview(file) {
				var src = window.URL.createObjectURL(file.file);
				return src;
			},
			onAddItem(files) {
				this.files = files;
			},
			uploadItem(file) {
				file.upload();
			},
			deleteItem(file) {
				file.remove();
			},
			uploadAll() {
				this.$refs.vueFileUploader.uploadAll();
			},
			clearAll() {
				this.$refs.vueFileUploader.clearAll();
			},
			// 删除图片(提交前删除)
			delectImg() {
				this.$http({
					method: "POST",
					url: "/api/terminal/deleteImg",
					body: {
						"imgSrcs": "", // 图片src地址(多张逗号拼接)
						"type": "", //
						"userId": "", // 用户唯一标识
						"requestNo": "", // 申请编号
					}
				}, {
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					}
				}).then((res) => {
					console.log(res)
				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})
			},
			//图片上传插件部分 end
			onSubmit() {
				this.$router.push({
					name: '借款服务协议确认',
					params: {
						currentOrder: this.msg
					}
				});
			},
		},
		created: function() {
			this.msg = this.$route.params.currentOrder;
		},
		components: {
			VueFileUpload,
			Modal
		},
	}
</script>

<style lang='scss' scoped>
	.imageFileUpload2 {
		.title {
			margin-bottom: 20px;
			h3 {
				float: left;
			}
		}
		.img_title {
			width: 100%;
			text-align: left;
		}
		.clear_buttton {
			border: none;
			outline: none;
			position: relative;
			overflow: hidden;
			display: inline-block;
			color: #fff;
			padding: 6px 12px;
			background-color: #5cb85c;
			border-color: #4cae4c;
			margin: 0;
			font-size: 14px;
			font-weight: 400;
			line-height: 1.42857143;
			text-align: center;
			white-space: nowrap;
			vertical-align: middle;
			cursor: pointer;
		}
		.footer {
			margin: 30px 0;
			.el-button {
				width: 150px;
			}
		}
	}
	
	.no_img1 {
		display: inline-block;
		width: 200px;
		height: 200px;
		text-align: center;
		margin: 10px 20px;
		background: #e5e5e5 url("../assets/pic.png") no-repeat center;
		background-size: 10%;
		span {
			width: 100%;
			line-height: 200px;
			color: #ababab;
		}
	}
</style>