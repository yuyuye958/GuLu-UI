<template>
    <div class="g-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuLu-Layout',
        data() {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === "GuLu-Sider") {
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    .g-layout {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>