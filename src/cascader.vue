<template>
  <div class="g-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover" v-if="popoverVisible">
      <g-cascader-item :items="source"></g-cascader-item>
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
    .popover {
      position: absolute;
      top: 100%;
      left: 0;
      display: flex;
      border: 1px solid red;
      background-color: white;
      height: 150px;
    }
  }
</style>