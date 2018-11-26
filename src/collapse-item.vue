<template>
    <div class="collapse-item">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "GuLu-Collapse-Item",
        inject: ['eventBus'],
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                open: false
            }
        },
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', (names) => {
                if (names.indexOf(this.name) >= 0) {
                    this.open = true
                } else {
                    this.open = false
                }
            })
        },
        methods: {
            toggle() {
                if (this.open) {
                    this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
                } else {
                    this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $item-border-color: #ddd;
    $border-radius: 4px;
    .collapse-item {
        margin-top: -1px;
        .title {
            border: 1px solid $item-border-color;
            margin-left: -1px;
            margin-right: -1px;
            padding: 0 14px;
            min-height: 32px;
            display: flex;
            align-items: center;
        }
        .content {
            padding: 0 14px;
            min-height: 32px;
            display: flex;
            align-items: center;
        }
        &:first-child {
            .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child {
            .title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
                margin-bottom: -1px;
            }
        }
    }
</style>