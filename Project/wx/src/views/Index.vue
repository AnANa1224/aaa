<template>
    <div class="home">
        <Header title="微信" v-bind:icon="icon"></Header>
        <div id="main">
            <ul class="list">
                <List v-for="mes in mess" v-bind:mes="mes" model="index" v-on:localChat="localChat($event)"></List>
            </ul>
        </div>
        <Footer who="index"></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue'
    import List from '@/components/List.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'home',
        data(){
            return{
                icon:['fa fa-search','fa fa-plus-circle'],
                mess:[
                    {nickname:"胡汉三", avatar:"./img/1.jpg", message:"你是我天边最美的云彩",lastTime:"04:16"},
                    {nickname:"胡汉四", avatar:"./img/2.jpg", message:"欧巴",lastTime:"12:18"},
                    {nickname:"胡汉五", avatar:"./img/3.jpg", message:"欧尼酱",lastTime:"昨天"},
                    {nickname:"阿萨德", avatar:"./img/7.jpg", message:"你是我天边最美的云彩啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",lastTime:"04:16"},
                    {nickname:"请问", avatar:"./img/5.jpg", message:"欧巴",lastTime:"12:18"},
                    {nickname:"自行车", avatar:"./img/4.jpg", message:"欧尼酱",lastTime:"昨天"},
                    {nickname:"任天野", avatar:"./img/1.jpg", message:"你是我天边最美的云彩",lastTime:"04:16"},
                    {nickname:"发过火", avatar:"./img/7.jpg", message:"欧巴",lastTime:"12:18"},
                    {nickname:"VB你", avatar:"./img/5.jpg", message:"欧尼酱",lastTime:"昨天"},
                    {nickname:"UI哦", avatar:"./img/6.jpg", message:"你是我天边最美的云彩",lastTime:"04:16"},
                    {nickname:"接口类", avatar:"./img/4.jpg", message:"欧巴",lastTime:"12:18"},
                    {nickname:"美女吧", avatar:"./img/3.jpg", message:"欧尼酱",lastTime:"昨天"},
                    {nickname:"北方人", avatar:"./img/1.jpg", message:"你是我天边最美的云彩",lastTime:"04:16"},
                    {nickname:"这个吧", avatar:"./img/2.jpg", message:"欧巴",lastTime:"12:18"},
                    {nickname:"电话", avatar:"./img/7.jpg", message:"欧尼酱",lastTime:"昨天"},
                ]
            }
        },
        methods:{
          localChat(e){
              // alert(e.nickname)
              // alert(e.avatar)
              this.$router.push({path:'/chat',query: {nickname:e.nickname,avatar:e.avatar}});
          }
        },
        components: {
            Footer,
            Header,
            List
        },
    }
</script>

<style scoped>
    #main{
        height: 84vh;
        background: #fff;
        overflow: scroll;
    }
</style>