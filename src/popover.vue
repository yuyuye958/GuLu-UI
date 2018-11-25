<template>
    <div ref="popover" class="popover">
        <div ref="contentWrapper" class="content-wrapper" :class="{[`position-${position}`]: true}" v-if="visible">
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="triggerWrapper" class="trigger-wrapper">
            <slot></slot>
        </span>
    </div>
</template>
<script>
    export default {
        name: "GuLu-Popover",
        data() {
            return {
                visible: false
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            },
            trigger: {
                ype: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0
                }
            }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                let {height: height2} = this.$refs.contentWrapper.getBoundingClientRect()
                let positionProps = {
                    top: {
                        left: window.scrollX + left,
                        top: window.scrollY + top
                    },
                    bottom: {
                        left: window.scrollX + left,
                        top: window.scrollY + top + height
                    },
                    left: {
                        left: window.scrollX + left,
                        top: window.scrollY + top + (height - height2) / 2
                    },
                    right: {
                        left: window.scrollX + left + width,
                        top: window.scrollY + top + (height - height2) / 2
                    }
                }
                this.$refs.contentWrapper.style.top = positionProps[this.position].top + 'px'
                this.$refs.contentWrapper.style.left = positionProps[this.position].left + 'px'
            },
            onClickDocument(e) {
                if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
                    return
                }
                if (this.$refs.popover && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
                    return
                }
                this.close()
            },
            show() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.show()
                    }
                }

            }
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.show)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed() {
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.onClick)
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.show)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
    }
</script>
<style lang="scss" scoped>
    $border-color: #333;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        .trigger-wrapper {
            display: inline-block;
        }
    }

    .content-wrapper {
        position: absolute;
        background-color: white;
        border: 1px solid $border-color;
        border-radius: 5px;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before, &::after {
            content: '';
            position: absolute;
            border: 8px solid transparent;
        }
        &.position-top {
            transform: translateY(-100%);
            margin-top: -8px;
            &::before, &::after {
                left: 8px;
            }
            &::before {
                top: calc(100% + 1px);
                border-top-color: $border-color;
                border-bottom: none;
            }
            &::after {
                top: 100%;
                border-top-color: white;
                border-bottom: none;
            }
        }
        &.position-bottom {
            margin-top: 8px;
            &::before, &::after {
                left: 8px;
            }
            &::before {
                bottom: calc(100% + 1px);
                border-bottom-color: $border-color;
                border-top: none;
            }
            &::after {
                bottom: 100%;
                border-bottom-color: white;
                border-top: none;
            }
        }
        &.position-left {
            transform: translateX(-100%);
            margin-left: -8px;
            &::before, &::after {
                left: 8px;
                top: 50%;
                transform: translateY(-50%);
            }
            &::before {
                left: calc(100% + 1px);
                border-left-color: $border-color;
                border-right: none;
            }
            &::after {
                left: 100%;
                border-left-color: white;
                border-right: none;
            }
        }
        &.position-right {
            margin-left: 8px;
            &::before, &::after {
                top: 50%;
                transform: translateY(-50%);
            }
            &::before {
                right: 100%;
                border-right-color: $border-color;
                border-left: none;
            }
            &::after {
                right: calc(100% - 1px);
                border-right-color: white;
                border-left: none;
            }
        }
    }
</style>