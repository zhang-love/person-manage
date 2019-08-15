<template>
    <div class="BaseHead">
      <div class="head-wrap">
        <div class="personLogo">个人管理</div>
        <ul class="head-right">
          <li>
            <div id="message" class="person" @mouseenter="operationList($event,pageOperation)" @mouseleave="initCommonUse">
              <i class="iconfont icon-common-use"></i>
            </div>
          </li>
          <li>
            <div class="person">
              <div class="img-wrap">
                <img src="@/assets/img/person.jpg">
              </div>
            </div>
          </li>
          <li>
            <div class="person" @mouseenter="operationList($event,userOperation)" @mouseleave="initCommonUse">
              个人信息
            </div>
          </li>
        </ul>
        <div v-show="dropDownSwitch" :style="dropDown" @mouseenter="clearDropTime" @mouseleave="initCommonUse" class="downList">
          <ul>
            <li v-for="(item,index) in dropDownList" :key = "index" class="drop-down-item">
              {{item.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'BaseHead.vue',
  data () {
    return {
      dropDownSwitch: false,
      itemSwitch: false,
      isActive: false,
      dropDownTime: '',
      dropDownList: [],
      pageOperation: [
        {name: '首页', path: ''},
        {name: '博客主页', path: ''},
        {name: '统计主页', path: ''},
        {name: '小说主页', path: ''},
        {name: '数据主页', path: ''},
        {name: '歌曲主页', path: ''}
      ],
      userOperation: [
        {name: '个人信息', path: ''},
        {name: '修改密码', path: ''},
        {name: '修改手机', path: ''},
        {name: '退出登录', path: ''}
      ],
      dropDown: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        backgroundColor: '#000',
        color: '#fff',
        maxHeight: '320px',
        overflow: 'auto',
        zIndex: '12'
      }
    }
  },
  mounted () {
  },
  methods: {
    operationList (e, list) {
      this.dropDownList = list
      clearTimeout(this.dropDownTime)
      this.dropDownSwitch = true
      this.dropDown.top = e.path[1].offsetHeight + 'px'
      this.dropDown.left = e.path[1].offsetLeft + 'px'
      console.log(' e.path[1].offsetLeft', e.path[1].offsetLeft)
    },
    clearDropTime () {
      clearTimeout(this.dropDownTime)
    },
    initCommonUse () {
      var _this = this
      this.dropDownTime = setTimeout(() => {
        _this.dropDownSwitch = false
      }, 100)
    }
  }
}
</script>

<style lang="less">
  .BaseHead{
    background-image: url("../../../assets/img/head.jpeg");
    height:100%;
    /*height:80px;*/
    /*line-height:80px;*/
    color:#fff;
    text-align:center;
    .head-wrap{
      margin:auto;
      max-width:1200px;
      height:100%;
      .personLogo{
        font-size:22px;
        width:120px;
        float:left;
      }
      .head-right{
        font-size:18px;
        float:right;
        display: inline;
        .person{
          font-size:18px;
          position:relative;
          color:#fff;
          width:100px;
          height:100%;
          &:hover{
            transition: .5s linear;
            cursor: pointer;
            background: #5a73ff;
          }
          .img-wrap{
            display:inline-block;
            vertical-align:middle;
            img{
              width:40px;
              height:40px;
              border-radius:20px;
              position:absolute;
              top:0;
              bottom:0;
              left:0;
              right:0;
              margin:auto;
            }
          }
        }
        li{
          display: inline-block;
        }
      }
    }
    .drop-down-item{
      height:40px;
      line-height:40px;
      width:100px;
      text-align:center;
      cursor: pointer;
      &:hover{
        background-color: #5a73ff;
      }
    }
    .downList{
      animation: downList .5s linear;
      -webkit-animation:downList .5s linear;
    }
    @keyframes downList {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
    .upList{
      animation: upList 1s ease-out;
      -webkit-animation:upList 1s ease-out;
    }
    @keyframes upList {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
  }
</style>
