<template>
	<!--资料填写页面-->
	<div class="storeMsg">
		<!--网点基本信息-->
		<div class="title">
			<el-row>
				<h3>网点基本信息</h3>
				<p>申请编号:{{msg}}</p>
			</el-row>
		</div>
		<div class="content">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="121px" class="demo-ruleForm">
				<el-row :gutter="10">
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="网点合同类型" prop="name">
							<el-radio-group v-model="ruleForm.contractType">
								<el-radio label="0">标准合同</el-radio>
								<el-radio label="1">非标合同</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="网点类型" prop="name">
							<el-radio-group v-model="ruleForm.networkType">
								<el-radio label="0">个人</el-radio>
								<el-radio label="1">企业</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="所属区域" prop="name">
							<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
								<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="网点名称" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="网点联系人" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="联系电话" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="16" :lg="12">
						<el-form-item label="推荐渠道" prop="name">
							<el-col :xs="12" :sm="12" :md="12" :lg="12">
								<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
									<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-col>
							<el-col :xs="12" :sm="12" :md="12" :lg="12">
								<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
									<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-col>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="12">
						<el-form-item label="联系地址" prop="name">
							<el-col :xs="18" :sm="18" :md="18" :lg="18">
								<address-picker :opts="obj" v-model="address" id="address-picker"></address-picker>
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-input v-model="ruleForm.name" placeholder="请输入详细联系地址"></el-input>
							</el-col>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="业务员姓名" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="业务员工号" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24">
						<el-form-item label="机器型号" prop="name" class="addOne">
							<el-row :gutter="10">
								<el-col :xs="12" :sm="12" :md="8" :lg="6">
									<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
										<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-col>
							</el-row>
							<el-button type="primary" class="btn_add">添加一台</el-button>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</div>

		<!--周边金融业信息-->
		<div class="title">
			<el-row>
				<h3>
					周边金融业信息
					<span>正规金融机构与民间金融均可列入</span>
				</h3>
			</el-row>
		</div>
		<div class="content">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="121px" class="demo-ruleForm addOne">
				<el-row :gutter="10" v-for="company in companys" :key="company.value">
					<el-col :xs="18" :sm="18" :md="8" :lg="6">
						<el-form-item label="名称" prop="name">
							<el-input v-model="company.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="18" :sm="18" :md="8" :lg="6">
						<el-form-item label="离店距离" prop="name">
							<el-input v-model="company.distance">
								<template slot="append">米</template>
							</el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-button type="primary" class="btn_add2">添加一行</el-button>
			</el-form>
		</div>

		<!--店铺经营信息-->
		<div class="title">
			<el-row>
				<h3>店铺经营信息</h3>
			</el-row>
		</div>
		<div class="content">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="121px" class="demo-ruleForm">
				<el-row :gutter="10">
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="是否品牌加盟店" prop="name">
							<el-radio-group v-model="ruleForm.contractType">
								<el-radio label="0">是</el-radio>
								<el-radio label="1">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="商户类型" prop="name">
							<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
								<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="成立时间" prop="name">
							<el-date-picker v-model="ruleForm.value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="开业时间" prop="name">
							<el-date-picker v-model="ruleForm.value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24">
						<el-form-item label="注册地址" prop="name">
							<el-checkbox-group v-model="ruleForm.type">
								<el-checkbox label="与联系地址相同" name="type"></el-checkbox>
							</el-checkbox-group>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="18">
						<el-form-item label="" prop="name">
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
									<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
									<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
									<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-input v-model="ruleForm.name" placeholder="请输入详细联系地址"></el-input>
							</el-col>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="邮政编码" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入正确邮政编码"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="法人姓名" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入正确邮政编码"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="法人电话" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入正确邮政编码"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="法人身份证号" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入正确邮政编码"></el-input>
						</el-form-item>
					</el-col>

				</el-row>
				<el-row :gutter="10">
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="近三月平均营业额" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入近三月平均营业额">
								<template slot="append">万元</template>
							</el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="去年全年营业额" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入去年全年营业额">
								<template slot="append">万元</template>
							</el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="主营商品1" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入商品名称">
							</el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="均价" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入商品价格">
								<template slot="append">元</template>
							</el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="主营商品2" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入商品名称">
							</el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="均价" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入商品价格">
								<template slot="append">元</template>
							</el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="主营商品3" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入商品名称">
							</el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="均价" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入商品价格">
								<template slot="append">元</template>
							</el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="店铺日均人流量" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入店铺日均人流量">
							</el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</div>

		<!--申请人信息-->
		<div class="title">
			<el-row>
				<h3>申请人信息</h3>
			</el-row>
		</div>
		<div class="content">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="121px" class="demo-ruleForm">
				<el-row :gutter="10">
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="申请人姓名" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入申请人姓名"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="健康状况" prop="name">
							<el-select v-model="ruleForm.belongRegion" placeholder="请选择健康状况">
								<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="申请人学历" prop="name">
							<el-select v-model="ruleForm.belongRegion" placeholder="请选择申请人学历">
								<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="婚姻状况" prop="name">
							<el-select v-model="ruleForm.belongRegion" placeholder="请选择婚姻状况">
								<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="申请人籍贯" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入申请人籍贯"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="18">
						<el-form-item label="申请人户籍地址" prop="name">
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
									<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
									<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
									<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-input v-model="ruleForm.name" placeholder="请输入详细联系地址"></el-input>
							</el-col>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="18">
						<el-form-item label="申请人现居住地址" prop="name">
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
									<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
									<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
									<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-input v-model="ruleForm.name" placeholder="请输入详细联系地址"></el-input>
							</el-col>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="申请人占股比列" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入申请人占股比列">
								<template slot="append">%</template>
							</el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="10" v-for="company in companys" :key="company.value">
					<el-col :xs="24" :sm="24" :md="24" :lg="18">
						<el-form-item label="联系人信息" prop="name">
							<el-col :xs="2" :sm="2" :md="2" :lg="2">
								关系
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="4">

								<el-input v-model="company.distance"></el-input>
							</el-col>
							<el-col :xs="2" :sm="2" :md="2" :lg="2">
								姓名
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="4">
								<el-input v-model="company.distance"></el-input>
							</el-col>
							<el-col :xs="2" :sm="2" :md="2" :lg="2">
								手机号
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="4">
								<el-input v-model="company.distance"></el-input>
							</el-col>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</div>

		<!--入住终端机网络优势-->
		<div class="title">
			<el-row>
				<h3>入住终端机网络优势</h3>
			</el-row>
		</div>
		<div class="content">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
				<el-row :gutter="10">
					<el-col :xs="24" :sm="24" :md="18" :lg="14">
						<el-form-item prop="name">
							<el-checkbox-group v-model="ruleForm.type">
								<el-checkbox label="地理位置好" name="type"></el-checkbox>
								<el-checkbox label="客户资源丰富" name="type"></el-checkbox>
								<el-checkbox label="经营模式独特" name="type"></el-checkbox>
								<el-checkbox label="商品质量优异" name="type"></el-checkbox>
								<el-checkbox label="品牌知名度高" name="type"></el-checkbox>
								<el-checkbox label="其他" name="type"></el-checkbox>
							</el-checkbox-group>
						</el-form-item>
					</el-col>
					<el-col :xs="6" :sm="6" :md="6" :lg="6">
						<el-form-item prop="name">
							<el-input v-model="ruleForm.name" placeholder="请列举其他优势"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</div>
		
		<!--缓存，下一步按钮-->
		<div class="footer">
			<el-button type="primary">缓存</el-button>
			<el-button type="primary">下一步</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'storeMsg',
		data() {
			return {
				msg: 'WD1234567890',
				ruleForm: {
					name: '',
					contractType: '0',
					networkType: '0',
					belongRegion: '',
					value1: '',
					type: ''
				},
				region: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}],
				companys: [{
						name: "1",
						distance: "100"
					},
					{
						name: "1",
						distance: "100"
					}
				],
				address: {},
				obj: {
					label: {
						province: '',
						city: '',
						district: ''
					},
					default: {
						province: '北京',
						city: '北京',
						district: '东城区'
					},
					noLabel: true
				},
				pickerOptions0: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					}
				},
				rules: {
					name: [{
							required: true,
							message: '请输入活动名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					]
				}
			};
		}
	}
</script>

<style lang='scss' scoped>
	.storeMsg {
		.title {
			margin-bottom: 20px;
			h3 {
				float: left;
			}
			span {
				font-size: 12px;
			}
			p {
				float: right;
			}
		}
		.content {
			text-align: left;
			.el-select {
				display: block;
			}
			.addOne {
				position: relative;
				.btn_add {
					position: absolute;
					bottom: 0;
					left: 30%;
				}
				.btn_add2 {
					position: absolute;
					bottom: 22px;
					left: 55%;
				}
				@media only screen and (min-width: 100px) and (max-width: 990px) {
					.btn_add {
						left: 60%;
					}
					.btn_add2 {
						left: 80%;
					}
				}
				@media only screen and (min-width: 991px) and (max-width: 1200px) {
					.btn_add {
						left: 35%;
					}
					.btn_add2 {
						left: 70%;
					}
				}
			}
		}
		.footer{
			margin: 50px 0;
		}
	}
</style>