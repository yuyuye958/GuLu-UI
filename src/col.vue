<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    function validator(value) {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(function (key) {
            if (!['span', 'offset'].includes(key)) {
                valid = false
            }
        })
        return valid
    }

    export default {
        name: 'GuLu-Col',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            pad: {
                type: Object,
                validator: validator
            },
            narrowPc: {
                type: Object,
                validator: validator
            },
            pc: {
                type: Object,
                validator: validator
            },
            largePc: {
                type: Object,
                validator: validator
            }
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colClass() {
                let {span, offset, pad, narrowPc, pc, largePc} = this
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    pad && `col-pad-${pad.span}`,
                    narrowPc && `col-narrow-pc-${narrowPc.span}`,
                    pc && `col-pc-${pc.span}`,
                    largePc && `col-large-pc-${largePc.span}`
                ]
            },
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        $class: col-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
        @media (min-width: 577px) and (max-width: 768px) {
            $class: col-pad-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-pad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 769px) and (max-width: 992px) {
            $class: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 993px) and (max-width: 1200px) {
            $class: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class: col-large-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-large-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }
</style>