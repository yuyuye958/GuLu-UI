<template>
    <div class="popovers-demo">
        <g-popover trigger="click">
            <g-button>点击触发</g-button>
            <template slot="content">
                点击触发的内容
            </template>
        </g-popover>
        <g-popover trigger="hover">
            <g-button>悬浮触发</g-button>
            <template slot="content">
                悬浮触发的内容
            </template>
        </g-popover>

        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    import Popover from '../../../src/popover'

    export default {
        components: {
            'g-popover': Popover,
            'g-button': Button
        },
        data() {
            return {
                content: `
                    <g-popover trigger="click">
                        <g-button>点击触发</g-button>
                        <template slot="content">
                            点击触发的内容
                        </template>
                    </g-popover>

                    <g-popover trigger="hover">
                        <g-button>悬浮触发</g-button>
                        <template slot="content">
                            悬浮触发的内容
                        </template>
                    </g-popover>
                `.replace(/ {16}/gm, '').trim()
            }
        }
    }
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    .popovers-demo {
        margin: 30px 0;
        button {
            margin-right: 1em;
        }
    }
</style>