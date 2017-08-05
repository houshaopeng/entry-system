<template>
	<!--资料上传页面1-->
	<div class="imageFileUpload">
		<!--影像文件上传-->
		<div class="link_btn">
				<el-button @click="$router.push({path: '/storeMsg'})" :disabled = "storeMsg">门店信息录入</el-button> ——————
				<el-button @click="$router.push({path: '/imageFileUpload'})" :disabled = "imageFileUpload">影像资料上传</el-button> ——————
				<el-button @click="$router.push({path: '/imageFileUpload2'})" :disabled = "imageFileUpload2">影像资料上传</el-button> ——————
				<el-button @click="$router.push({path: '/loanContract'})" :disabled = "loanContract">借款合同确认</el-button>
		</div>
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
								<span style="margin: 0 20px 0 24px;">*个人资料：</span>
								<vue-file-upload url="/terminal-repeater/terminal/uploadImg" ref="vueFileUploader0" v-bind:events='cbEvents0' v-bind:filters="filters" v-bind:request-options="reqopts0" v-on:onAdd="onAddItem0" v-show="!onlyRead">

								</vue-file-upload>
								<span v-if="!files00.length">未选择任何文件</span>
								<span v-else>一共选择{{files00.length}}个文件</span>
								<!-- <input type="button" value="清空图片" @click="clearAll" class="clear_buttton" /> -->
							</div>
							<div class="img_item_box" v-for='(file,index) in files0' @click="getIndex(index)" style="float: left" v-show="false">
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file),0)" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<span v-text='onStatus(file)' class="img_status"></span>
								<span class="close" @click="deleteImg(file)" v-show="!onlyRead"> × </span>
							</div>
							<div class="img_item_box" v-for='(file,index) in files00' @click="getIndex(index)" style="float: left">
								<img :src='file.imgSrc' alt="" style="width: 200px;" @click="showModal(file.imgSrc,0)" >
								<span class="img_name" v-html="file.imgName"></span>
								<span class="img_status">上传成功</span>
								<span class="close" @click="deleteImg(file)" v-show="!onlyRead"> × </span>
							</div>
							<div>
								<div class="no_img1" v-show="files00.length<1">
									<span>身份证正面</span>
								</div>
								<div class="no_img1" v-show="files00.length<2">
									<span>身份证反面</span>
								</div>
								<div class="no_img1" v-show="files00.length<3">
									<span>手持身份证</span>
								</div>
							</div>
						</div>
					</el-col>
					<!--销售产品资料-->
					<el-col :span="12" style="margin:10px 0">
						<div class="img_title">
							<div>
								<span style="margin: 0 20px 0 24px;">*销售产品的资料：</span>
								<vue-file-upload url="/terminal-repeater/terminal/uploadImg" ref="vueFileUploader1" v-bind:events='cbEvents1' v-bind:filters="filters" v-bind:request-options="reqopts1" v-on:onAdd="onAddItem1" v-show="!onlyRead">
								</vue-file-upload>
								<span v-if="!files11.length">未选择任何文件</span>
								<span v-else>一共选择{{files11.length}}个文件</span>
								<!-- <input type="button" value="清空图片" @click="clearAll" class="clear_buttton" /> -->
							</div>
							<!-- <div class="img_item_box" v-for='(file,index) in files1' @click="getIndex(index)" style="float: left">
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file),1)" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<span v-text='onStatus(file)' class="img_status"></span>
								<span class="close" @click="deleteImg(file)"> × </span>
							</div> -->
							<div class="img_item_box" v-for='(file,index) in files11' @click="getIndex(index)" style="float: left">
								<img :src='file.imgSrc' alt="" style="width: 200px;" @click="showModal(file.imgSrc,1)" >
								<span class="img_name" v-html="file.imgName"></span>
								<span class="img_status">上传成功</span>
								<span class="close" @click="deleteImg(file)" v-show="!onlyRead"> × </span>
							</div>
							<div>
								<div class="no_img1" v-show="files11.length<1">
									<span>质检报告复印件</span>
								</div>
								<div class="no_img1" v-show="files11.length<2">
									<span>商标注册受理书</span>
								</div>
								<div class="no_img1" v-show="files11.length<3">
									<span>产品清单</span>
								</div>
							</div>
						</div>
					</el-col>

					<!--企业经营证明文件-->
					<el-col :span="24" style="margin:10px 0">
						<div class="img_title">
							<div>
								<span style="margin: 0 20px 0 24px;">*企业经营证明文件：</span>
								<vue-file-upload url="/terminal-repeater/terminal/uploadImg" ref="vueFileUploader2" v-bind:events='cbEvents2' v-bind:filters="filters" v-bind:request-options="reqopts2" v-on:onAdd="onAddItem2" v-show="!onlyRead">
								</vue-file-upload>
								<span v-if="!files22.length">未选择任何文件</span>
								<span v-else>一共选择{{files22.length}}个文件</span>
								<!-- <input type="button" value="清空图片" @click="clearAll" class="clear_buttton" /> -->
							</div>
							
							<div class="img_item_box" v-for='(file,index) in files22' @click="getIndex(index)" style="float: left">
								<img :src='file.imgSrc' alt="" style="width: 200px;" @click="showModal(file.imgSrc,2)" >
								<span class="img_name" v-html="file.imgName"></span>
								<span class="img_status">上传成功</span>
								<span class="close" @click="deleteImg(file)" v-show="!onlyRead"> × </span>
							</div>
							<div>
								<div class="no_img1" v-show="files22.length<1">
									<span>营业执照</span>
								</div>
								<div class="no_img1" v-show="files22.length<2">
									<span>纳税人资格证明</span>
								</div>
								<div class="no_img1" v-show="files22.length<3">
									<span>组织机构代码证</span>
								</div>
								<div class="no_img1" v-show="files22.length<4">
									<span>特殊商品资质证明</span>
								</div>
								<div class="no_img1" v-show="files22.length<5">
									<span>法人身份证正面</span>
								</div>
								<div class="no_img1" v-show="files22.length<6">
									<span>法人身份证反面</span>
								</div>
							</div>
						</div>
					</el-col>

					<!--本人在店铺内照片-->
					<el-col :span="24" style="margin:10px 0">
						<div class="img_title">
							<div>
								<span style="margin: 0 20px 0 24px;">*店主在店铺内照片：</span>
								<vue-file-upload url="/terminal-repeater/terminal/uploadImg" ref="vueFileUploader3" v-bind:events='cbEvents3' v-bind:filters="filters" v-bind:request-options="reqopts3" v-on:onAdd="onAddItem3" v-show="!onlyRead">
								</vue-file-upload>
								<span v-if="!files33.length">未选择任何文件</span>
								<span v-else>一共选择{{files33.length}}个文件</span>
								<!-- <input type="button" value="清空图片" @click="clearAll" class="clear_buttton" /> -->
							</div>
							<!-- <div class="img_item_box" v-for='(file,index) in files3' @click="getIndex(index)" style="float: left">
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file),3)" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<span v-text='onStatus(file)' class="img_status"></span>
								<span class="close" @click="deleteImg(file)"> × </span>
							</div> -->
							<div class="img_item_box" v-for='(file,index) in files33' @click="getIndex(index)" style="float: left">
								<img :src='file.imgSrc' alt="" style="width: 200px;" @click="showModal(file.imgSrc,3)">
								<span class="img_name" v-html="file.imgName"></span>
								<span class="img_status">上传成功</span>
								<span class="close" @click="deleteImg(file)" v-show="!onlyRead"> × </span>
							</div>
							<div>
								<div class="no_img1" v-show="files33.length<1">
									<span>门面</span>
								</div>
								<div class="no_img1" v-show="files33.length<2">
									<span>货柜</span>
								</div>
								<div class="no_img1" v-show="files33.length<3">
									<span>仓库</span>
								</div>
								<div class="no_img1" v-show="files33.length<4">
									<span>全部员工于店内</span>
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
				<el-button type="primary" @click="onSubmit" :disabled="onlyRead">下一步</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import VueFileUpload from './components/vue-file-upload.vue'   
	import vueLoading from 'vue-loading-template'
	import Modal from './components/modal2.vue'
	export default {
		name: 'imageFileUpload',
		data() {
			return {
				//图片上传插件部分 start
				//过滤器回调
				files00: [],
				files11: [],
				files22: [],
				files33: [],
				files0: [],
				files1: [],
				files2: [],
				files3: [],
				storeMsg:true,
				imageFileUpload:true,
				imageFileUpload2:true,
				loanContract:true,
				pagedisabled:false,
				onlyRead:false,
				// aa:true,
				initId: 0,
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
				},
				{
					name: "sizeFilter",
					fn(file) {
						if(file.size>10240000) {
							alert("图片尺寸过大,请重新提交图片")
							return false;
						} else {
							return true;
						}

					}
				}],
				//事件回调
				cbEvents0: {
					onCompleteUpload: (file, response, status, header) => {

						if(response.code=="000000"){

						}else{
							this.$message({
								type: "error",
								message: response.messages
							})
						}
						this.echoImg();
					},
					onAddFileSuccess: (file) => {
						

					}
				},
				cbEvents1: {
					onCompleteUpload: (file, response, status, header) => {
						if(response.code=="000000"){

						}else{
							this.$message({
								type: "error",
								message: response.messages
							})
						};
						this.echoImg();
					},
					onAddFileSuccess: (file) => {

					}
				},
				cbEvents2: {
					onCompleteUpload: (file, response, status, header) => {
						if(response.code=="000000"){

						}else{
							this.$message({
								type: "error",
								message: response.messages
							})
						};
						this.echoImg();
					},
					onAddFileSuccess: (file) => {

					}
				},
				cbEvents3: {
					onCompleteUpload: (file, response, status, header) => {
						if(response.code=="000000"){

						}else{
							this.$message({
								type: "error",
								message: response.messages
							})
						};
						this.echoImg();
					},
					onAddFileSuccess: (file) => {

					}
				},
				reqopts0: {
					formData: {
						'type': '1',
						'userId': JSON.parse(sessionStorage.getItem("userInfo")).telPhone,
						'requestNo': JSON.parse(sessionStorage.getItem("userInfo")).requestNo,
						'initId': this.initId,
					},
					responseType: 'json',
					withCredentials: false
				},
				reqopts1: {
					formData: {
						'type': '2',
						'userId': JSON.parse(sessionStorage.getItem("userInfo")).telPhone,
						'requestNo': JSON.parse(sessionStorage.getItem("userInfo")).requestNo,
					},
					responseType: 'json',
					withCredentials: false
				},
				reqopts2: {
					formData: {
						'type': '3',
						'userId': JSON.parse(sessionStorage.getItem("userInfo")).telPhone,
						'requestNo': JSON.parse(sessionStorage.getItem("userInfo")).requestNo,
					},
					responseType: 'json',
					withCredentials: false
				},
				reqopts3: {
					formData: {
						'type': '4',
						'userId': JSON.parse(sessionStorage.getItem("userInfo")).telPhone,
						'requestNo': JSON.parse(sessionStorage.getItem("userInfo")).requestNo,
					},
					responseType: 'json',
					withCredentials: false
				},
				//图片上传插件部分 end
				deleteArr: [],
				// 弹出的模态框
				modelTogg: false,
				imgSrc: '',
				tempFile: '',
				initIndex: 0,
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
				// file.remove();
				this.$http({
					method: "POST",
					url: process.env.API+"/terminal/deleteImg",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body: {
						"type": file.type, //  TODO
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo, // 申请编号
						"imgNo": file.imgNo
					}
				}).then((res) => {
					this.echoImg();
					if(res.data.code == "000000") {

					}
				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})

			},
			uploadAll() {
				this.$refs.vueFileUploader.uploadAll();
			},
			clearAll() {
				this.$refs.vueFileUploader.clearAll();
			},
			showModal(val, idx) {
				if(idx == 0) {
					this.tempFile = this.files00;
				} else if(idx == 1) {
					this.tempFile = this.files11;
				} else if(idx == 2) {
					this.tempFile = this.files22;
				} else if(idx == 3) {
					this.tempFile = this.files33;
				}
				this.initIndex = 0;
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
				if(this.files00.length<3){
					this.$message({
						type: "error",
						message: "个人资料必须上传三张图片"
					});
					return false;
				}
				if(this.files11.length<3){
					this.$message({
						type: "error",
						message: "销售产品资料必须上传三张图片"
					});
					return false;
				}
				if(this.files22.length<5){
					this.$message({
						type: "error",
						message: "企业经营证明文件至少上传五张"
					});
					return false;
				}
				if(this.files33.length<3){
					this.$message({
						type: "error",
						message: "本人在店铺内文件至少上传三张"
					});
					return false;
				}
				this.updateStates();
			},
			
			// 路由接口调试
			routerApi() {
				console.log(JSON.parse(sessionStorage.getItem("userInfo")).requestNo)
				this.$http({
					method: "POST",
					url: process.env.API + "/terminal/step",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body: {
						"userId": JSON.parse(sessionStorage.getItem("userInfo")).telPhone, //    手机号码
						"level": "2",
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo // 请求流水号
					}
				}).then((res) => {
					if(res.data.code="000000"){
						if(res.data.data.requestNoStatus>2){
							this.$message({
								type:'info',
								message:'数据加载中请稍后...'
							})
							this.onlyRead=true;
						}
					}
				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})
			},

			// 模态框部分  start
			upperPage(val) {
				var data = val;
				this.srcArr = [];
				for(var i = 0; i < data.length; i++) {
					this.srcArr.push(data[i].imgSrc);
				}
				this.index--;
				if(this.index == -1) {
					this.index = this.srcArr.length - 1;
				}
				this.imgSrc = this.srcArr[this.index];
			},
			nextPage(val) {
				console.log(val)
				var data = val;
				this.srcArr = [];
				for(var i = 0; i < data.length; i++) {
					this.srcArr.push(data[i].imgSrc);
				}
				this.index++;
				if(this.index == this.srcArr.length) {
					this.index = 0;
				}
				this.imgSrc = this.srcArr[this.index];
			},
			// 模态框部分  end
			// 更改状态
			updateStates() {
				this.$http({
					method: "POST",
					url: process.env.API + "/terminal/updateOrderStatus",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body: {
						"pagination": 3,
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo, //  申请编号
					}
				}).then((res) => {
					if(res.data.code == "000000") {
						this.$router.push({
							path: '/imageFileUpload2'
						})
					}
				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})
			},
			// 回显调用
			echoImg() {
				this.$http({
					method: "POST",
					url: process.env.API+"/terminal/EchoImg",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body: {
						"page": "3",
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo, //  申请编号
					}
				}).then((res) => {
					if(res.data.code == "000000") { // TODO
						this.lists = res.data.imgEchos;
						this.files00=[];
						this.files11=[];
						this.files22=[];
						this.files33=[];
						if(this.lists){
							for(var i =0;i<this.lists.length;i++){
								if(this.lists[i].type==1){
									this.files00.push(this.lists[i])
								}else if(this.lists[i].type==2){
									this.files11.push(this.lists[i])
								}else if(this.lists[i].type==3){
									this.files22.push(this.lists[i])
								}else if(this.lists[i].type==4){
									this.files33.push(this.lists[i])
								}
							}
						}else{

						}
					}
				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})
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
							console.log(555)
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
		components: {
			VueFileUpload,
			Modal,
			vueLoading
		},
		mounted: function() {
			this.routerDisable();
			this.routerApi();
			this.echoImg();
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
					color: #ffffff;
					padding: 3px;
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
	.link_btn {
			margin: 20px 0;
		}
</style>