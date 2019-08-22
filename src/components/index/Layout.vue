<template>
  <div class="Layout" id="index" @click="heartFactory">
    <div id="sky" class="sky-full"></div>
    <div id="index-head" class="index-head">
      <base-head></base-head>
    </div>
    <div id="main" class="main">
      <div class="menu">
        <base-menu></base-menu>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
    <!--<canvas id="sky" class="sky-full"></canvas>-->
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
      starSize: 300,
      heart: {
        position: 'absolute',
        left: 0,
        color: 'red',
        top: 0
      }
    }
  },
  mounted () {
    // this.resizeCanvas()
    // this.initCanvas()
    this.initSky()
    this.resizeSky()
    setInterval(() => {
      this.createChild(200)
    }, 800)
  },
  methods: {
    initSky () {
      const sky = document.getElementById('sky')
      while (sky.hasChildNodes()) {
        sky.removeChild(sky.firstChild)
      }
      sky.style.perspective = window.innerWidth + 'px'
      sky.style.transformStyle = 'preserve-3d'
      this.createChild(this.starSize)
    },
    createChild (starSize) {
      console.log('++')
      const sky = document.getElementById('sky')
      const _this = this
      for (let i = 0; i < starSize; i++) {
        let starSize = {
          size: Math.ceil(Math.random() * 12),
          x: Math.ceil(Math.random() * (window.innerWidth)),
          y: Math.ceil(Math.random() * (window.innerHeight))
        }
        for (let i = 0; i < 1; i++) {
          const h = document.createElement('div')
          h.style.position = 'absolute'
          h.style.top = starSize.y + 'px'
          h.style.left = starSize.x + 'px'
          h.style.width = starSize.size + 'px'
          h.style.height = starSize.size + 'px'
          h.style.borderRadius = starSize.size / 2 + 'px'
          h.style.opacity = '0'
          h.style.boxShadow = '2px 2px 2px #000'
          let backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + Math.ceil(Math.random() * 255) + ')'
          h.style.background = 'radial-gradient(' + '#fff' + ', ' + backgroundColor + ')'
          h.setAttribute('class', 'fly')
          h.style.animationDelay = Math.random() * 2 + 's'
          h.addEventListener('animationend', function () {
            sky.removeChild(h)
            _this.starSize--
          })
          sky.appendChild(h)
        }
      }
    },
    resizeSky () {
      const _this = this
      const sky = document.getElementById('sky')
      sky.style.width = window.innerWidth + 'px'
      sky.style.height = window.innerHeight + 'px'
      window.onresize = function () {
        sky.style.width = window.innerWidth + 'px'
        sky.style.height = window.innerHeight + 'px'
        _this.initSky()
      }
    },
    createCircle (ctx, starSize) {
      ctx.beginPath()
      let gr = ctx.createRadialGradient(starSize.x, starSize.y, 1, starSize.x, starSize.y, starSize.radius)
      gr.addColorStop(0, '#fff')
      gr.addColorStop(1, '#000')
      ctx.fillStyle = gr
      ctx.arc(starSize.x, starSize.y, starSize.radius, 0, (Math.PI / 180) * 360, false)
      ctx.fill()
      ctx.stroke()
    },
    resizeCanvas () {
      const _this = this
      const sky = document.getElementById('sky')
      sky.width = window.innerWidth
      sky.height = window.innerHeight
      window.onresize = function () {
        sky.width = window.innerWidth
        sky.height = window.innerHeight
        _this.initCanvas()
      }
    },
    initCanvas () {
      const sky = document.getElementById('sky')
      const ctx = sky.getContext('2d')
      for (let i = 0; i < 180; i++) {
        let starSize = {
          radius: Math.ceil(Math.random() * 6),
          x: Math.ceil(Math.random() * (window.innerWidth)),
          y: Math.ceil(Math.random() * (window.innerHeight))
        }
        console.log('starSize', starSize)
        this.createStar(ctx, starSize)
      }
    },
    createStar (ctx, starSize) {
      ctx.beginPath()
      let gr = ctx.createRadialGradient(starSize.x, starSize.y, 1, starSize.x, starSize.y, starSize.radius)
      gr.addColorStop(0, '#fff')
      gr.addColorStop(1, '#000')
      ctx.fillStyle = gr
      ctx.arc(starSize.x, starSize.y, starSize.radius, 0, (Math.PI / 180) * 360, false)
      ctx.fill()
      ctx.stroke()
    },
    heartFactory (e) {
      const heartArray = ['icon-heart1', 'icon-heart2', 'icon-heart3', 'icon-heart4', 'icon-heart5']
      const div = document.getElementById('index')
      const h = document.createElement('div')
      h.innerHTML = `<i style="font-size:26px" class="iconfont ` + heartArray[Math.ceil(Math.random() * 5)] + `">`
      h.style.position = 'absolute'
      h.style.top = e.pageY + 'px'
      h.style.left = e.pageX + 'px'
      h.style.color = 'rgb(' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ')'
      const v = document.createElement('div')
      v.innerHTML = `<i style="font-size:32px" class="iconfont ` + heartArray[Math.ceil(Math.random() * 5)] + `">`
      v.style.position = 'absolute'
      v.style.top = e.pageY + 6 + 'px'
      v.style.left = e.pageX + 6 + 'px'
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
.Layout{
  width:100%;
  background-color: #f0eef5;
  cursor:default;
  .index-head{
    height:80px;
    line-height:80px;
  }
  .sky-full{
    position:absolute;
    bottom:0;
    left:0;
  }
  .main{
    margin:auto;
    background: #1d1d1d;
    height:calc(100vh - 80px);
    .menu{
      width:220px;
      float:left;
      height:100%;
      background-color: rgba(82, 92, 100, 1) !important;
      .el-menu{
        border: 0;
        background-color: rgba(82, 92, 100, 0) !important;
        *{
          background-color: rgba(82, 92, 100, 0) !important;
        }
      }
    }
    .main-content{
      float:left;
      margin-top:10px;
      height:calc(100vh - 90px);
      width:calc(100vw - 220px);
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
  .fly{
    animation: fly 1.5s ease-in forwards;
    -webkit-animation:fly 1.5s ease-in forwards;
  }
  @keyframes fly{
    from {
      transform:translateZ(0);
      opacity: 0;
    }
    to {
      transform:translateZ(700px);
      opacity: 1;
    }
  }
}
</style>
