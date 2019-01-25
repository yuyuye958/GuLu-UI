<template>
    <div class="inputWrapper" :class="{error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
        >
        <template v-if="error">
            <g-icon name="error"></g-icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon'

    export default {
        name: 'GuLu-Input',
        components: {
            'g-icon': Icon
        },
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "var";
    .inputWrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        :not(:last-child) {
            margin-right: 0.5em;
        }
        input {
            font-size: inherit;
            height: $input-height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
                outline: none;
            }
            &[disabled] {
                border-color: #aaa;
                color: #aaa;
                cursor: not-allowed;
            }
        }
        &.error {
            input {
                border-color: $red;
            }
            svg {
                fill: $red;
            }
            span {
                color: $red;
            }
        }
    }
</style>