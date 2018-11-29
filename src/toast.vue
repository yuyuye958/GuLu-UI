<template>
    <div class="toastWrapper" :class="toastPosition">
        <div class="toast" ref="toast">
            <div class="toastMessage">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="toastLine" ref="toastLine"></div>
            <span class="toastClose" v-if="closeButton" @click="onClickClose">
                {{closeButton.text}}
            </span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuLu-Toast',
        props: {
            autoClose: {
                type: [Boolean, Number],
                default: 3,
                validator(value) {
                    return value === true || typeof value === 'number'
                }
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
                    }, this.autoClose * 1000)
                }
            },
            close() {
                this.$el.remove()
                this.$emit('close')
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
    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .toastWrapper {
        $animation-duration: .3s;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        z-index: 20;
        &.toast-position-top {
            top: 0;
            .toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down $animation-duration;
            }
        }
        &.toast-position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            .toast {
                animation: fade-in $animation-duration;
            }
        }
        &.toast-position-bottom {
            bottom: 0;
            .toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up $animation-duration;
            }
        }
    }

    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8;
        background-color: $toast-bg;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        color: white;
        padding: 0 16px;
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
    }
</style>