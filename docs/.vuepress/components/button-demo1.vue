<template>
    <div>
        <g-button>Default</g-button>
        <g-button disabled>Disabled</g-button>
        <g-button icon="power">Icon</g-button>
        <g-button icon="power" icon-position="right">Icon</g-button>
        <g-button icon="settings" loading>Click me!</g-button>

        <pre>
            <code>{{content}}</code>
        </pre>
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
        <g-button icon="power" icon-position="right">Icon</g-button>
        <g-button icon="settings" loading>Click me!</g-button>`
            }
        }
    }
</script>