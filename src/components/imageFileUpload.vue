<template>
	<!--资料上传页面1-->
	<div class="imageFileUpload">
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
					<el-col :span="12" style="margin:10px 0">
						<div class="img_title">
							<div>
								<span style="margin: 0 20px 0 24px;">个人资料：</span>
								<vue-file-upload url="/api/terminal/uploadImg" ref="vueFileUploader0" v-bind:events='cbEvents0' v-bind:filters="filters" v-bind:request-options="reqopts0" v-on:onAdd="onAddItem0">
								</vue-file-upload>
								<span v-if="!files0.length">未选择任何文件</span>
								<span v-else>一共选择{{files0.length}}个文件</span>
								<input type="button" value="清空图片" @click="clearAll" class="clear_buttton" />
							</div>
							<div class="img_item_box" v-for='(file,index) in files0' @click="getIndex(index)" style="float: left">
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file))" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<span v-text='onStatus(file)' class="img_status"></span>
								 <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
								<span class="close" @click="deleteImg(file)"> × </span>
							</div>
							<div>
								<div class="no_img1" v-show="files0.length<1">
									<span>身份证正面</span>
								</div>
								<div class="no_img1" v-show="files0.length<2">
									<span>身份证反面</span>
								</div>
								<div class="no_img1" v-show="files0.length<3">
									<span>手持身份证</span>
								</div>
							</div>
						</div>
					</el-col>

					<!--销售产品资料-->
					<el-col :span="12" style="margin:10px 0">
						<div class="img_title">
							<div>
								<span style="margin: 0 20px 0 24px;">销售产品资料：</span>
								<vue-file-upload url="/api/terminal/uploadImg" ref="vueFileUploader1" v-bind:events='cbEvents1' v-bind:filters="filters" v-bind:request-options="reqopts1" v-on:onAdd="onAddItem1">
								</vue-file-upload>
								<span v-if="!files1.length">未选择任何文件</span>
								<span v-else>一共选择{{files1.length}}个文件</span>
								<input type="button" value="清空图片" @click="clearAll" class="clear_buttton" />
							</div>
							<div class="img_item_box" v-for='(file,index) in files1' @click="getIndex(index)" style="float: left">
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file))" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<span class="close" @click="deleteImg(file)"> × </span>
							</div>
							<div>
								<div class="no_img1" v-show="files1.length<1">
									<span>质检报告复印件</span>
								</div>
								<div class="no_img1" v-show="files1.length<2">
									<span>商标注册受理书</span>
								</div>
								<div class="no_img1" v-show="files1.length<3">
									<span>产品清单</span>
								</div>
							</div>
						</div>
					</el-col>

					<!--企业经营证明文件-->
					<el-col :span="24" style="margin:10px 0">
						<div class="img_title">
							<div>
								<span style="margin: 0 20px 0 24px;">企业经营证明文件：</span>
								<vue-file-upload url="/api/terminal/uploadImg" ref="vueFileUploader2" v-bind:events='cbEvents2' v-bind:filters="filters" v-bind:request-options="reqopts2" v-on:onAdd="onAddItem2">
								</vue-file-upload>
								<span v-if="!files2.length">未选择任何文件</span>
								<span v-else>一共选择{{files2.length}}个文件</span>
								<input type="button" value="清空图片" @click="clearAll" class="clear_buttton" />
							</div>
							<div class="img_item_box" v-for='(file,index) in files2' @click="getIndex(index)" style="float: left">
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file))" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<!-- <span class="close" @click="deleteImg(file)"> × </span> -->
							</div>
							<div>
								<div class="no_img1" v-show="files2.length<1">
									<span>营业执照</span>
								</div>
								<div class="no_img1" v-show="files2.length<2">
									<span>纳税人资格证明</span>
								</div>
								<div class="no_img1" v-show="files2.length<3">
									<span>组织机构代码证</span>
								</div>
								<div class="no_img1" v-show="files2.length<4">
									<span>特殊商品资质证明</span>
								</div>
								<div class="no_img1" v-show="files2.length<5">
									<span>法人身份证正面</span>
								</div>
								<div class="no_img1" v-show="files2.length<6">
									<span>法人身份证反面</span>
								</div>
							</div>
						</div>
					</el-col>

					<!--本人在店铺内照片-->
					<el-col :span="24" style="margin:10px 0">
						<div class="img_title">
							<div>
								<span style="margin: 0 20px 0 24px;">企业经营证明文件：</span>
								<vue-file-upload url="/api/terminal/uploadImg" ref="vueFileUploader3" v-bind:events='cbEvents3' v-bind:filters="filters" v-bind:request-options="reqopts3" v-on:onAdd="onAddItem3">
								</vue-file-upload>
								<span v-if="!files3.length">未选择任何文件</span>
								<span v-else>一共选择{{files3.length}}个文件</span>
								<input type="button" value="清空图片" @click="clearAll" class="clear_buttton" />
							</div>
							<div class="img_item_box" v-for='(file,index) in files3' @click="getIndex(index)" style="float: left">
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file))" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<span class="close" @click="deleteImg(file)"> × </span>
							</div>
							<div>
								<div class="no_img1" v-show="files3.length<1">
									<span>营业执照</span>
								</div>
								<div class="no_img1" v-show="files3.length<2">
									<span>纳税人资格证明</span>
								</div>
								<div class="no_img1" v-show="files3.length<3">
									<span>组织机构代码证</span>
								</div>
								<div class="no_img1" v-show="files3.length<4">
									<span>特殊商品资质证明</span>
								</div>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="footer">
				<el-button type="primary" @click="onSubmit">下一步</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import VueFileUpload from './components/vue-file-upload.vue'
	import vueLoading from 'vue-loading-template'
	import Modal from './components/modal.vue'
	export default {
		name: 'imageFileUpload',
		data() {
			return {
				msg: '',
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
							return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
						}

					}
				}],
				//事件回调
				cbEvents0: {
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
						'type':'1',
						'userId':JSON.parse(sessionStorage.getItem("userInfo")).userToken,
						'requestNo':'001',
					},
					responseType: 'json',
					withCredentials: false
				},
				reqopts1: {
					formData: {
						'type':'2',
						'userId':JSON.parse(sessionStorage.getItem("userInfo")).userToken,
						'requestNo':'001',
					},
					responseType: 'json',
					withCredentials: false
				},
				reqopts2: {
					formData: {
						'type':'3',
						'userId':JSON.parse(sessionStorage.getItem("userInfo")).userToken,
						'requestNo':'001',
					},
					responseType: 'json',
					withCredentials: false
				},
				reqopts3: {
					formData: {
						'type':'4',
						'userId':JSON.parse(sessionStorage.getItem("userInfo")).userToken,
						'requestNo':'001',
					},
					responseType: 'json',
					withCredentials: false
				},
				//图片上传插件部分 end
				deleteArr:[],
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
			
			deleteImg(file) {
				console.log(file)
				// this.deleteArr.push();
				file.remove();
			},
			uploadAll() {
				this.$refs.vueFileUploader.uploadAll();
			},
			clearAll() {
				this.$refs.vueFileUploader.clearAll();
			},
			showModal(val) {
				this.imgSrc = val;
				this.modelTogg = true;
			},
			closeModal() {
				this.modelTogg = false;
			},
			getIndex(val) {
				this.index = val;
			},
			//图片上传插件部分 end
			onSubmit() {
				this.delectImg();
				this.$refs.vueFileUploader0.uploadAll();
				/*this.$router.push({
					name: '影像资料上传2',
					params: {
						currentOrder: this.msg
					}
				});*/
				
			},
			// 删除图片(提交前删除)
			delectImg(){
			
				this.$http({
					method:"POST",
					url:"/api/terminal/deleteImg",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
						// "x-sljr-session-token": "08814d4762b788690fc256cd8d089fe4",
					},
					body:{
						"imgSrcs":"",      // 图片src地址(多张逗号拼接)   TODO
						"type":"1",         //  TODO
						"userId":"",       // 用户唯一标识登录的手机号码	TODO
						"requestNo":this.$route.params.currentOrder,    // 申请编号
					}
				}).then((res)=>{
					console.log(res)
				},(res)=>{
					this.$message({
						type:"error",
						message:res.data.messages
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
						 
						"level":"2",
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
			// 更改状态
			updateStates(){
				this.$http({
					method:"POST",
					url:"/api/terminal/updateOrderStatus",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
						// "x-sljr-session-token": "08814d4762b788690fc256cd8d089fe4",
					},
					body:{
						"pagination":3,      // 图片src地址(多张逗号拼接)   TODO
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).telPhone,         //  申请编号
						
					}
				}).then((res)=>{
					console.log(res)
				},(res)=>{
					this.$message({
						type:"error",
						message:res.data.messages
					})
				})
			}
		},
		created: function() {
			this.msg = this.$route.params.currentOrder;
		},
		components: {
			VueFileUpload,
			Modal,
			vueLoading
		},
		mounted:function(){
			this.routerApi();
			// console.log(this.$route.params.)
		}
	}
</script>

<style lang='scss' scoped>
	.imageFileUpload {
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