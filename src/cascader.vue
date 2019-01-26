<template>
  <div class="g-cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source">
        <g-cascader-item :source="item"></g-cascader-item>
      </div>
    </div>
  </div>
</template>
<script>
  import gCascaderItem from './cascader-item'

  export default {
    name: 'GuLu-Cascader',
    components: {
      gCascaderItem
    },
    props: {
      source: {
        type: Array
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "var";

  .g-cascader {

  }
</style>