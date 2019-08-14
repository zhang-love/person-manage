<template>
    <div class="Index fadeOutUp" id="index" @click="heartFactory">
      <el-row>
        <el-col class="">
          <base-head></base-head>
        </el-col>
      </el-row>
      <el-row class="main">
        <el-col class="menu">
          <base-menu></base-menu>
        </el-col>
        <el-col :span="12">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import baseHead from './base/BaseHead'
import baseMenu from './base/BaseMenu'
export default {
  name: 'Index.vue',
  components: {
    baseHead,
    baseMenu
  },

  data () {
    return {
      heart: {
        position: 'absolute',
        left: 0,
        color: 'red',
        top: 0
      }
    }
  },
  mounted () {
  },
  methods: {
    heartFactory (e) {
      const b = '❤'
      const div = document.getElementById('index')
      const h = document.createElement('div')
      h.innerText = b
      h.style.position = 'absolute'
      h.style.top = e.pageY + 'px'
      h.style.left = e.pageX + 'px'
      h.style.fontSize = '16px'
      h.style.color = 'rgb(' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ')'
      const v = document.createElement('div')
      v.innerText = b
      v.style.position = 'absolute'
      v.style.top = e.pageY + 6 + 'px'
      v.style.left = e.pageX + 6 + 'px'
      v.style.fontSize = '20px'
      v.style.color = 'rgb(' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ')'
      h.setAttribute('class', 'move1')
      v.setAttribute('class', 'move2')
      h.addEventListener('animationend', function () {
        div.removeChild(h)
      })
      v.addEventListener('animationend', function () {
        div.removeChild(v)
      })
      div.appendChild(h)
      div.appendChild(v)
    }
  }
}
</script>

<style lang="less">
.Index{
  background-color: #f0eef5;
  cursor:default;
  .main{
    margin:auto;
    width:1200px;
    .menu{
      width:220px;
    }
  }
   .move1{
     animation: move1 3s;
     -webkit-animation:move1 3s;
   }
  @keyframes move1 {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translateY(-100px);
    }
  }
  .move2{
     animation: move2 3s;
     animation-delay: .1s;
     -webkit-animation:move2 3s;
     -webkit-animation-delay: .1s;
   }
  @keyframes move2 {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translateY(-200px);
    }
  }
}
</style>
