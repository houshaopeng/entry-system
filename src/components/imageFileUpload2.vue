<template>
	<!--资料上传页面2-->
	<div class="imageFileUpload2">
		<!--影像文件上传-->
		<div class="link_btn">
            <el-button @click="$router.push({path: '/storeMsg'})" :disabled = "storeMsg">门店信息录入</el-button> ——————
            <el-button @click="$router.push({path: '/imageFileUpload'})" :disabled = "imageFileUpload">影像资料上传</el-button> ——————
            <el-button @click="$router.push({path: '/imageFileUpload2'})" :disabled = "imageFileUpload2">影像资料上传</el-button> ——————
            <el-button @click="$router.push({path: '/proxyAgreement'})" :disabled = "proxyAgreement">委托书确认</el-button> ——————
            <el-button @click="$router.push({path: '/loanContract'})" :disabled = "loanContract">借款合同确认</el-button>
        </div>
		<hr />
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
								<span style="margin: 0 20px 0 24px;">*经营情况证明：</span>
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
								<vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
								<span class="close" @click="deleteImg(file)"> × </span>
							</div>
							<div class="img_item_box" v-for='(file,index) in files00' @click="getIndex(index)" style="float: left">
								<img :src='file.imgSrc' alt=""style="width: 200px;" @click="showModal(file.imgSrc,0)">
								<span class="img_name" v-html="file.imgName"></span>
								<span class="img_status">上传成功</span>
								<span class="close" @click="deleteImg(file)" v-show="!onlyRead"> × </span>
							</div>
							<div>
								<div class="no_img1" v-show="files00.length<1">
									<span>{{imgText}}</span>
								</div>
								<div class="no_img1" v-show="files00.length<2">
									<span>{{imgText}}</span>
								</div>
								<div class="no_img1" v-show="files00.length<3">
									<span>{{imgText}}</span>
								</div>
								<div class="no_img1" v-show="files00.length<4">
									<span>{{imgText}}</span>
								</div>
								<div class="no_img1" v-show="files00.length<5">
									<span>{{imgText}}</span>
								</div>
								<div class="no_img1" v-show="files00.length<6">
									<span>{{imgText}}</span>
								</div>
							</div>
						</div>
					</el-col>

					<!--销售产品资料-->
					<el-col :span="24">
						<div class="img_title">
							<div>
								<span style="margin: 0 20px 0 24px;">*收入证明：</span>
								<vue-file-upload url="/terminal-repeater/terminal/uploadImg" ref="vueFileUploader1" v-bind:events='cbEvents1' v-bind:filters="filters" v-bind:request-options="reqopts1" v-on:onAdd="onAddItem1" v-show="!onlyRead">
								</vue-file-upload>
								<span v-if="!files11.length">未选择任何文件</span>
								<span v-else>一共选择{{files11.length}}个文件</span>
								<!-- <input type="button" value="清空图片" @click="clearAll" class="clear_buttton" /> -->
							</div>
							<div class="img_item_box" v-for='(file,index) in files1' @click="getIndex(index)" style="float: left" v-show='false'>
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file),1)" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<span class="close" @click="deleteImg(file)"> × </span>
							</div>
							<div class="img_item_box" v-for='(file,index) in files11' @click="getIndex(index)" style="float: left">
								<img :src='file.imgSrc' alt=""style="width: 200px;" @click="showModal(file.imgSrc,1)">
								<span class="img_name" v-html="file.imgName"></span>
								<span class="img_status">上传成功</span>
								<span class="close" @click="deleteImg(file)" v-show="!onlyRead"> × </span>
							</div>
							<div>
								<div class="no_img1" v-show="files11.length<1">
									<span>{{imgText}}</span>
								</div>
								<div class="no_img1" v-show="files11.length<2">
									<span>{{imgText}}</span>
								</div>
								<div class="no_img1" v-show="files11.length<3">
									<span>{{imgText}}</span>
								</div>
								<div class="no_img1" v-show="files11.length<4">
									<span>{{imgText}}</span>
								</div>
								<div class="no_img1" v-show="files11.length<5">
									<span>{{imgText}}</span>
								</div>
								<div class="no_img1" v-show="files11.length<6">
									<span>{{imgText}}</span>
								</div>
							</div>
						</div>
					</el-col>

					<!--企业经营证明文件-->
					<el-col :span="12">
						<div class="img_title">
							<div>
								<span style="margin: 0 20px 0 24px;">*居住证明(任选一个)：</span>
								<vue-file-upload url="/terminal-repeater/terminal/uploadImg" ref="vueFileUploader2" v-bind:events='cbEvents2' v-bind:filters="filters" v-bind:request-options="reqopts2" v-on:onAdd="onAddItem2" v-show="!onlyRead">
								</vue-file-upload>
								<span v-if="!files22.length">未选择任何文件</span>
								<span v-else>一共选择{{files22.length}}个文件</span>
								<!-- <input type="button" value="清空图片" @click="clearAll" class="clear_buttton" /> -->
							</div>
							<div class="img_item_box" v-for='(file,index) in files2' @click="getIndex(index)" style="float: left " v-show="false">
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file),2)" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<!-- <span class="close" @click="deleteImg(file)"> × </span> -->
							</div>
							<div class="img_item_box" v-for='(file,index) in files22' @click="getIndex(index)" style="float: left">
								<img :src='file.imgSrc' alt=""style="width: 200px;" @click="showModal(file.imgSrc,2)">
								<span class="img_name" v-html="file.imgName"></span>
								<span class="img_status">上传成功</span>
								<span class="close" @click="deleteImg(file)" v-show="!onlyRead"> × </span>
							</div>
							<div>
								<div class="no_img1" v-show="files22.length<1">
									<span>租赁合同</span>
								</div>
							</div>
							<div style="padding: 0 30px;clear:both">
								<ol>
									<li>租赁合同于90天内经营场所单据</li>
									<li>经营场所反房屋所有权证或经营场所购房发票</li>
									<li>经营场所购房/抵押/按揭合同</li>
									<li>土地使用权证与办公场所缴费单据或官方出具的证明文件</li>
								</ol>
							</div>
						</div>
					</el-col>

					<!--本人在店铺内照片-->
					<el-col :span="12">
						<div class="img_title">
							<div>
								<span style="margin: 0 20px 0 24px;">*办公场所证明(任选一个)：</span>
								<vue-file-upload url="/terminal-repeater/terminal/uploadImg" ref="vueFileUploader3" v-bind:events='cbEvents3' v-bind:filters="filters" v-bind:request-options="reqopts3" v-on:onAdd="onAddItem3" v-show="!onlyRead">
								</vue-file-upload>
								<span v-if="!files33.length">未选择任何文件</span>
								<span v-else>一共选择{{files33.length}}个文件</span>
								<!-- <input type="button" value="清空图片" @click="clearAll" class="clear_buttton" /> -->
							</div>
							<div class="img_item_box" v-for='(file,index) in files3' @click="getIndex(index)" style="float: left" v-show="false">
								<img :src='onPreview(file)' alt="" @click="showModal(onPreview(file),3)" style="width: 200px;">
								<span class="img_name" v-html="file.name"></span>
								<span class="close" @click="deleteImg(file)"> × </span>
							</div>
							<div class="img_item_box" v-for='(file,index) in files33' @click="getIndex(index)" style="float: left">
								<img :src='file.imgSrc' alt=""style="width: 200px;" @click="showModal(file.imgSrc,3)">
								<span class="img_name" v-html="file.imgName"></span>
								<span class="img_status">上传成功</span>
								<span class="close" @click="deleteImg(file)" v-show="!onlyRead"> × </span>
							</div>
							<div>
								<div class="no_img1" v-show="files33.length<1">
									<span>办公场所证明</span>
								</div>
								<div class="no_img1" v-show="files33.length<2">
									<span>办公场所证明</span>
								</div>
							</div>
							<div style="padding: 0 30px;clear:both">
								<ol style="list-style-type: lower-alpha;">
									<li>租赁合同+90 天内的租金发票或经营场所缴费单据（电费单/水费单/燃气单/固定电话费单）</li>
									<li>办公场所自有，可提供以下房产证明资料+近90天内房产地址下的有效单据（以下材料任选其一，同时认可为资产证明）1.房屋所有权证2.购房发票3.购房合同4.按揭合同5.抵押合同</li>
									<li>土地使用权证+办公场所缴费单据，单据须体现土地使用权证上地址</li>
									<li>相关官方单位出具的证明文件，比如村委会、公安局，街道办等出具的盖章证明</li>
								</ol>
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
				files00: [],
				files11: [],
				files22: [],
				files33: [],
				storeMsg:null,
                imageFileUpload:null,
                imageFileUpload2:null,
                proxyAgreement:null,
                loanContract:null,
				lists:[],
				onlyRead:false,
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
						};
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
						this.echoImg();
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
						'type': '5',
						'userId': JSON.parse(sessionStorage.getItem("userInfo")).telPhone,
						'requestNo':JSON.parse(sessionStorage.getItem("userInfo")).requestNo,
					},
					responseType: 'json',
					withCredentials: false
				},
				reqopts1: {
					formData: {
						'type': '6',
						'userId': JSON.parse(sessionStorage.getItem("userInfo")).telPhone,
						'requestNo':JSON.parse(sessionStorage.getItem("userInfo")).requestNo,
					},
					responseType: 'json',
					withCredentials: false
				},
				reqopts2: {
					formData: {
						'type': '7',
						'userId': JSON.parse(sessionStorage.getItem("userInfo")).telPhone,
						'requestNo':JSON.parse(sessionStorage.getItem("userInfo")).requestNo,
					},
					responseType: 'json',
					withCredentials: false
				},
				reqopts3: {
					formData: {
						'type': '8',
						'userId': JSON.parse(sessionStorage.getItem("userInfo")).telPhone,
						'requestNo':JSON.parse(sessionStorage.getItem("userInfo")).requestNo,
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
				imgText:' 6个月个人流水',
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
                    this.tempFile = this.files00;
                }else if(idx == 1){
                    this.tempFile = this.files11;
                }else if(idx == 2){
                    this.tempFile = this.files22;
                }else if(idx == 3){
                     this.tempFile = this.files33;
                }
                this.initIndex = 0;
                this.imgSrc =val;
                this.modelTogg = true;
			},
			closeModal() {
				this.modelTogg = false;
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
			// 模态框部分  end
			// 删除图片(提交前删除)
			deleteImg(file) {
				this.$http({
					method: "POST",
					url: process.env.API+"/terminal/deleteImg",
					headers: {
						"x-sljr-session-token": "6b8b0e4e841107d250d63fdb3166d1ac",
					},
					body: {
						"type": file.type, //  TODO
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo, // 申请编号
						"imgNo": file.imgNo
					}
				}).then((res) => {

				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})
			},
			// 路由接口调试
			routerApi() {
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
						if(res.data.data.requestNoStatus>3){
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

			//个人和企业接口获取
			personEnterprise(){
				this.$http.get(process.env.API + "/terminal/getTerminalType",{
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					params: {
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo,         //  申请编号
					}
				}).then((res)=>{
					if(res.data.code=="000000"){
						if(res.data.data.terminalType == 0) {
							this.imgText = "提供6个月个人流水";
						}else{
							this.imgText = "提供6个月银行流水";
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
			// 更改状态
			updateStates(){
				this.$http({
					method:"POST",
					url:process.env.API+"/terminal/updateOrderStatus",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body:{
						"pagination":9,      // 图片src地址(多张逗号拼接)   TODO
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo,         //  申请编号
					}
				}).then((res)=>{
					if(res.data.code=="000000"){
						this.$message({
							type:"success",
							message:"资料上传成功，审核中..."
						})

						this.$router.push({
							path: '/proxyAgreement'
						})
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
			deleteImg(file) {
				// file.remove();
				this.$http({
					method: "POST",
					url: process.env.API+"/terminal/deleteImg",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body: {

						"src": file.imgSrc, // 图片src地址(多张逗号拼接)   TODO
						"type": file.type, //  TODO
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo, // 申请编号
						"imgNo":file.imgNo
					}
				}).then((res) => {
					this.echoImg();
					if(res.data.code =="000000"){

					}
				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})
			},
			// 回显调用
			echoImg(){
				this.$http({
					method:"POST",
					url:process.env.API+"/terminal/EchoImg",
					headers: {
						"x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
					},
					body:{
						"page":"4",
						"requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo,         //  申请编号
					}
				}).then((res)=>{
					if(res.data.code=="000000"){            // TODO
						this.lists = res.data.imgEchos;
						this.files00=[];
						this.files11=[];
						this.files22=[];
						this.files33=[];
						if(this.lists){
							for(var i =0;i<this.lists.length;i++){
								if(this.lists[i].type==5){
									this.files00.push(this.lists[i])
								}else if(this.lists[i].type==6){
									this.files11.push(this.lists[i])
								}else if(this.lists[i].type==7){
									this.files22.push(this.lists[i])
								}else if(this.lists[i].type==8){
									this.files33.push(this.lists[i])
								}
							}
						}else{

						}
					}
				},(res)=>{
					this.$message({
						type:"error",
						message:res.data.messages
					})
				})
			},
			onSubmit() {
				if(this.files00.length<1){
					this.$message({
						type: "error",
						message: "提供6个月个人流水，缩略图展示六张，必传一张"
					});
					return false;
				}
				if(this.files11.length<1){
					this.$message({
						type: "error",
						message: "提供6个月银行流水，缩略图展示六张，必传一张"
					});
					return false;
				}
				if(this.files22.length<1){
					this.$message({
						type: "error",
						message: "居住证明，缩略图展示一张，必传一张"
					});
					return false;
				}
				if(this.files33.length<1){
					this.$message({
						type: "error",
						message: "办公场所证明：缩略图展示两张，必传一张"
					});
					return false;
				}
				this.updateStates();
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
							this.imageFileUpload2=true;
							this.proxyAgreement=true;
							this.loanContract=true;
						}else if(res.data.data.status == 2){
							this.storeMsg=false;
							this.imageFileUpload=false;
							this.imageFileUpload2=true;
							this.proxyAgreement=true;
							this.loanContract=true;
						}else if(res.data.data.status == 3){
							this.storeMsg=false;
							this.imageFileUpload=false;
							this.imageFileUpload2=false;
							this.proxyAgreement=true;
							this.loanContract=true;
						}else if(res.data.data.status == 4){
							this.storeMsg=false;
							this.imageFileUpload=false;
							this.imageFileUpload2=false;
							this.proxyAgreement=false;
							this.loanContract=false;
						}else if(res.data.data.status == 9){
							this.storeMsg=false;
							this.imageFileUpload=false;
							this.imageFileUpload2=false;
							this.proxyAgreement=false;
							this.loanContract=true;
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
		//图片上传插件部分 end
		mounted: function() {
			this.routerApi();
			this.echoImg();
			this.personEnterprise();
			this.routerDisable();
		},
		components: {
			VueFileUpload,
			Modal,
			vueLoading,

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
		font-size: 12px;
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