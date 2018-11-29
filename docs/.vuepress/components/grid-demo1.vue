<template>
    <div>
        <g-row>
            <g-col span="12" class="grid-demo">12</g-col>
            <g-col span="12" class="grid-demo">12</g-col>
        </g-row>
        <g-row>
            <g-col span="6" class="grid-demo">6</g-col>
            <g-col span="6" class="grid-demo">6</g-col>
            <g-col span="6" class="grid-demo">6</g-col>
            <g-col span="6" class="grid-demo">6</g-col>
        </g-row>
        <g-row>
            <g-col span="4" class="grid-demo">4</g-col>
            <g-col span="4" class="grid-demo">4</g-col>
            <g-col span="4" class="grid-demo">4</g-col>
            <g-col span="4" class="grid-demo">4</g-col>
            <g-col span="4" class="grid-demo">4</g-col>
            <g-col span="4" class="grid-demo">4</g-col>
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
                    <g-row>
                        <g-col span="12">12</g-col>
                        <g-col span="12">12</g-col>
                    </g-row>
                    <g-row>
                        <g-col span="6">6</g-col>
                        <g-col span="6">6</g-col>
                        <g-col span="6">6</g-col>
                        <g-col span="6">6</g-col>
                    </g-row>
                    <g-row>
                        <g-col span="4">4</g-col>
                        <g-col span="4">4</g-col>
                        <g-col span="4">4</g-col>
                        <g-col span="4">4</g-col>
                        <g-col span="4">4</g-col>
                        <g-col span="4">4</g-col>
                    </g-row>
                `.replace(/ {8}/gm, '').trim()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .row {
        margin: 10px 0;
    }

    .grid-demo {
        color: white;
        background-color: #3eaf7c;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        &:nth-child(2n+1) {
            background-color: #4bc78e;
        }
    }
</style>