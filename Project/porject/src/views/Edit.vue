<template>
    <div class="home">
        <AE
            v-for="mes in mess"
            v-bind:mes="mes"
            @alt="alt($event)"
        />
<!--        <AE v-bind:post="props"/>-->
<!--        <AE title="post.title" operation="修改" edit="edit"/>-->
    </div>
</template>

<script>
    import AE from '@/components/AE.vue'
    export default {
        name: "edit",
        data(){
            return{
                // props:{title:"修改信息", operation:"修改", edit:"edit"}
                mess:[
                    {title:"查看信息", operation:"康康", method:"show"},
                    {title:"修改信息", operation:"修改", method:"edit"},
                    {title:"添加信息", operation:"添加", method:"add"},
                ]
            }
        },
        components: {
            AE
        },
        methods: {
            alt(e){
                alert(e)
            }
        }
    }
</script>
