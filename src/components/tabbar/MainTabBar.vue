<template>
  <div>
      <tab-bar>
          <tab-bar-item :link="homelink" activeColor="red">
            <img slot="item-icon" src="@/assets/img/tabbar/home-gray.svg">
            <img slot="item-icon-active" src="@/assets/img/tabbar/home-red.svg">
            <div slot="item-text">首页</div>
          </tab-bar-item>
      </tab-bar>
  </div>
</template>

<script>
import TabBar from './TabBarItem'
import TabBarItem from './TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
      TabBar,
      TabBarItem
  },
  data () {
      return {
          homelink: '/home',
          categorylink: '/category',
          cartlink: '/cart',
          profilelink: '/profile'
      }
  }
}
</script>