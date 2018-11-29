<template>
    <div class="popovers-demo">
        <g-popover position="left">
            <g-button>左方</g-button>
            <template slot="content">
                左方的内容
            </template>
        </g-popover>
        <g-popover position="top">
            <g-button>上方</g-button>
            <template slot="content">
                上方的内容
            </template>
        </g-popover>
        <g-popover position="bottom">
            <g-button>下方</g-button>
            <template slot="content">
                下方的内容
            </template>
        </g-popover>
        <g-popover position="right">
            <g-button>右方</g-button>
            <template slot="content">
                右方的内容
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
                    <g-popover position="left">
                        <g-button>左方</g-button>
                        <template slot="content">
                            左方的内容
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