<template>
  <div class="Login">
    <vue-particles
      color="#dd2d2d"
      :particleOpacity="0.7"
      :particlesNumber="40"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dd2d2d"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="12"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="login-wrap">
      <div class="login-title">管理员登陆</div>
      <div class="login-body">
        <el-row class="inp-wrap">
          <el-col :offset="4" :span="18">
            <img class="img" src="@/assets/img/user.png"/>
            <input class="inp" v-focus="true" v-model="detail.name" placeholder="用户名/邮箱/手机号"/>
          </el-col>
        </el-row>
        <el-row class="inp-wrap">
          <el-col :offset="4" :span="18">
            <img class="img" src="@/assets/img/password.png"/>
            <input class="inp" v-model="detail.password" placeholder="密码"/>
          </el-col>
        </el-row>
        <el-row class="inp-wrap">
          <el-col :offset="4" :span="8" class="btn-remember" @click.native="remember=!remember">
             <img v-if="!remember" class="img" src="@/assets/img/checkbox-null.png"/>
             <img v-if="remember" class="img" src="@/assets/img/checkbox-true.png"/>
             <span :class="remember?'font-r':'font-m'">记住账号</span>
          </el-col>
          <el-col :offset="4" :span="8">
             <span class="forget">忘记密码</span>
          </el-col>
        </el-row>
        <el-row class="inp-wrap">
          <el-col :offset="4" :span="18">
             <div class="login" @click="login">马上登录</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Login',

  data () {
    return {
      bodySize: {
        height: window.innerHeight + 'px',
        width: window.innerWidth + 'px',
        backgroundSize: window.innerWidth + 'px ' + window.innerHeight + 'px',
        overflow: 'hidden'
      },
      value: '',
      remember: false,
      detail: {}
    }
  },
  destroyed () {
    window.onresize = null
  },
  directives: {
    focus: {
      inserted: function (el, {value}) {
        if (value) {
          el.focus()
        }
      }
    }
  },
  mounted () {
    const _this = this
    window.onresize = () => {
      _this.bodySize.height = window.innerHeight + 'px'
      _this.bodySize.width = window.innerWidth + 'px'
      _this.bodySize.backgroundSize = window.innerWidth + 'px ' + window.innerHeight + 'px'
      _this.color = '#213188'
    }
  },
  methods: {
    login () {
      console.log('user', this.detail)
      this.$router.push('/index')
    }
  }
}
</script>

<style lang = "less">
  .Login{
    width:100vw;
    height:100vh;
    background: url('../../assets/img/login.jpg') no-repeat;
    overflow:hidden;
    #particles-js{
      height:100%;
    }
    .login-wrap{
      box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
      background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      margin:auto;
      width:300px;
      height:400px;
      border:1px solid #5558ff;
      .login-title{
        color: #ffffffb8;
        font-size:18px;
        height:100px;
        line-height:100px;
        text-align:center;
        border-bottom:1px solid #c7c7c7;
      }
      .login-body{
        height:250px;
        border-bottom:1px solid #c7c7c7;
        .inp-wrap{
          height:40px;
          line-height:40px;
          margin:26px 0 0;
          .img{
            position:absolute;
            opacity: 0.8;
            top:11px;
            left:20px;
            height:20px;
          }
          .inp{
            border:1px solid #1e2656;
            text-indent:6px;
            border-radius:10px;
            background:none;
            outline:none;
            height:34px;
            width:100%;
            color:#bfbfbf;
            font-size:18px;
            transition: 0.5s linear;
          }
          .inp:hover{
            border: 1px solid #6974b3;
            background-color:#0f0f33;
            transition: 0.5s linear;
          }
          .inp:focus{
            color: #bfbfbf;
            font-size:18px;
          }
          .font-m{
            font-size:18px;
            transition: 0.5s linear;
            color:#606266;
          }
          .font-m:hover{
            color: #eaeaea;
            transition: 0.5s linear;
          }
          .font-r{
            font-size:18px;
            color:#1296db;
          }
          .btn-remember{
            font-size:18px;
            cursor:pointer;
          }
          .forget{
            font-size:18px;
            color:#9e9e9e;
            transition: 0.5s linear;
            cursor:pointer;
          }
          .forget:hover{
            color: #eaeaea;
            transition: 0.5s linear;
          }
          .login{
            color: #e9e9e9;
            cursor:pointer;
            text-align:center;
            letter-spacing: 8px;
            width:100%;
            border-radius:10px;
            background-color: #0074d9;
            transition: 0.5s linear;
          }
          .login:hover{
            background-color: #0049af;
            transition: 0.5s linear;
          }
        }
      }
    }
  }
</style>
