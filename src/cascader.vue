<template>
  <div class="g-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <g-cascader-item :items="source" :height="popoverHeight"></g-cascader-item>
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
      },
      popoverHeight: {
        type: String
      }
    },
    data() {
      return {
        popoverVisible: false
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "var";

  .g-cascader {
    position: relative;
    .trigger {
      border: 1px solid red;
      height: 30px;
      width: 150px;
    }
    .popover-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      display: flex;
      box-shadow: $box-shadow;
      background-color: white;
    }
  }
</style>