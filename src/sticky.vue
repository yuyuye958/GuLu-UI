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
      let {top, height} = this.getTopAndHeight()
      this.$refs.stickyWrapper.style.height = `${height}px`
      window.addEventListener('scroll', () => {
        if (window.scrollY > top) {
          this.sticky = true
        } else {
          this.sticky = false
        }
      })
    },
    methods: {
      getTopAndHeight() {
        let {top, height} = this.$refs.stickyWrapper.getBoundingClientRect()
        return {top: top + window.scrollY, height: height}
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