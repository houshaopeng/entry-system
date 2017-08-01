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
							<div>
								<span style="margin: 0 20px 0 24px;">经营情况证明：</span>
								<vue-file-upload url="/api/terminal/uploadImg" ref="vueFileUploader0" v-bind:events='cbEvents0' v-bind:filters="filters" v-bind:request-options="reqopts0" v-on:onAdd="onAddItem0">
								</vue-file-upload>
								<span v-if="!files0.length">未选择任何文件</span>
								<span v-else>一共选择{{files0.length}}个文件</span>
								<input type="button" value="清空图片" @click="clearAll" class="clear_buttton" />
							</div>
							<div class="img_item_box" v-for='(file,index) in files0' @click="getIndex(index)" style="float: left">
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file),0)" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<span v-text='onStatus(file)' class="img_status"></span>
								<vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
								<span class="close" @click="deleteImg(file)"> × </span>
							</div>
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
							<div>
								<span style="margin: 0 20px 0 24px;">收入证明：</span>
								<vue-file-upload url="/api/terminal/uploadImg" ref="vueFileUploader1" v-bind:events='cbEvents1' v-bind:filters="filters" v-bind:request-options="reqopts1" v-on:onAdd="onAddItem1">
								</vue-file-upload>
								<span v-if="!files1.length">未选择任何文件</span>
								<span v-else>一共选择{{files1.length}}个文件</span>
								<input type="button" value="清空图片" @click="clearAll" class="clear_buttton" />
							</div>
							<div class="img_item_box" v-for='(file,index) in files1' @click="getIndex(index)" style="float: left">
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file),1)" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<span class="close" @click="deleteImg(file)"> × </span>
							</div>
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
							<div>
								<span style="margin: 0 20px 0 24px;">居住证明(任选一个)：</span>
								<vue-file-upload url="/api/terminal/uploadImg" ref="vueFileUploader2" v-bind:events='cbEvents2' v-bind:filters="filters" v-bind:request-options="reqopts2" v-on:onAdd="onAddItem2">
								</vue-file-upload>
								<span v-if="!files2.length">未选择任何文件</span>
								<span v-else>一共选择{{files2.length}}个文件</span>
								<input type="button" value="清空图片" @click="clearAll" class="clear_buttton" />
							</div>
							<div class="img_item_box" v-for='(file,index) in files2' @click="getIndex(index)" style="float: left">
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file),2)" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<!-- <span class="close" @click="deleteImg(file)"> × </span> -->
							</div>
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
							<div>
								<span style="margin: 0 20px 0 24px;">办公场所证明(任选一个)：</span>
								<vue-file-upload url="/api/terminal/uploadImg" ref="vueFileUploader3" v-bind:events='cbEvents3' v-bind:filters="filters" v-bind:request-options="reqopts3" v-on:onAdd="onAddItem3">
								</vue-file-upload>
								<span v-if="!files3.length">未选择任何文件</span>
								<span v-else>一共选择{{files3.length}}个文件</span>
								<input type="button" value="清空图片" @click="clearAll" class="clear_buttton" />
							</div>
							<div class="img_item_box" v-for='(file,index) in files3' @click="getIndex(index)" style="float: left">
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file),3)" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<span class="close" @click="deleteImg(file)"> × </span>
							</div>
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
			<!-- 弹出层的模态框 start-->
				<Modal :modelTogg="modelTogg" :imgSrc="imgSrc" @closeModal="closeModal" @upperPage="upperPage" :files="tempFile" @nextPage="nextPage"></Modal>
			<!-- 弹出层的模态框 end-->
			<div class="footer">
				<el-button type="primary" @click="onSubmit">提交</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import VueFileUpload from './components/vue-file-upload.vue'
	import vueLoading from 'vue-loading-template'
	import Modal from './components/modal.vue'
	export default {
		name: 'imageFileUpload2',
		data() {
			return {
				//图片上传插件部分 start
				//过滤器回调
				files0: [],
				files1: [],
				files2: [],
				files3: [],
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
				cbEvents0: {
					onCompleteUpload: (file, response, status, header) => {
						/*						this.routerTogg++;
												if(this.routerTogg == this.files.length && this.routerJump) {
													this.fullscreenLoading = false;
													this.$router.push({
														path: '/channelOffering'
													});
												}*/
					},
					onAddFileSuccess: (file) => {}
				},
				cbEvents1: {
					onCompleteUpload: (file, response, status, header) => {
						/*this.routerTogg++;
						if(this.routerTogg == this.files.length && this.routerJump) {
							this.fullscreenLoading = false;
							this.$router.push({
								path: '/channelOffering'
							});
						}*/
					},
					onAddFileSuccess: (file) => {

					}
				},
				cbEvents2: {
					onCompleteUpload: (file, response, status, header) => {
						/*this.routerTogg++;
						if(this.routerTogg == this.files.length && this.routerJump) {
							this.fullscreenLoading = false;
							this.$router.push({
								path: '/channelOffering'
							});
						}*/
					},
					onAddFileSuccess: (file) => {

					}
				},
				cbEvents3: {
					onCompleteUpload: (file, response, status, header) => {
						/*this.routerTogg++;
						if(this.routerTogg == this.files.length && this.routerJump) {
							this.fullscreenLoading = false;
							this.$router.push({
								path: '/channelOffering'
							});
						}*/
					},
					onAddFileSuccess: (file) => {

					}
				},
				reqopts0: {
					formData: {
						'type': '1',
						'userId': JSON.parse(sessionStorage.getItem("userInfo")).userToken,
						'requestNo': '001',
					},
					responseType: 'json',
					withCredentials: false
				},
				reqopts1: {
					formData: {
						'type': '2',
						'userId': JSON.parse(sessionStorage.getItem("userInfo")).userToken,
						'requestNo': '001',
					},
					responseType: 'json',
					withCredentials: false
				},
				reqopts2: {
					formData: {
						'type': '3',
						'userId': JSON.parse(sessionStorage.getItem("userInfo")).userToken,
						'requestNo': '001',
					},
					responseType: 'json',
					withCredentials: false
				},
				reqopts3: {
					formData: {
						'type': '4',
						'userId': JSON.parse(sessionStorage.getItem("userInfo")).userToken,
						'requestNo': '001',
					},
					responseType: 'json',
					withCredentials: false
				},
				//图片上传插件部分 end
				deleteArr: [],
				//弹出模态框
				modelTogg: false,
				imgSrc: '',
				tempFile:'',
				initIndex:0,
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
			onAddItem0(files) {
				this.files0 = files;
			},
			onAddItem1(files) {
				this.files1 = files;
			},
			onAddItem2(files) {
				this.files2 = files;
			},
			onAddItem3(files) {
				this.files3 = files;
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
			// 模态框部分  start
			getIndex(val) {
				this.index = val;
			},
			showModal(val,idx) {
				if(idx == 0){
                    this.tempFile = this.files0;
                }else if(idx == 1){
                    this.tempFile = this.files1;
                }else if(idx == 2){
                    this.tempFile = this.files2;
                }else if(idx == 3){
                     this.tempFile = this.files3;
                }
                this.initIndex = 0;
                this.imgSrc =val;
                this.modelTogg = true;
			},
			closeModal() {
				this.modelTogg = false;
			},
			upperPage(val) {
				var data = val;
				this.srcArr = [];
				for(var i = 0; i < data.length; i++) {
					this.srcArr.push(window.URL.createObjectURL(data[i].file));
				}
				this.index--;
				if(this.index == -1) {
					this.index = this.srcArr.length - 1;
				}
				this.imgSrc = this.srcArr[this.index];
			},
			nextPage(val) {
				var data = val;
				this.srcArr = [];
				for(var i = 0; i < data.length; i++) {
					this.srcArr.push(window.URL.createObjectURL(data[i].file));
				}
				this.index++;
				if(this.index == this.srcArr.length) {
					this.index = 0;
				}
				this.imgSrc = this.srcArr[this.index];
			},
			// 模态框部分  end
			// 删除图片(提交前删除)
			deleteImg(file) {
				this.$http({
					method: "POST",
					url: "/api/terminal/deleteImg",
					headers: {
						"x-sljr-session-token": "6b8b0e4e841107d250d63fdb3166d1ac",
					},
					body: {
						"imgSrcs": "http://terminal-repeater.oss-cn-shanghai.aliyuncs.com/e6b4729b53ee8158fce423ba07480afd/001/personalDataImg/1501467704002.jpg,http://terminal-repeater.oss-cn-shanghai.aliyuncs.com/e6b4729b53ee8158fce423ba07480afd/001/personalDataImg/1501467704242.jpg", // 图片src地址(多张逗号拼接)
						"type": "1", //
						"userId": "e6b4729b53ee8158fce423ba07480afd", // 用户唯一标识
						"requestNo": "001", // 申请编号
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
			// 路由接口调试
			routerApi(){
				console.log(JSON.parse(sessionStorage.getItem("userInfo")).requestNo)
				this.$http({
					method:"POST",
					url:"/api/terminal/step",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body:{
						"userId":JSON.parse(sessionStorage.getItem("userInfo")).telPhone,      // TODO    手机号码

						"level":"3",
						"requestNo":JSON.parse(sessionStorage.getItem("userInfo")).requestNo    // 请求流水号
					}
				}).then((res)=>{
					if(res.data.dara=="000000"){

					}
				},(res)=>{
					this.$message({
						type:"error",
						message:res.data.messages
					})
				})
			},
			onSubmit() {
				this.$router.push({
						path: '/loanAgreement'
					})
			},
		},
		//图片上传插件部分 end
		created: function() {
			this.routerApi();
		},
		components: {
			VueFileUpload,
			Modal,
			vueLoading
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
			.img_item_box {
				width: 200px;
				height: 200px;
				background: #e5e5e5;
				position: relative;
				display: inline-block;
				overflow: hidden;
				margin: 10px 20px;
				.img_name {
					position: absolute;
					bottom: 0;
					display: block;
					text-align: center;
					width: 100%;
					background: rgba(0, 0, 0, 0.5);
					color: #ffffff;
					height: 20px;
					overflow: hidden;
					white-space: nowrap;
					/*文字不换行*/
					text-overflow: ellipsis;
					/*超出则...代替*/
					-o-text-overflow: ellipsis;
					/*opera*/
					z-index: 30;
					.close {
						font-size: 24px;
						font-weight: bolder;
						position: absolute;
						right: 0;
						top: 0;
						cursor: pointer;
						z-index: 25;
					}
				}
				.img_status {
					display: inline-block;
					background: rgba(0, 0, 0, 0.5);
					position: absolute;
					left: 0;
					top: 0;
				}
				.close {
					font-size: 24px;
					font-weight: bolder;
					position: absolute;
					right: 0;
					top: 0;
					cursor: pointer;
					z-index: 25;
				}
			}
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