<template>
    <div style="margin: 30px 0" class="buttons-demo">
        <g-button>Default</g-button>
        <g-button disabled>Disabled</g-button>
        <g-button icon="power">Icon</g-button>
        <g-button icon="download" icon-position="right">Icon</g-button>
        <g-button icon="settings" loading>Click me!</g-button>

        <pre style="margin: 30px 0"><code>{{content}}</code></pre>

    </div>
</template>
<script>
    import Button from '../../../src/button'

    export default {
        components: {
            gButton: Button
        },
        data() {
            return {
                content: `
                    <g-button>Default</g-button>
                    <g-button disabled>Disabled</g-button>
                    <g-button icon="power">Icon</g-button>
                    <g-button icon="download" icon-position="right">Icon</g-button>
                    <g-button icon="settings" loading>Click me!</g-button>
                `.replace(/ {4}/gm, '').trim()
            }
        }
    }
</script>
<style lang="scss">
    .buttons-demo {
        button {
            margin-right: 10px;
        }
    }

    th, td {
        white-space: nowrap;
    }

    td:nth-child(2) {
        white-space: normal;
    }
</style>