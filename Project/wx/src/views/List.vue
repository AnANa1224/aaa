<template>
    <div class="home">
        <Header title="通讯录" v-bind:icon="icon"></Header>
        <div id="main">
            <ul class="list">
                <List v-for="mes in mess" v-bind:mes="mes" model="navList" bz="A"></List>
                <List model="bz" bz="A"></List>
                <List v-for="friendMes in friendAMess" v-bind:friendMes="friendMes" model="friendList" ></List>
                <List model="bz" bz="B"></List>
                <List v-for="friendMes in friendBMess" v-bind:friendMes="friendMes" model="friendList" ></List>
                <List model="bz" bz="C"></List>
                <List v-for="friendMes in friendCMess" v-bind:friendMes="friendMes" model="friendList" ></List>
                <List model="bz" bz="你就这点好友了"></List>
            </ul>
        </div>
        <Footer who="list"></Footer>
        <MenuNav></MenuNav>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue'
    import List from '@/components/List.vue'
    import Footer from '@/components/Footer.vue'
    import MenuNav from '@/components/MenuNav.vue'

    export default {
        name: 'home',
        data(){
            return{
                icon:['fa fa-search','fa fa-plus-circle'],
                mess:[
                    {avatar:"./img/xpy.jpg", message:"新的朋友"},
                    {avatar:"./img/ql.jpg", message:"群聊"},
                    {avatar:"./img/bqian.jpg", message:"标签"},
                    {avatar:"./img/gzh.jpg", message:"公众号"},
                ],
                friendAMess:[
                    {nickname:"安一", avatar:"./img/1.jpg"},
                    {nickname:"安二", avatar:"./img/2.jpg"},
                    {nickname:"安三", avatar:"./img/3.jpg"},
                    {nickname:"安四", avatar:"./img/4.jpg"},
                    {nickname:"安五", avatar:"./img/5.jpg"},
                    {nickname:"安六", avatar:"./img/6.jpg"},
                    {nickname:"安七", avatar:"./img/7.jpg"},
                ],
                friendBMess:[
                    {nickname:"哔哩哔哩", avatar:"./img/1.jpg"},
                ],
                friendCMess:[
                    {nickname:"蔡虚空", avatar:"./img/2.jpg"},
                ],
            }
        },
        components: {
            Footer,
            Header,
            List,
            MenuNav
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