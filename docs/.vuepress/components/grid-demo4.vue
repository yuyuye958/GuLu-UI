<template>
    <div>
        <g-row>
            <g-col span="24" :narrow-pc="{span:12}" :large-pc="{span:6}">
                <div class="demo">内容1</div>
            </g-col>
            <g-col span="24" :narrow-pc="{span:12}" :large-pc="{span:6}">
                <div class="demo">内容2</div>
            </g-col>
            <g-col span="24" :narrow-pc="{span:12}" :large-pc="{span:6}">
                <div class="demo">内容3</div>
            </g-col>
            <g-col span="24" :narrow-pc="{span:12}" :large-pc="{span:6}">
                <div class="demo">内容4</div>
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
                        <g-col span="24" :narrow-pc="{span:12}" :large-pc="{span:6}">
                            内容1
                        </g-col>
                        <g-col span="24" :narrow-pc="{span:12}" :large-pc="{span:6}">
                            内容2
                        </g-col>
                        <g-col span="24" :narrow-pc="{span:12}" :large-pc="{span:6}">
                            内容3
                        </g-col>
                        <g-col span="24" :narrow-pc="{span:12}" :large-pc="{span:6}">
                            内容4
                        </g-col>
                    </g-row>
                `.replace(/ {16}/gm, '').trim()
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

    .col {
        &:nth-child(2n+1) > .demo {
            background-color: #3a9364;
        }
    }

    .demo {
        color: white;
        background-color: #3eaf7c;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        margin: 5px 0;
    }
</style>