<template>
    <div class="tabs-item" :class="classes" @click="itemOnClick">
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
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name
            })
        },
        methods: {
            itemOnClick() {
                if (this.disabled) {
                    return
                }
                this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>
<style lang="scss" scoped>
    $blue: blue;
    .tabs-item {
        flex-shrink: 0;
        padding: 1em;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        &.active {
            color: $blue;
        }
        &.disabled {
            cursor: not-allowed;
            color: grey;
        }
    }
</style>