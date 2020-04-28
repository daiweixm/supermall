<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
          <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    link: String,
    activeColor: {
      type: String,
      default: '#f00'
    }
  },
  computed: {
    isActive () {
      console.log(this.$route.path, '-------', this.link)
      return this.$route.path === this.link
    },
    activeStyle () {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick () {
      console.log('itemClick', this.link)
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img{
  width:24px;
  height:24px;
  margin-top: 2px;
  margin-bottom: 2px;
  vertical-align: middle;;
}
/* 
.active {
  color: #f00;
} */
</style>
