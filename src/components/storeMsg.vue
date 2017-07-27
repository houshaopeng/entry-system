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
						<el-form-item label="网点合同类型" prop="contractType">
							<el-radio-group v-model="ruleForm.contractType">
								<el-radio label="0">标准合同</el-radio>
								<el-radio label="1">非标合同</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>

					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="网点类型" prop="networkType">
							<el-radio-group v-model="ruleForm.networkType">
								<el-radio label="0">个人</el-radio>
								<el-radio label="1">企业</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="所属区域" prop="belongRegion">
							<el-select v-model="ruleForm.belongRegion" placeholder="请选择所属区域">
								<el-option v-for="item in region" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="网点名称" prop="networkName">
							<el-input v-model="ruleForm.networkName"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="网点联系人" prop="networkContact">
							<el-input v-model="ruleForm.networkContact"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="联系电话" prop="contactTel">
							<el-input v-model="ruleForm.contactTel"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="16" :lg="12">
						<el-form-item label="推荐渠道" prop="recommendedID">
							<el-col :xs="12" :sm="12" :md="12" :lg="12">
								<el-select v-model="ruleForm.recommendedID" placeholder="请选择推荐渠道">
									<el-option v-for="item in recommended" :key="item.value" :label="item.channelName" :value="item.applicationNo">
									</el-option>
								</el-select>
							</el-col>
							<el-col :xs="12" :sm="12" :md="12" :lg="12">
								<el-select v-model="ruleForm.recommendedChannels" placeholder="请选择具体的推荐渠道">
									<el-option v-for="item in channels" :key="item.value" :label="item.channelName" :value="item.applicationNo">
									</el-option>
								</el-select>
							</el-col>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="12">
						<el-form-item label="联系地址" prop="contactAddress">
							<el-col :xs="18" :sm="18" :md="18" :lg="18">
								<address-picker :opts="obj" v-model="address"></address-picker>
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-input v-model="ruleForm.contactAddress" placeholder="请输入详细联系地址"></el-input>
							</el-col>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="业务员姓名" prop="salesmanName">
							<el-input v-model="ruleForm.salesmanName"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="业务员工号" prop="salesmanNumber">
							<el-input v-model="ruleForm.salesmanNumber"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24">
						<el-form-item label="机器型号" prop="name" class="addOne">
							<el-row v-for="machine in machines" :key="machines.id" style="margin-bottom: 10px;">
								<el-col :xs="12" :sm="12" :md="8" :lg="6">
									<el-select v-model="machine.machineType" placeholder="请选择机器型号">
										<el-option v-for="item in machineList" :key="item.value" :label="item.machineName" :value="item.machineValue">
										</el-option>
									</el-select>
								</el-col>
							</el-row>
							<el-button type="primary" class="btn_add" @click="addMachine">添加一台</el-button>
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
				<el-button type="primary" class="btn_add2" @click="addCompany">添加一行</el-button>
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
							<el-col :xs="18" :sm="18" :md="18" :lg="18">
								<address-picker :opts="obj" v-model="address"></address-picker>
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
							<el-input v-model="ruleForm.name" placeholder="请输入法人姓名"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="法人电话" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入法人电话"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="法人身份证号" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入法人身份证号"></el-input>
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
						<el-form-item label="健康状况" prop="healthStatus">
							<el-select v-model="ruleForm.healthStatus" placeholder="请选择健康状况">
								<el-option v-for="item in healthList" :key="item.value" :label="item.healthStatus" :value="item.healthValue">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="申请人学历" prop="applicantDegree">
							<el-select v-model="ruleForm.applicantDegree" placeholder="请选择申请人学历">
								<el-option v-for="item in degrees" :key="item.value" :label="item.degree" :value="item.degreeValue">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6">
						<el-form-item label="婚姻状况" prop="name">
							<el-select v-model="ruleForm.maritalStatus" placeholder="请选择婚姻状况">
								<el-option v-for="item in maritalList" :key="item.value" :label="item.label" :value="item.value">
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
							<el-col :xs="18" :sm="18" :md="18" :lg="18">
								<address-picker :opts="obj" v-model="address"></address-picker>
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="6">
								<el-input v-model="ruleForm.name" placeholder="请输入详细联系地址"></el-input>
							</el-col>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="18">
						<el-form-item label="申请人现居住地址" prop="name">
							<el-col :xs="18" :sm="18" :md="18" :lg="18">
								<address-picker :opts="obj" v-model="address"></address-picker>
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
							<el-col :xs="2" :sm="2" :md="2" :lg="1">
								关系
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="5">
								<el-select v-model="ruleForm.applicantDegree" placeholder="请选择与联系人之间的关系">
									<el-option v-for="item in relationList" :key="item.value" :label="item.degree" :value="item.degreeValue">
									</el-option>
								</el-select>
							</el-col>
							<el-col :xs="2" :sm="2" :md="2" :lg="1">
								姓名
							</el-col>
							<el-col :xs="6" :sm="6" :md="6" :lg="5">
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
			var checkTel = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('手机号不能为空'));
				} else if(!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(value)) {
					return callback(new Error('手机号格式有误'));
				} else {
					callback();
				}
			};
			return {
				msg: 'WD1234567890',
				ruleForm: {
					name: '',
					contractType: '0', //网点合同类型
					networkType: '0', //网点类型
					belongRegion: '', //所属区域
					networkName: '', //网点名称
					networkContact: '', //网点联系人
					contactTel: '', //联系电话
					recommendedID: '', //推荐渠道
					recommendedChannels: '', //具体渠道
					contactAddress: '', //联系地址
					salesmanName: '', //业务员名字
					salesmanNumber: '', //业务员工号
					value1: '',
					type: ''
				},
				region: [{
					label: '外部渠道',
					value: '1'
				}],
				recommended: [{
						channelName: '外部渠道',
						applicationNo: '1'
					},
					{
						channelName: '内部渠道',
						applicationNo: '0'
					},
					{
						channelName: '无',
						applicationNo: '-1'
					}
				], //推荐渠道
				channels: [{
						channelName: '外部渠道',
						applicationNo: '1'
					},
					{
						channelName: '内部渠道',
						applicationNo: '0'
					},
					{
						channelName: '无',
						applicationNo: '-1'
					}
				], //推荐渠道
				companys: [{
						name: "1",
						distance: "100"
					},
					{
						name: "1",
						distance: "100"
					}
				],
				address: {}, //三级联动
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
				machines: [{
					machineType: ""
				}],
				machineList: [{
						machineName: "24寸壁挂式",
						machineValue: "0",
					},
					{
						machineName: "17寸柜式",
						machineValue: "1",
					}
				],
				healthList: [{ //健康状况
						healthStatus: "健康",
						healthValue: "2"
					},
					{
						healthStatus: "一般",
						healthValue: "3"
					},
					{
						healthStatus: "较差",
						healthValue: "4"
					},
					{
						healthStatus: "有疾病",
						healthValue: "5"
					}
				],
				degrees: [{ //学历
						degree: "小学",
						degreeValue: "0"
					},
					{
						degree: "初中",
						degreeValue: "1"
					},
					{
						degree: "高中",
						degreeValue: "2"
					}, {
						degree: "大专",
						degreeValue: "3"
					}, {
						degree: "本科",
						degreeValue: "4"
					}, {
						degree: "硕士研究生",
						degreeValue: "5"
					}, {
						degree: "博士研究生",
						degreeValue: "6"
					}
				],
				maritalList: [{ //婚姻状况
					maritalStatus: "未婚",
					maritalValue: "0"
				}, {
					maritalStatus: "已婚",
					maritalValue: "1"
				}, {
					maritalStatus: "离异",
					maritalValue: "2"
				}, {
					maritalStatus: "丧偶",
					maritalValue: "3"
				}],
				relationList: [{
					relationship: "配偶",
					relationValue: "0"
				}, {
					relationship: "直系亲属",
					relationValue: "1"
				}, {
					relationship: "同事",
					relationValue: "2"
				}],
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
					],
					contractType: [{
						required: true,
						message: '请选择网点合同类型',
						trigger: 'change'
					}],
					networkType: [{
						required: true,
						message: '请选择网点类型',
						trigger: 'change'
					}],
					belongRegion: [{
						required: true,
						message: '请选择所属区域',
						trigger: 'change'
					}],
					networkName: [{
						required: true,
						message: '请输入网点名称',
						trigger: 'blur'
					}],
					networkContact: [{
						required: true,
						message: '请输入网点联系人',
						trigger: 'blur'
					}],
					contactTel: [{
						validator: checkTel,
						trigger: 'blur'
					}],
					recommendedID: [{
						required: true,
						message: '请选择推荐渠道',
						trigger: 'change'
					}],
					contactAddress: [{
						required: true,
						message: '请输入具体联系地址',
						trigger: 'blur'
					}],
					salesmanName: [{
						required: true,
						message: '请输入业务员姓名',
						trigger: 'blur'
					}],
					salesmanNumber: [{
						required: true,
						message: '请输入业务员工号',
						trigger: 'blur'
					}],
				}
			};
		},
		methods: {
			addMachine() {
				this.machines.push({
					machineType: ""
				});
			},
			addCompany() {
				this.companys.push({
					name: "",
					distance: ""
				});
			},
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
					bottom: 10px;
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
		.footer {
			margin: 50px 0;
		}
	}
</style>
<style type="text/css">
	.address-picker select {
		min-width: 0px;
		width: 30%;
		margin: 0 1%;
		height: 36px;
		color: #1f2d3d;
		border-radius: 5px;
		border: 1px solid #bfcbd9;
		outline: none;
	}
</style>