<template>
	<!--资料上传页面2-->
	<div class="imageFileUpload2">
		<!--影像文件上传-->
		<div class="title">
			<el-col :span="24">
				<!-- <span style="margin: 0 20px 0 24px;">*资料上传：</span>
				<vue-file-upload url="/terminal-oper/file/upload" ref="vueFileUploader" v-bind:events='cbEvents' v-bind:filters="filters" v-bind:request-options="reqopts" v-on:onAdd="onAddItem" :channelNum="channelNum">
				</vue-file-upload>
				<span v-if="!files.length">未选择任何文件</span>
				<span v-else>一共选择{{files.length}}个文件</span>
				<input type="button" value="清空图片" @click="clearAll" class="clear_buttton"/> -->
			</el-col>
		</div>
	</div>
</template>

<script>
//	import VueFileUpload from 'components/vue-file-upload.vue'
	import Modal from './components/modal.vue'
	export default {
		name: 'imageFileUpload2',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
//			VueFileUpload,
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
	}
</style>