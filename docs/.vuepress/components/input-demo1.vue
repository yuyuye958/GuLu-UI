<template>
    <div style="margin: 30px 0">
        <g-input value="GuLu-UI 美观易用" readonly></g-input>
        <g-input value="我喜欢这个 UI 框架" disabled></g-input>
        <g-input value="本组件不支持双向绑定" error="错误！"></g-input>

        <pre style="margin: 30px 0"><code>{{content}}</code></pre>

    </div>
</template>
<script>
    import Input from '../../../src/input'

    export default {
        components: {
            'g-input': Input
        },
        data() {
            return {
                content: `
                    <g-input value="GuLu-UI 美观易用" readonly></g-input>
                    <g-input value="我喜欢这个 UI 框架" disabled></g-input>
                    <g-input value="本组件不支持双向绑定" error="错误！"></g-input>
                `.replace(/ {4}/gm, '').trim()
            }
        }
    }
</script>
<style>
    table {
        width: 100%;
        display: table;
    }
</style>