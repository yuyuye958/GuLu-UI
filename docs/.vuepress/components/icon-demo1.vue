<template>
    <div style="margin: 30px 0">
        <div id="icons-demo">
            <g-icon name="power"></g-icon>
            <g-icon name="info"></g-icon>
            <g-icon name="loading"></g-icon>
            <g-icon name="download"></g-icon>
            <g-icon name="settings"></g-icon>
            <g-icon name="thumbs-up"></g-icon>
        </div>

        <pre style="margin: 30px 0"><code>{{content}}</code></pre>

        <h2>Attributes</h2>

    </div>
</template>
<script>
    import Icon from '../../../src/icon'

    export default {
        components: {
            'g-icon': Icon
        },
        data() {
            return {
                content: `
                    <g-icon name="power"></g-icon>
                    <g-icon name="info"></g-icon>
                    <g-icon name="loading"></g-icon>
                    <g-icon name="download"></g-icon>
                    <g-icon name="settings"></g-icon>
                    <g-icon name="thumbs-up"></g-icon>
                `.replace(/ {4}/gm, '').trim()
            }
        }
    }
</script>
<style lang="scss">
    #icons-demo{
        svg{
            width: 2em;
            height: 2em;
            margin-right: 1.5em;
        }
    }
    table {
        width: 100%;
        display: table
    }
</style>