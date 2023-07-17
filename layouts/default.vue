<template>
    <headerComponent :route="route"></headerComponent>
    <slot />
    <footerComponent></footerComponent>
</template>
<script lang="ts">
    export default {
        data() {
            return {
                route: ''
            }
        },
        updated() {
            this.route = this.$route.path;
        },
        mounted() {
            this.route = this.$route.path;
        },
    }
</script>