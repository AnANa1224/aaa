<template>
    <div id="footer">
        <ul class="menu cf">
            <li v-if="who=='index'" class="active">
                <p class="fa fa-weixin"></p>
                <p class="wx">微信</p>
            </li>
            <li v-else @click="local('')">
                <p class="fa fa-weixin"></p>
                <p class="wx">微信</p>
            </li>
            <li v-if="who=='list'" class="active">
                <p class="fa fa-address-card-o"></p>
                <p class="list">通讯录</p>
            </li>
            <li v-else @click="local('list')">
                <p class="fa fa-address-card-o"></p>
                <p class="list">通讯录</p>
            </li>
            <li v-if="who=='find'" class="active">
                <p class="fa fa-safari"></p>
                <p class="find">发现</p>
            </li>
            <li v-else @click="local('find')">
                <p class="fa fa-safari"></p>
                <p class="find">发现</p>
            </li>
            <li v-if="who=='infor'" class="active">
                <p class="fa fa-user-o"></p>
                <p class="me">我</p>
            </li>
            <li v-else @click="local('infor')">
                <p class="fa fa-user-o"></p>
                <p class="me">我</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        props:{
          who:String
        },
        methods:{
            local(url){
                this.$router.push('/'+url)
            }
        }
    }
</script>

<style scoped lang="scss">
    #footer{
        height: 8vh;
        background: #f7f7f9;
        .menu{
            height: 100%;
        }
        .menu li{
            padding-top: 4%;
            float: left;
            text-align: center;
            width: calc(1/4*100%);
        }
        .menu li p:first-of-type{
            font-size: 22px;
        }
        .menu .active p {
            color: #07C062;
        }
    }
</style>