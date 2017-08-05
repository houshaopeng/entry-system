<template>
	<div class="login">
		<el-form :model="ruleForm"  ref="ruleForm" class="demo-ruleForm">
			<h1>商户登录</h1>
			<el-form-item>
				<el-input :maxlength="11" @blur="checkTel" v-model="ruleForm.username">
					<template slot="prepend">
						<img src="../assets/telephone (2).png" alt="手机" />
					</template>
				</el-input>

			</el-form-item>
			<el-form-item style="position: relative;">
				<el-input @change="Codechange" id="password" :maxlength="6" v-model="ruleForm.codeID" :disabled="editCode">
					<template slot="prepend">
						<img src="../assets/password.png" alt="密码" />
					</template>
				</el-input>
				<el-button type="primary" :disabled="getcodeshow" @click="getCode" style="position: absolute;top:0;right:0;border-radius: 0 4px 4px 0;">
					{{getcode}}
				</el-button>
			</el-form-item>
			<el-form-item v-if="isFlag">
				<el-checkbox @click="dialogFormVisible = true" v-model="checked"></el-checkbox>
				<el-button type="text" @click="dialogFormVisible = true">我已认真阅读并同意《注册协议》</el-button>
				<el-dialog title="善林财富网站服务协议" :visible.sync="dialogFormVisible">
					<div class="container">
						<p>善林（上海）金融信息服务有限公司及其运营的善林财富平台客户端（www.     ，以下简称“善林财富”），依据本协议的约定为善林财富借款人用户（以下简称“用户”或“您”）提供信息咨询、撮合、资信评估等居间服务。善林财富在此特别提醒，您应在认真阅读本协议、充分理解各条款内容后再选择是否接受本协议。除非您接受本协议所有条款，否则无法享有善林财富于本协议下所提供的服务。您一经勾选“我已阅读并同意《善林财富网站服务协议》”的勾选框，并注册成功或以成功注册的用户登录使用善林财富服务即视为您已经充分理解并完全接受本协议的全部条款。若您不接受以下条款，请停止注册或主动停止通过善林财富平台的业务操作。
本协议由善林财富制定并发布，如协议内容发生变更，善林财富应在其官网公告，公告期不短于30天，且协议变更后的内容在公告期满后生效，协议变更的内容不再向用户作个别通知。如果原用户不同意本协议的变更，应立即停止接受善林财富服务并及时向善林书面通知以终止本协议。原用户自公告期满日起如继续作为用户使用本网站或通过善林财富进行业务操作，则视为接受协议所做的修改，并应遵照修改后的协议履行相应应尽义务。</p>
						<p>第一章 善林财富使用说明
第1条 在通过善林财富进行任何业务操作前，您必须先在善林财富完成注册，成为善林财富的正式用户。
第2条 善林财富只接受持有中国大陆有效身份证的18周岁以上的具有完全民事行为能力的自然人成为网站用户。
第3条 用户有义务确保其向善林财富提交的个人资料信息的真实性、完整性和有效性，并承诺在有变动时对个人资料信息及时进行更新。若善林财富经判断有理由认为用户资料存在错误、虚假、过时或其他与前述情况相似情形的嫌疑，善林财富有权暂停或永久终止用户的会员资格，并禁止其通过善林财富进行任何操作，因此产生的所有损失，由该用户自行承担。
第4条 用户应向善林财富提供个人有效的联系方式，包括但不限于手机号码、家庭或办公电话号码、通讯地址、电子邮箱、联系人信息等，前述联系方式发生变更时，用户应在 3 日内在善林财富网站进行更新。因用户未提供或及时更新有效联系方式导致用户无法/未及时收到善林财富发送的信息，用户因此遭受的全部损失及法律后果应自行承担。
第5条 用户同意其在善林财富账户下的站内消息为接收善林财富送达本协议项下信息（包括但不限于电子合同、交易记录、重要通知等）的唯一指定渠道，其他联系方式仅为前述渠道的补充。</p>
						<p>第二章 善林财富服务内容
第6条 善林财富为用户提供的服务包括但不限于：交易信息的发布、信用咨询及评估、交易管理、合同管理、委托第三方支付机构或银行进行转账、充值、提现、代收、代付等，具体内容以善林财富实际提供的服务内容为准。以上部分服务开通前需事先完成前置步骤，如用户身份认证、签订在线协议或授权等，具体操作以善林财富制定的业务流程为准。
第7条 用户同意，其在善林财富上按交易流程在系统平台上所作的对特定行为授权的确认，将成为善林财富进行相关操作的唯一依据。因用户未能及时对交易结果进行修改、确认而造成的损失由用户自行承担。
第8条 善林财富仅对作为债权人的的出借人提交的债权转让信息进行形式审查。善林财富对发布的任何有关借款人的资料信息的真实性和有效性及出借人的出借资金来源均不作保证，用户应独立判断并作出交易决策。
第9条 善林财富为用户提供交易管理服务。如因系统故障等原因导致款项误存入或转出用户账户的，善林财富都有权纠正该错误，用户同意授权善林财富为纠正错误对其账户实施相应操作。
第10条 善林财富为用户提供合同管理服务。用户知悉并同意在善林财富实施的交易均采用电子合同的签约方式，用户同意经过其账户和密码验证后签订电子合同的行为具有与本人签署同等的法律效力。因用户没有妥善保管或管理其账号和/或密码而造成的所有损失由用户自行承担。
第11条 善林财富为用户提供委托第三方支付机构或银行进行银行卡认证、账户充值、取现、代收、代付、查询、通知等服务。本协议项下的交易支付均通过前述在第三方支付机构或银行开立的托管账户完成，用户从前述托管账户中取现时，应按善林财富的业务流程对接受资金的银行卡进行实名认证。</p>
						<p>第三章 风险提示说明
第12条 用户了解并同意，通过善林财富进行的借款并不能规避任何风险，善林财富仅为交易平台，不对通过平台进行的交易承担任何责任（包括任何形式的担保和保证）。
第13条 善林财富不对发布的任何标的信息提供任何明示或默认的保证，不对信息内容的真实性、准确性和完整性进行保证。用户应知悉交易存在的风险，并在独立判断风险后作出交易决策。交易产生的所有风险由用户自行承担。
第14条 善林财富的合作机构向用户提供的服务由该合作机构负责。对用户享用相关服务时与该合作机构所产生的一切争议、纠纷及损失，善林财富不承担任何责任。
第15条 本协议约定的账户充值、取现、代收、代付以及查询等服务均由与善林财富合作的第三方支付机构或银行提供，用户知悉并同意：
(a) 受第三方支付机构或银行可能仅在工作日或工作时间进行资金代扣及划转等各种原因所限，善林财富不对资金到账时间做任何承诺，也不承担与此相关的责任和因此造成的任何损失；
(b) 用户一旦授权与善林财富合作的第三方支付机构或银行开通并提供代收或代付服务，即表示用户在成为善林财富用户期间不可撤销地授权善林财富及其合作方进行相关操作，用户不得以任何理由拒绝或要求取消交易；
(c) 使用相关服务，用户应按照与第三方支付机构或银行的规定或约定支付费用，如因用户未按相关规定或约定缴付费用而造成的所有损失由用户自行承担</p>
						<p>第四章 善林财富服务费用说明。
第16条 用户使用善林财富服务时，善林财富有权向用户收取服务费用，用户同意并授权善林财富委托的第三方支付机构或银行自其账户中直接划扣服务费用，并由第三方支付机构或银行支付给善林财富。具体服务费用收费标准以善林财富网站的公示及用户签署的相关协议约定为准。善林财富有权制定及调整服务费，但如发生服务费新增或调整应进行至少30天网站公告，该新增或调整的服务费自公告期满后自动生效，自生效日起产生的服务费以新费用标准计算。
第17条 用户在使用善林财富服务过程中可能需要向提供服务的第三方支付平台或银行支付服务费用，包括但不限于充值费、提现费等，具体的收费标准以善林财富网站的公示或用户与第三方签订的协议为准。</p>
						<p>第五章 用户账户安全使用承诺
第18条 用户账户是用户在善林财富进行操作的唯一标识。用户承诺妥善保管其账号密码，不会将个人账号的信息泄露给其他任何人或授权第三方使用。
第19条 用户同意，确保账户安全是用户的责任。通过个人账户所进行的一切操作，发布的一切言论，都视为用户本人的行为及其真实意图的表达，所有损失及法律后果由用户本人自行承担。</p>
						<p>第六章 用户守法承诺
第20条 用户承诺不以任何非法目的或途径使用善林财富服务，并遵守所有与善林财富服务相关的法律、法规及其他规范性文件。用户因违背上述承诺造成的损失及后果，由用户自行负全部责任并承担因此可能给善林财富造成的全部损失。
第21条 用户承诺严格按照本协议及善林财富网站上签订的相关协议内容履行义务。如用户未完全履行义务，善林财富基于风险控制的目的，有权将其违约行为记录在案并通过各类渠道或方式公开披露用户违约失信行为。</p>
						<p>第七章 善林财富服务中断说明
第22条 用户理解互联网运行的特殊性，可能发生因系统维护、设备故障、黑客攻击及其他不可抗力的影响，而导致用户无法正常使用相关服务，发生前述情况时善林财富应及时发布公告，尽快恢复系统正常运行，以减少对用户的影响。同时，用户同意善林财富对前述情况不承担任何责任。</p>
						<p>第八章 用户隐私保护说明
第23条 用户知悉并同意，为了更好地掌握客户情况并提供合适的服务，善林财富有权向任何单位和个人以合法合规的途径了解并核实用户信息，对于用户提供及善林财富自行通过公开或其他合法渠道获得的用户个人基本信息、信用信息、资产信息及其他相关信息（以下合称“用户个人信息”），善林财富有权进行永久保存、统计、分析及整理。
第24条 为实现本协议及用户与善林财富的其他用户签订的协议，包括但不限于履行协议、提供服务、解决争议、保障交易安全等，用户同意善林财富可以自行使用或向第三方服务商披露用户的个人信息。
第25条 善林财富采用行业标准和惯例保护用户的个人信息，非因履行本协议，善林财富不得将客户信息提供给任何第三方。
第26条 善林财富有义务根据有关法律法规的要求，根据司法机关和政府部门的要求提供用户的个人资料。
第27条 若用户未能按照其与善林财富及善林财富的其他用户签订的协议等法律文件的约定履行应尽义务，善林财富有权向任何第三方披露用户的个人信息及违约事实，使用相关信息进行第三方风险提示、信用审核及债权催收等操作，如由此给用户造成的损失，善林财富不承担任何责任。</p>
						<p>第九章 知识产权保护说明
第28条 善林财富上所有内容的知识产权均由善林财富及其权利人依法拥有，包括但不限于文本、数据、文章、设计、源代码、图片、软件、照片、音频、视频、平台架构等。未经善林财富或其权利人的书面同意，任何人不得擅自使用、修改、复制、模仿、传播、公开发布善林财富的程序或内容（包括但不限于电子的、机械的、复印的、录音录像的方式和形式等）。
第29条 尊重知识产权是用户应尽的义务，如有违反，用户应对善林财富及其权利人承担损害赔偿等全部法律责任。</p>
						<p>第十章 法律适用说明
第30条 本协议由用户与善林（上海）金融信息服务有限公司共同签订，适用于用户在善林财富的一切行为。协议内容包括但不限于协议正文条款，已发布的或将来可能发布的各类规则，以上全部都应视为本协议不可分割的一部分，与协议正文条款享有同等法律效力。
第31条 本协议不创制亦不影响善林金融旗下其他互联网金融平台用户之间产生的法律关系及法律纠纷。但用户应同意接受与善林金融旗下其他互联网金融平台或其他用户签订的所有协议，并承诺按照前述签订的所有协议承担相应的责任和义务。
第32条 与本协议有关的一切争议，包括但不限于协议的订立、有效性、解释、履行等争议的解决均依据中华人民共和国法律；如果协议双方在本协议履行过程中发生任何争议，应首先友好协商解决；如无法通过协商达成一致，双方任意一方均有权向本协议签订地有管辖权的人民法院提起诉讼。在根据本条协商或诉讼程序进行期间，除争议事项之外，本协议应在所有方面保持全部效力。除争议事项所涉及的义务之外，各方应继续履行其在本协议项下的义务及行使其在本协议项下的权利，任何一方不得以争议未解决作为抗辩。
第33条 本协议签订地为中国上海市浦东新区。</p>
					</div> 					
					<div slot="footer" class="dialog-footer" style="text-align:center;">
						<el-button type="primary" @click="dialogFormVisible = false,checked = true">同意</el-button>
					</div>
				</el-dialog>
			</el-form-item>
			<el-form-item>
				<el-button class="btn_login" :disabled="dislogin" type="primary" @click="login">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				editCode:true,
				isFlag: false,
				checked: false,
				dialogFormVisible: false,
				getcode: "获取验证码",
				getcodeshow: false,
				dislogin: true,
				ruleForm: {
					username: '',
					codeID: '',
				},
				flagArr: [],
				msg: "",
				token: ""
			};
		},
		methods: {
			checkTel() {
				if(!this.ruleForm.username) {
					this.$message({
							message: "手机号不能为空",
							type: 'error'
						})
				} else if(!/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i.test(this.ruleForm.username)) {
					this.$message({
							message: "请输入正确手机号",
							type: 'error'
						})
				}
			},
			Codechange() {
				if(this.ruleForm.codeID.length) {
					this.dislogin = false;
				} else {
					this.dislogin = true;
				}
			},
			getCode() { //获取验证码
				if(!/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i.test(this.ruleForm.username)) {
					this.$message({
						message: "请输入正确手机号",
						type: 'error'
					})
					return false;
				}else{
				var countdown = 60;
				this.editCode = false;
				
				
				this.$http.post(process.env.API + "/getMessageCode", {
					"userId": this.ruleForm.username,
				}).then((res) => {
					if(res.data.code == '000000') {
						if(res.data.data.isFlag == "1") {
							this.isFlag = true;
						} else if(res.data.data.isFlag == "2") {
							this.isFlag = false;
						}
						this.getcodeshow = true;
						var timer = setInterval(() => {
								if(countdown > 0) {
									countdown--;
									this.getcode = "再次获取" + countdown + "s";
								} else if(countdown == 0) {
									clearInterval(timer)
									this.getcode = "再次获取"
									this.getcodeshow = false;
								}
							},1000)
						} else {
							this.$message({
								message: res.data.messages,
								type: 'error'
							})
						}
					},(res)=>{
						this.$message({
							message: res.data.messages,
							type: 'error'
						})
					})
				}
			},
			// 申请编号
			applicationNumber() {
				this.$http.post(process.env.API + "/terminal/getNumber", "", {
					headers: {
						"x-sljr-session-token": this.token,
					}
				}).then((res) => {
					if(res.data.code == '000000') {
						this.msg = res.data.data.requestNo;
						sessionStorage.setItem('userInfo', JSON.stringify({
							userToken: this.token,
							telPhone: this.ruleForm.username,
							requestNo: this.msg
						}));
						this.stepLogin();
					} else {
						this.$message({
							type: "error",
							message: res.data.messages
						})
					}

				}, (res) => {
					this.$message({
						message: res.data.messages,
						type: 'error'
					})
				})
			},
			stepLogin() {
				this.$http({
					method: "POST",
					url: process.env.API + "/terminal/stepLogin",
					headers: {
						"x-sljr-session-token": this.token,
					},
					body: {
						"userId": this.ruleForm.username,
						"requestNo": this.msg
					}
				}).then((res) => {
					if(res.data.code == "000000") {
						console.log(res.data.data)
						this.flagArr = res.data.data.list;
						for(let i = 0; i < this.flagArr.length; i++) {
							if(this.flagArr[i].flag) {
								this.$router.push({
									path: this.flagArr[i].value
								});
								return false;
							}
						}
					} else {
						this.$message({
							type: "error",
							message: res.data.messages
						})
					}
				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})
			},
			login() { 								//登录
				//验证手机号码
				if(!/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i.test(this.ruleForm.username)){
					this.$message({
						type: "error",
						message: "请输入正确的手机号码"
					})
				//验证码输入提示
				}else if(!/^\d{6}$/.test(this.ruleForm.codeID)){
					this.ruleForm.codeID = "";
					var oTxt = document.getElementById('password');
					oTxt.getElementsByTagName('input')[0].focus();
					this.$message({
						type: "error",
						message: "请输入正确的验证码"
					})
				}else{
					//手机号验证码输入都正确
					if(!this.isFlag) {
						this.gologin()
					}else if(this.isFlag && this.checked) {
						this.isFlag = false;
						this.gologin()
					}else {
						this.$message({
							type: "error",
							message: "请勾选认真阅读并同意《注册协议》"
						})
					}
				}

			},
			gologin() {

				this.$http({
					method: "POST",
					url: process.env.API + "/login",
					body: {
						"userId": this.ruleForm.username,
						"password": this.ruleForm.codeID
					}
				}).then((res) => {
					if(res.data.code == "000000") {
						this.token = res.data.data["x-sljr-session-token"];
						this.applicationNumber();
						sessionStorage.setItem('userInfo', JSON.stringify({
							userToken: res.data.data["x-sljr-session-token"],
							telPhone: this.ruleForm.username,
							requestNo: this.msg
						}));
					} else {
						this.ruleForm.codeID = "";
						var oTxt = document.getElementById('password');
						oTxt.getElementsByTagName('input')[0].focus();
						this.$message({
							type: "error",
							message: "请输入正确的验证码"
						})
					}
				}, (res) => {
					this.$message({
						type: "error",
						message: res.data.messages
					})
				})

			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		},
		mounted: function() {

		}
	}
</script>

<style lang='scss' scoped>
	.login {
		.demo-ruleForm {
			margin: 100px auto;
			max-width: 500px;
			h1 {
				margin: 20px 0;
			}
			.btn_login {
				width: 100%;
				margin-top: 30px;
			}
		}
	}
	.container{
		height:400px;
		overflow-y:auto;
		p{
			text-indent:25px;
			text-align:left;
		}
	}
</style>