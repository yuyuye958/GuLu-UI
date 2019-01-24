<template>
  <div class="stickyWrapper" ref="stickyWrapper" :style="{height}">
    <div class="g-sticky" :class="{sticky}" :style="{left, width}">
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
        sticky: false,
        left: undefined,
        width: undefined,
        height: undefined
      }
    },
    mounted() {
      // 这里获得 height 是初始的高度，会造成bug，所以要在改变sticky状态时获得高度
      this.scrollHandler = this._scrollHandler.bind(this)
      window.addEventListener('scroll', this.scrollHandler)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.scrollHandler)
    },
    methods: {
      getTop() {
        let {top} = this.$refs.stickyWrapper.getBoundingClientRect()
        return top + window.scrollY
      },
      _scrollHandler() {
        let top = this.getTop()
        if (window.scrollY > top) {
          let {left, width, height} = this.$refs.stickyWrapper.getBoundingClientRect()
          this.left = left + 'px'
          this.width = width + 'px'
          this.height = height + 'px'
          this.sticky = true
        } else {
          this.sticky = false
        }
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
        z-index: 100;
        background: red;
      }
    }
  }
</style>