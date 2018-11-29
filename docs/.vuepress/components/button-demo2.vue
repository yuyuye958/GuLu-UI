<template>
    <div style="margin: 30px 0">
        <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button>更多</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>

        <pre style="margin: 30px 0"><code>{{content}}</code></pre>

    </div>
</template>
<script>
    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group'

    export default {
        components: {
            gButton: Button,
            gButtonGroup: ButtonGroup
        },
        data() {
            return {
                content: `
                    <g-button-group>
                        <g-button icon="left">上一页</g-button>
                        <g-button>更多</g-button>
                        <g-button icon="right" icon-position="right">下一页</g-button>
                    </g-button-group>
                `.replace(/ {8}/gm, '').trim()
            }
        }
    }
</script>