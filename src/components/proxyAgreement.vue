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
        <div class="loading_box" v-show="loading">
            <vue-loading type="spiningDubbles" color="#ffffff" :size="{ width: '50px', height: '50px' }" v-show="allTit">
                
            </vue-loading>
        </div>    
        <div class="content">
            <el-row>
              <el-col :span="12">
                  <h4>授权划扣委托书</h4>
                  <iframe class="hetong " :src="authorizeUrl"></iframe>
              </el-col>
              <el-col :span="12">
                <div class="grid-content ">
                  <h4>委托发布借款需求及个人征信查询授权书</h4>
                  <iframe class="hetong" :src="agreementUrl"></iframe>
                </div>  
              </el-col>
            </el-row>
            <div class="footer">
                <el-button type="primary" @click="updateStates" :disabled="disabled">下一步</el-button>
            </div>
        </div>
    </div>
</template>
<script >
    // import PDFObject from "./components/pdfobject.js"
    import vueLoading from 'vue-loading-template'
    export default{
        name:'proxyAgreement',
        data(){
            return{
                storeMsg:null,
                imageFileUpload:null,
                imageFileUpload2:null,
                proxyAgreement:null,
                loanContract:null,
                authorizeUrl:"",
                agreementUrl:"",
                allTit:true,
                loading:true,
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

            // 获取委托协议url
            getAgreement(){
                this.$http.get(process.env.API + "/terminal/findAgreement",{
                    headers: {
                        "x-sljr-session-token": JSON.parse(sessionStorage.getItem("userInfo")).userToken,
                    },
                    params: {
                        "requestNo": JSON.parse(sessionStorage.getItem("userInfo")).requestNo,         //  申请编号
                    }
                }).then((res)=>{
                    console.log(res);
                    this.loading = false;
                    if(res.data.code=="000000"){
                        this.authorizeUrl = res.data.data.authorizeUrl;    // 授权划扣委托书
                        this.agreementUrl = res.data.data.agreementUrl;    // 委托发布借款需求及个人征信查询授权书

                    }else{
                        this.$message({
                            type:"error",
                            message:res.data.messages
                        })
                    }
                },(res)=>{
                    this.loading = false;
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
        computed:{
            disabled:function(){
                if(this.authorizeUrl && this.agreementUrl){
                    return false;
                }else {
                    return true;
                }
            }
        },
        watch: {

        },
        created: function() {

        },
        components: {
             vueLoading
        },
        mounted: function() {
            this.getAgreement();
            this.routerDisable();
        }
    }
</script>
<style lang="scss" scoped>
    .link_btn {
        margin: 20px 0;
    }
    .loading_box{
        position:absolute;
        z-index:100;
        left:50%;
        top:400px;
        border-radius:5px;
        margin-left:-50px;
        color:#ffffff;
        width:100px;
        height:80px;
        // padding-top:20px;
        padding-top: 20px;
        background:rgba(0,0,0,0.5);
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
        height:500px;
    }
    .footer {
        margin: 10px 0;
        .el-button {
            width: 150px;
        }
    }
</style>