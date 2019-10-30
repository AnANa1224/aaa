<template>
    <div class="home">
        <Header title="" v-bind:icon="icon"></Header>
        <div id="main">
            <ul class="list">
                <List v-bind:infor="infor" model="inforMes"></List>
                <List v-for="inforList in inforLists" v-bind:inforList="inforList" model="inforList"></List>
            </ul>
        </div>
        <Footer who="infor"></Footer>
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
                icon:['','fa fa-camera-retro'],
                infor:{nickname:"安哥哥", avatar:"./img/8.jpg", wxPhone:"Axy_iloveyou"},
                inforLists:[
                    [{avatar:"./img/zf.jpg", message:"支付"}],
                    [
                        {avatar:"/img/sc.jpg", message:"收藏"},
                        {avatar:"/img/xc.jpg", message:"相册"},
                        {avatar:"/img/kb.jpg", message:"卡包"},
                        {avatar:"/img/bq.jpg", message:"表情"},
                    ],
                    [{avatar:"./img/sz.jpg", message:"设置"}],
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