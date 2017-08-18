<template>
    <div class="proxyAgreement">
        <div class="link_btn">
            <el-button @click="$router.push({path: '/storeMsg'})" :disabled = "storeMsg">门店信息录入</el-button> ——————
            <el-button @click="$router.push({path: '/imageFileUpload'})" :disabled = "imageFileUpload">影像资料上传</el-button> ——————
            <el-button @click="$router.push({path: '/imageFileUpload2'})" :disabled = "imageFileUpload2">影像资料上传</el-button> ——————
            <el-button @click="$router.push({path: '/proxyAgreement'})" :disabled = "proxyAgreement">委托书确认</el-button> ——————
            <el-button @click="$router.push({path: '/loanContract'})" :disabled = "loanContract">借款合同确认</el-button>
        </div>
        <hr/>
        <div class="content">
            <el-row>
              <el-col :span="12"><div class="grid-content ">
                  <h4>授权划扣委托书</h4>
                  <div class="container">
                    <p>本委托书自        年      月      日起生效。</p>
                    <p>委托人：</p>
                    <p>住所地：</p>
                    <p>受托人：善林（上海）金融信息服务有限公司</p>
                    <p>地  址：</p>
                    <p>鉴于委托人根据  善林（上海）金融信息服务有限公司（以下简称“善林金融公司”）提供的借款咨询服务向出借人申请借款，委托人、受托人、出借人为此签署了编号为             的《     》。[请填写借款人、出借人、善林金融三方签署的借款协议名称和编号，请务必与实际签署的协议信息保持一致。]为方便上述协议中相关款项及费用的顺利支付，委托人现委托并授权受托人善林金融公司或善林金融公司委托的第三方支付机构/银行代委托人进行如下操作（开立银行账户除外）：</p>
                    <p>1、通过其合作的第三方支付机构/银行将出借人出借款项直接划入委托人指定的如下银行账户（以下称“委托人指定银行账户”）：</p>
                    <p>户名：</p>
                    <p>开户银行：</p>
                    <p>账号：</p>
                    <p>2、从      [请填写提供居间服务的平台名称。]平台（即善林金融公司自主运营的提供金融信息咨询服务及相关居间服务的网络平台）上委托人账户（以下简称“委托人还款账户”）中划扣《    》[填写借款协议名称]约定的委托人应付的服务费等相关款项金额至受托人善林金融公司账户。</p>
                    <p>3、委托人委托受托人通过受托人合作的第三方支付机构/银行按照《         》的约定将应付给出借人的本金、利息及相关款项划转至出借人指定账户。[还款操作是否和产品大纲相符合，待确认？]</p>
                    <p>4、委托人同意任何应从委托人账户划付的款项，由受托人按照委托人的委托，委托受托人合作的第三方支付机构/银行按照本协议及相关协议的约定从委托人账户中划付相应数额；若出现多划付现象，受托人在收到通知后次日应将多划付的部分退还至委托人账户中；如出现少划付的现象，由受托人合作的第三方支付机构/银行补充划付未足额的部分款项。</p>
                    <p>5、委托人保证以上信息中的身份及所提供的信息真实、有效、准确及合法，因身份或所提供信息错误而引起的法律后果及损失，由委托人自行承担。由于挂失、账户冻结、金额不足等原因造成扣款失败而导致损失的，由委托人自行承担。委托人变更付款授权账户时，须及时通知善林金融公司，并按更换后的账户信息重新签署授权书。因委托人未及时办理变更手续而导致的所有责任和后果，均由委托人自行承担。</p>
                    <p>6、委托人同意受托人善林金融公司对上述委托授权事宜具有转委托权。
                    委托人完全同意并认可本授权书的全部内容，自委托人签署之日起生效</p>。

                    <p>委托人（签字）：</p>
                  </div>
              </div></el-col>
              <el-col :span="12"><div class="grid-content ">
                  <h4>委托发布借款需求及个人征信查询授权书</h4>
                  <div class="container1">

                    <iframe class="hetong" src="http://marketactivity-test.oss-cn-shanghai.aliyuncs.com/operation_platform/QD2280003972/file/consultationService.pdf"></iframe>
                  </div>
              </div></el-col>
            </el-row>
            <div class="footer">
                <el-button type="primary" @click="updateStates" >下一步</el-button>
            </div>
        </div>
    </div>
</template>
<script >
    import PDFObject from "./components/pdfobject.js"
    export default{
        name:'proxyAgreement',
        data(){
            return{
                storeMsg:null,
                imageFileUpload:null,
                imageFileUpload2:null,
                proxyAgreement:null,
                loanContract:null,
            }
        },
        methods:{
            //确认委托借款协议
            completeLoan() {
                this.$http({
                    method: "POST",
                    url: process.env.API + "/terminal/step",
                    headers: {
                        "x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
                    },
                    body: {
                        "userId": JSON.parse(sessionStorage.getItem("userInfo")).telPhone, //    手机号码
                        "level": "4",
                        "requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo // 请求流水号
                    }
                }).then((res) => {
                    if(res.data.code="000000"){

                    }
                }, (res) => {
                    this.$message({
                        type: "error",
                        message: res.data.messages
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
                        "pagination":4,
                        "requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo,         //  申请编号
                    }
                }).then((res)=>{
                    if(res.data.code=="000000"){

                        this.$router.push({
                            path: '/loanContract'
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
        watch: {

        },
        created: function() {

        },
        components: {

        },
        mounted: function() {
            this.routerDisable();
        }
    }
</script>
<style lang="scss" scoped>
    .link_btn {
        margin: 20px 0;
    }
    .container{
        margin:10px 0;
        height:500px;
        overflow-y:auto;
        p{
            text-indent:25px;
            text-align:left;
        }
    }
    .container1{
        margin:10px 0;
        height:500px;
    }
    .hetong{
        width:100%;
        height:100%
    }
    .footer {
        margin: 10px 0;
        .el-button {
            width: 150px;
        }
    }
</style>