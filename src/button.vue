<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="onClick">
        <g-icon class="icon" v-if="icon && !selfLoading" :name="icon"></g-icon>
        <g-icon class="icon loading" v-show="loading && selfLoading" name="loading"></g-icon>
        <div class="g-button-content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'

    export default {
        name: 'GuLu-Button',
        components: {
            'g-icon': Icon
        },
        data() {
            return {
                selfLoading: false
            }
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right'
                }
            }
        },
        methods: {
            onClick(e) {
                this.$emit('click', e)
                if (this.loading) {
                    this.selfLoading = !this.selfLoading
                }
            }
        },
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $color: #333;
    $button-height: 32px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .g-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;
        cursor: pointer;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }
        &:disabled {
            cursor: not-allowed;
        }
        .icon {
            order: 1;
            margin-right: .2em;
        }
        .g-button-content {
            order: 2;
        }
        &.icon-right {
            .icon {
                order: 2;
                margin-right: 0;
                margin-left: .2em;
            }
            .g-button-content {
                order: 1;
            }
        }
        .loading {
            animation: spin 1.8s infinite linear;
        }
    }
</style>