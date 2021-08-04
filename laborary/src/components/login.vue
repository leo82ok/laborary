<template>
    <div class="author">Leo@dingtalk</div>
    <div class="login">
        <div class="login-center">
            <div style="text-align: right" @click="change">
                <img src="/images/computerBlue.png" width="40" v-show="picCorner">
                <img src="/images/2wBlue.png" width="40" v-show="!picCorner">
            </div>
            <div class="login-title" style="margin-top: -10px">实验室数据管理系统登录</div>
            <div class="layui-tab layui-tab-brief login-main-container" lay-filter="docDemoTabBrief" v-show="picCorner">
                <ul class="layui-tab-title">
                    <li class="layui-this">账户密码登录</li>
                    <li>手机号登录</li>
                </ul>
                <div class="layui-tab-content">
                    <div class="layui-tab-item layui-show">
                        <input type="text" name="pUsername" lay-verify="pUsername" autocomplete="off"
                               placeholder="请输入用户名" class="layui-input txtUser txtIcon" v-model="pUsername">
                        <input type="text" name="pPassword" lay-verify="pPassword" autocomplete="off"
                               placeholder="请输入用密码" class="layui-input txtPassword txtIcon" v-model="pPassword">
                        <input type="text" name="pVerify" lay-verify="pVerify" autocomplete="off" placeholder="请输入验证码"
                               class="layui-input txtVerify txtIcon" v-model="pVerification">
                        <button type="button" class="layui-btn layui-btn-normal layui-btn-radius" @click="login">登录
                        </button>
                    </div>
                    <div class="layui-tab-item">
                        <input type="text" name="pCellphone" lay-verify="pCellPhone" autocomplete="off"
                               placeholder="请输入用户名" class="layui-input txtCellphone txtIcon" v-model="pUsername">
                        <input type="text" name="pMessage" lay-verify="pMessage" autocomplete="off" placeholder="请输入用户名"
                               class="layui-input txtMessage txtIcon" v-model="pUsername">
                        <button type="button" class="layui-btn layui-btn-normal layui-btn-radius" @click="login">登录
                        </button>
                    </div>
                </div>
            </div>
            <div v-show="!picCorner">
                <img src="public/images/2w.png" style="width:50%;margin: 7%">
            </div>

        </div>

    </div>
    <div>

    </div>
</template>
<script>
    // const  router =  useRouter()
    export default {
        name: 'login',
        methods: {
            login() {
                this.$router.push('/about')
                // router.push('/about');
            },
            change() {
                this.picCorner = !this.picCorner
            }
        },
        data() {
            return {
                picCorner: true
            }

        }
    }
</script>
<style>
    html {
        background: url("/images/login.jpg") no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .author {
        color: #a0cfff;
        font-size: 20px;
        text-align: left;
        margin-left: 50px;
    }

    .login {
        width: 500px;
        margin: 0 auto;
        border: #8cc5ff 5px solid;
        border-radius: 1%;
        background: white;
    }

    .txtUser, .txtCellphone {
        background: url("/icon/user.jpg") no-repeat left center;
    }

    .txtPassword {
        background: url("/icon/password2.jpg") no-repeat left center;
    }

    .txtVerify, .txtMessage {
        background: url("/icon/verify.jpg") no-repeat left center;
    }

    .txtIcon {
        /*//background-size: 25px 25px;*/
        padding-left: 30px;
    }

    .login-title {
        font-size: 24px;
        font-weight: bold;
        margin: 40px;
    }

    .login-main-container {
        width: 80%;
        margin: 0 auto;
    }

    .login-main-container input {
        margin-top: 7%;
        display: block;
    }

    .login-main-container button {
        margin: 10% auto;
        display: block;
        width: 100%;
    }
</style>