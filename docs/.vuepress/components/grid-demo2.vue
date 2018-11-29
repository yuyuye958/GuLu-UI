<template>
    <div>
        <g-row gutter="10">
            <g-col span="12">
                <div class="demo">12</div>
            </g-col>
            <g-col span="12">
                <div class="demo">12</div>
            </g-col>
        </g-row>
        <g-row gutter="10">
            <g-col span="6">
                <div class="demo">6</div>
            </g-col>
            <g-col span="6">
                <div class="demo">6</div>
            </g-col>
            <g-col span="6">
                <div class="demo">6</div>
            </g-col>
            <g-col span="6">
                <div class="demo">6</div>
            </g-col>
        </g-row>

        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Row from '../../../src/row'
    import Col from '../../../src/col'

    export default {
        components: {
            'g-row': Row,
            'g-col': Col
        },
        data() {
            return {
                content: `
                    <g-row gutter="10">
                        <g-col span="12">12</g-col>
                        <g-col span="12">12</g-col>
                    </g-row>
                    <g-row gutter="10">
                        <g-col span="6">6</g-col>
                        <g-col span="6">6</g-col>
                        <g-col span="6">6</g-col>
                        <g-col span="6">6</g-col>
                    </g-row>
                `.replace(/ {8}/gm, '').trim()
            }
        }
    }
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    .row {
        margin: 10px 0;
    }

    .demo {
        color: white;
        background-color: #3eaf7c;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
    }
</style>