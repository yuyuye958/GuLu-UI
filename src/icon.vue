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
        width: 1.15em;
        height: 1.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>