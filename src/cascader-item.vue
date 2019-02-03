<template>
  <div class="g-cascader-item" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="(item,index) in items" :key="index" @click="clickLabel(item)">
        {{item.name}}
        <g-icon name="right" class="icon" v-if="item.children"></g-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <g-cascader-item :items="rightItems" :height="height" :level="level+1" :selected="selected"
                       @update:selected="updateSelected"></g-cascader-item>
    </div>
  </div>
</template>
<script>
  import gIcon from './icon'

  export default {
    name: 'gCascaderItem',
    components: {gIcon},
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
      },
      selected: {
        type: Array,
        default: () => {
          return []
        }
      },
      level: {
        type: Number,
        default: 0
      }
    },
    computed: {
      rightItems() {
        let selected = this.selected[this.level]
        if (selected && selected.children) {
          return selected.children
        } else {
          return null
        }
      }
    },
    methods: {
      clickLabel(item) {
        // this.$set(this.selected, this.level, item)
        let copySelected = JSON.parse(JSON.stringify(this.selected))
        copySelected[this.level] = item
        // 把不要的数据删掉再传
        copySelected.splice(this.level + 1)
        this.$emit('update:selected', copySelected)
      },
      updateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "var";

  .g-cascader-item {
    display: flex;
    align-items: flex-start;
    height: 100px;
    .left {
      height: 100%;
      padding: 0.3em 0;
    }
    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
    .label {
      padding: 0.3em 1em;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      margin-left: 0.5em;
      transform: scale(0.6);
    }
  }
</style>