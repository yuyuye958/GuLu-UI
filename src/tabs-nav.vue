<template>
    <div class="tabs-nav">
        <slot></slot>
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
            // this.eventBus.$on('update:selected', '111111')
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
        border: 1px solid green;
        position: relative;
        .actions-wrapper {
            margin-left: auto;
        }
    }
</style>