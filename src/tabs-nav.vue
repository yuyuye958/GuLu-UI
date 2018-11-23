<template>
    <div class="tabs-nav">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuLu-Tabs-Nav',
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                let {width, left} = vm.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.transform = `translateX(${left}px)`
            })
        },
    }
</script>
<style lang="scss" scoped>
    $line-color: blue;
    $border-color: #ddd;
    .tabs-nav {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;
        .line {
            position: absolute;
            bottom: 0;
            border-bottom: 2px solid $line-color;
            transition: all .4s;
        }
        .actions-wrapper {
            margin-left: auto;
        }
    }
</style>