<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        name: "GuLu-Collapse",
        data() {
            return {
                eventBus: new Vue()
            }
        },
        props: {
            single: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)
            this.eventBus.$on('update:addSelected', (name) => {
                // 不能直接修改props 所以做一个深拷贝
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                if (this.single) {
                    selectedCopy = [name]
                } else {
                    selectedCopy.push(name)
                }
                this.$emit('update:selected', selectedCopy)
                this.eventBus.$emit('update:selected', selectedCopy)
            })
            this.eventBus.$on('update:removeSelected', (name) => {
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                let index = selectedCopy.indexOf(name)
                selectedCopy.splice(index, 1)
                this.$emit('update:selected', selectedCopy)
                this.eventBus.$emit('update:selected', selectedCopy)
            })
            this.$children.forEach((vm) => {
                vm.single = this.single
            })
        }
    }
</script>
<style lang="scss" scoped>
    $border-color: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $border-color;
        border-radius: $border-radius;
    }
</style>