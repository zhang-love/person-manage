<template>
    <div class="Index">
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
import baseHead from '@/components/index/base/BaseHead'
import baseMenu from '@/components/index/base/BaseMenu'
export default {
  name: 'Index.vue',
  components: {
    baseHead,
    baseMenu
  },

  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="less">
.Index{
  .main{
    margin:auto;
    width:500px;
    .menu{
      width:220px;
    }
  }
}
</style>
