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
    <!--    <form name="form1">-->
    <!--      <input type="text">-->
    <!--      <input type="radio" name="color" value="1">1-->
    <!--      <input type="radio" name="color" value="2">2-->
    <!--      <input type="submit" id="sub">提交-->
    <!--    </form>-->
  </div>
</template>
<script>
</script>

<style lang = "less">

</style>
