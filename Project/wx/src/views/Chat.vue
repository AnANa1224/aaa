<template>
    <Chat v-on:local="local"></Chat>
</template>

<script>
    import Chat from '@/components/Chat.vue'
    export default {
        name: "chat",
        data() {
            return {
                icon: ['fa fa-search', 'fa fa-plus-circle'],
            }
        },
        methods:{
            local(){
                this.$router.push('/')
            }
        },
        components: {
            Chat
        },
    }
</script>

<style scoped>

</style>