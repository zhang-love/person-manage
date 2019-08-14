<template>
  <div class="SubMenu">
    <div v-for="item in contentRoute" :key="item.meta.id">
      <el-submenu  v-if="item.type === 1" :index="item.meta.id">
        <div slot="title">
          <i class="iconfont" :class="item.meta.icon"></i>
          <span class="iconName">{{ item.meta.name }}</span>
        </div>
        <sub-menu :contentRoute="item.children"></sub-menu>
      </el-submenu>
      <el-menu-item v-if="item.type === 2" :index="item.meta.id">
        <i class="iconfont" :class="item.meta.icon"></i>
        <span slot="title" class="iconName">{{ item.meta.name }}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subMenu',
  props: {
    'contentRoute': {
      type: Array,
      default: []
    }
  },
  data () {
    return {}
  },
  mounted () {
    console.log('+33+', this.contentRoute)
  }
}
</script>

<style>

</style>
