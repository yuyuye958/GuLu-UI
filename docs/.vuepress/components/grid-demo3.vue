<template>
    <div>
        <g-row>
            <g-col span="12">
                <div class="demo">12</div>
            </g-col>
            <g-col span="10" offset="2">
                <div class="demo">10</div>
            </g-col>
        </g-row>
        <g-row>
            <g-col span="8">
                <div class="demo">8</div>
            </g-col>
            <g-col span="4" offset="2">
                <div class="demo">4</div>
            </g-col>
            <g-col span="2" offset="3">
                <div class="demo">2</div>
            </g-col>
            <g-col span="3" offset="2">
                <div class="demo">3</div>
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
                    <g-row>
                        <g-col span="12">12</g-col>
                        <g-col span="10" offset="2">10</g-col>
                    </g-row>
                    <g-row>
                        <g-col span="8">8</g-col>
                        <g-col span="4" offset="2">4</g-col>
                        <g-col span="2" offset="3">2</g-col>
                        <g-col span="3" offset="2">3</g-col>
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