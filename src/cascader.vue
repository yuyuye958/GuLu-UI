<template>
  <div class="g-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{result || '&nbsp;'}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <g-cascader-item :items="source" :height="popoverHeight" :selected="selected"
                       @update:selected="updateSelected"></g-cascader-item>
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
      },
      selected: {
        type: Array,
        default: () => {
          return []
        }
      },
      loadData: {
        type: Function
      }
    },
    data() {
      return {
        popoverVisible: false
      }
    },
    computed: {
      result() {
        return this.selected.map((item) => {
          return item.name
        }).join(' / ')
      }
    },
    methods: {
      updateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
        // 用户选中的最后一项
        let lastSelected = newSelected[newSelected.length - 1]

        // 分治法
        // 简单处理
        let simple = (children, id) => {
          return children.filter((item) => {
            return item.id === id
          })[0]
        }
        // 复杂处理，递归
        let complex = (children, id) => {
          let hasNoChildren = []
          let hasChildren = []
          // 遍历数组，根据有没有children来放到两个数组里来做不同的处理
          children.forEach((item) => {
            if (item.children) {
              hasChildren.push(item)
            } else {
              hasNoChildren.push(item)
            }
          })
          let found = simple(hasNoChildren, id)
          if (found) {
            return found
          } else {
            found = simple(hasChildren, id)
            if (found) {
              return found
            } else {
              for (let i = 0; i < hasChildren.length; i++) {
                found = complex(hasChildren[i].children, id)
                if (found) {
                  return found
                }
              }
              return undefined
            }
          }
        }

        let updateSource = (result) => {   // 回调
          let toUpdate = complex(this.source, lastSelected.id)
          this.$set(toUpdate, 'children', result)
        }
        this.loadData(lastSelected, updateSource)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "var";

  .g-cascader {
    position: relative;
    .trigger {
      border: 1px solid $border-color;
      border-radius: $border-radius;
      height: $input-height;
      min-width: 11em;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
    }
    .popover-wrapper {
      position: absolute;
      margin-top: 2px;
      top: 100%;
      left: 0;
      display: flex;
      box-shadow: $box-shadow;
      background-color: white;
    }
  }
</style>