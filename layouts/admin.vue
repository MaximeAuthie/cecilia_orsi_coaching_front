<template>
    <ManagerHeaderComponent></ManagerHeaderComponent>
    <ManagerNavigationComponent :route="route"></ManagerNavigationComponent>
    <slot />
</template>
<script>
    import { useCommentsStore } from '@/store/comment';

    export default {
        setup() {
            const commentsStore = useCommentsStore();
            commentsStore.getCommentsToValidate();
        },
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
<style>
    body {
        font-family: Arial, Helvetica, sans-serif;
        color: #4B453F;
    }
    
</style>