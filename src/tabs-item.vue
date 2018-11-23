<template>
    <div class="tabs-item" :class="classes" @click="xxx">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuLu-Tabs-Item',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                if (name === this.name) {
                    this.active = true
                } else {
                    this.active = false
                }
            })
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        &.active {
            background-color: red;
        }
    }
</style>