<template>
  <div class="stickyWrapper" ref="stickyWrapper">
    <div class="g-sticky" :class="{sticky}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GuLu-Sticky',
    props: {
      distance: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        sticky: false
      }
    },
    mounted() {
      // 这里的 height 是初始的高度，会造成bug，所以要在改变sticky状态时获得高度
      let top = this.getTop()
      window.addEventListener('scroll', () => {
        if (window.scrollY > top) {
          let height = this.getHeight()
          this.$refs.stickyWrapper.style.height = `${height}px`
          this.sticky = true
        } else {
          this.sticky = false
        }
      })
    },
    methods: {
      getTop() {
        let {top} = this.$refs.stickyWrapper.getBoundingClientRect()
        return top + window.scrollY
      },
      getHeight() {
        let {height} = this.$refs.stickyWrapper.getBoundingClientRect()
        return height
      }
    }
  }
</script>
<style scoped lang="scss">
  .stickyWrapper {
    .g-sticky {
      &.sticky {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        background: red;
      }
    }
  }
</style>