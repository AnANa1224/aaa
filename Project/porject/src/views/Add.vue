<template>
    <div class="add">
        <AE v-bind:mes="mes"/>
<!--        <AE title="新增用户" operation="添加"/>-->
    </div>
</template>

<script>
    import AE from '@/components/AE.vue'
    export default {
        name: "add",
        data(){
            return{
                mes:{title:"新增用户", operation:"添加", method:"add"}
            }
        },
        components: {
            AE
        }
    }
</script>