<template>
  <div>
    {{source.name}}
    <g-cascader-item v-for="item in source.children" v-if="source.children" :source="item">

    </g-cascader-item>
  </div>
</template>
<script>
  export default {
    name: 'gCascaderItem',
    props: {
      source: {
        type: Object
      }
    }
  }
</script>
<style scoped lang="scss">

</style>