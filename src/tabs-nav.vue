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
        created() {
            this.eventBus.$on('update:selected', (item, vm) => {

            })
        },
    }
</script>
<style lang="scss" scoped>
    $tabs-height: 40px;
    $line-color: blue;
    .tabs-nav {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: $tabs-height;
        position: relative;
        .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $line-color;
            width: 50px;
        }
        .actions-wrapper {
            margin-left: auto;
        }
    }
</style>