<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuLu-Tabs-Item',
        props: {
            disabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style>

</style>