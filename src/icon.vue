<template>
    <svg class="g-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
    import './svg'

    export default {
        name: 'GuLu-Icon',
        props: ['name']
    }
</script>
<style class="scss" scoped>
    .g-icon {
        width: 1.05em;
        height: 1.05em;
        fill: currentColor;
        overflow: hidden;
    }
</style>