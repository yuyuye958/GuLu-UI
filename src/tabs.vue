<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        name: 'GuLu-Tabs',
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.checkChildren()
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'GuLu-Tabs-Nav') {
                    vm.$children.forEach((vmChild) => {
                        if (vmChild.$options.name === 'GuLu-Tabs-Item' && vmChild.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, vmChild)
                        }
                    })
                }
            })
        },
        methods: {
            checkChildren() {
                if (this.$children.length === 0) {
                    console && console.warn && console.warn('tabs里没写子组件')
                }
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>