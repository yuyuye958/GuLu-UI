<template>
    <div style="margin: 20px 0">
        <g-tabs :selected="selected" style="margin-bottom: 30px">
            <g-tabs-nav>
                <g-tabs-item name="main">要闻</g-tabs-item>
                <g-tabs-item name="sports">体育</g-tabs-item>
                <g-tabs-item name="science">科技</g-tabs-item>
                <g-tabs-item name="disabled" disabled>禁用</g-tabs-item>
            </g-tabs-nav>
            <g-tabs-body>
                <g-tabs-pane name="main">
                    <p>习近平在阿根廷媒体发表署名文章</p>
                    <p>从总书记的晚餐菜单看优良作风的生动示范</p>
                    <p>庆祝改革开放40周年大型展览新华社展项扫描</p>
                </g-tabs-pane>
                <g-tabs-pane name="sports">
                    <p>热火失三分绝杀韦德18分 老鹰拿下两连胜</p>
                    <p>7人因伤缺阵 巴萨关键战排兵遇难题</p>
                    <p>福布斯30岁以下名人收入榜：内马尔第三</p>
                </g-tabs-pane>
                <g-tabs-pane name="science">
                    <p>比特币升至4000美元以上反弹逾6% 迎7月以来最大单日涨幅</p>
                    <p>30亿元发射272颗卫星！中国互联网公司迈出布局太空第一步</p>
                    <p>华为回应新西兰5G设备受阻：有信心提供安全的5G产品</p>
                </g-tabs-pane>
            </g-tabs-body>
        </g-tabs>

        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import tabs from '../../../src/tabs'
    import tabsNav from '../../../src/tabs-nav'
    import tabsBody from '../../../src/tabs-body'
    import tabsItem from '../../../src/tabs-item'
    import tabsPane from '../../../src/tabs-pane'

    export default {
        components: {
            'g-tabs':tabs,
            'g-tabs-nav':tabsNav,
            'g-tabs-body':tabsBody,
            'g-tabs-item':tabsItem,
            'g-tabs-pane':tabsPane,
        },
        data(){
            return {
                content:`
                    <g-tabs :selected="selected">
                        <g-tabs-nav>
                            <g-tabs-item name="tab1">tab1</g-tabs-item>
                            <g-tabs-item name="tab2">tab2</g-tabs-item>
                            <g-tabs-item name="tab3">tab3</g-tabs-item>
                            <g-tabs-item name="disabled" disabled>禁用</g-tabs-item>
                        </g-tabs-nav>
                        <g-tabs-body>
                            <g-tabs-pane name="tab1">内容1</g-tabs-pane>
                            <g-tabs-pane name="tab2">内容2</g-tabs-pane>
                            <g-tabs-pane name="tab3">内容3</g-tabs-pane>
                            <g-tabs-pane name="disabled">禁用</g-tabs-pane>
                        </g-tabs-body>
                    </g-tabs>
                `.replace(/ {16}/gm, '').trim(),
                selected: 'main'
            }
        }
    }
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

</style>