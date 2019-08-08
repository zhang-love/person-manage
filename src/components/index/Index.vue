<template>
    <div class="Index">
      <container-head></container-head>
      <menu></menu>
      <router-view></router-view>
    </div>
</template>

<script>
import containerHead from '@/components/Container/ContainerHead'
import menu from '@/components/Container/Menu'
export default {
  name: 'Index.vue',
  components: {
    containerHead,
    menu
  },

  data () {
    return {}
  }
}
</script>

<style>

</style>
