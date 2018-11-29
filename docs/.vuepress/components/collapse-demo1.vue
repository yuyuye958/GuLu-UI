<template>
    <div class="collapse-demo">
        <g-collapse :selected.sync="selectedCollapse">
            <g-collapse-item name="politics" title="政治新闻">习近平在阿根廷媒体发表署名文章</g-collapse-item>
            <g-collapse-item name="sports" title="体育新闻">热火失三分绝杀韦德18分 老鹰拿下两连胜</g-collapse-item>
            <g-collapse-item name="science" title="科技新闻">比特币升至4000美元以上反弹逾6% 迎7月以来最大单日涨幅</g-collapse-item>
            <g-collapse-item name="finance" title="财经新闻">外资银行管理条例实施细则修改18条，细化准入、经营要求</g-collapse-item>
        </g-collapse>
        <p>当前展开内容的name：{{selectedCollapse}}</p>

        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import collapse from '../../../src/collapse'
    import collapseItem from '../../../src/collapse-item'

    export default {
        components: {
            'g-collapse': collapse,
            'g-collapse-item': collapseItem
        },
        data() {
            return {
                content: `
                    <g-collapse :selected.sync="selectedCollapse">
                        <g-collapse-item name="politics" title="政治新闻">1</g-collapse-item>
                        <g-collapse-item name="sports" title="体育新闻">2</g-collapse-item>
                        <g-collapse-item name="science" title="科技新闻">3</g-collapse-item>
                        <g-collapse-item name="finance" title="财经新闻">4</g-collapse-item>
                    </g-collapse>
                    <p>{{selectedCollapse}}</p>

                    date() {
                        return {
                            selectedCollapse: ['politics']
                        }
                    }
                `.replace(/^ {16}/gm, '').trim(),
                selectedCollapse: ['politics']
            }
        },
        methods: {}
    }
</script>
<style lang="scss">
    .title, .title::before, .title::after {
        box-sizing: border-box;
    }

    .collapse-demo {
        margin: 32px 0;
    }

</style>