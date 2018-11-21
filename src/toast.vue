<template>
    <div class="toast" ref="toast" :class="toastPosition">
        <div class="toastMessage">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="toastLine" ref="toastLine"></div>
        <span class="toastClose" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>
    export default {
        name: 'GuLu-Toast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 3
            },
            closeButton: {
                type: Object,
                // 如果default是个对象，不能直接写对象，要用函数return
                default: () => {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(position) {
                    return ['top', 'middle', 'bottom'].indexOf(position) >= 0
                }
            }
        },
        computed: {
            toastPosition() {
                return {
                    [`toast-position-${this.position}`]: true
                }
            }
        },
        mounted() {
            // DOM 还没有更新
            this.$nextTick(() => {
                // DOM 现在更新了
                this.$refs.toastLine.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
            })
            this.exeAutoClose()
        },
        methods: {
            exeAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8;
        background-color: $toast-bg;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        color: white;
        padding: 0 16px;
        position: fixed;
        left: 50%;
        display: flex;
        align-items: center;
        .toastMessage {
            padding: 8px 0;
        }
        .toastClose {
            flex-shrink: 0;
            cursor: pointer;
        }
        .toastLine {
            border-left: 1px solid #666;
            margin: 0 16px;
        }
        &.toast-position-top {
            top: 0;
            transform: translateX(-50%);
        }
        &.toast-position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
        }
        &.toast-position-bottom {
            bottom: 0;
            transform: translateX(-50%);
        }
    }
</style>