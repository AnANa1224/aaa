<template>
    <div class="home">
        <Header title="发现" v-bind:icon="icon"></Header>
        <div id="main">
            <ul class="list">
                <List v-for="findMes in findMess" v-bind:findMes="findMes" model="findList"></List>
            </ul>
        </div>
        <Footer who="find"></Footer>
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
                findMess:[
                    [{avatar:"./img/pyq.jpg", message:"朋友圈"}],
                    [
                        {avatar:"/img/sys.jpg", message:"扫一扫"},
                        {avatar:"/img/yyy.jpg", message:"摇一摇"},
                    ],
                    [
                        {avatar:"/img/kyk.jpg", message:"看一看"},
                        {avatar:"/img/souys.jpg", message:"搜一搜"},
                    ],
                    [{avatar:"./img/pyq.jpg", message:"附近的人"}],
                    [
                        {avatar:"/img/sys.jpg", message:"购物"},
                        {avatar:"/img/yyy.jpg", message:"游戏"},
                    ],
                    [{avatar:"/img/kyk.jpg", message:"小程序"}],
                ]
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
        background: #ededed;
        overflow: scroll;
    }
</style>