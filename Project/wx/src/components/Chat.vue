<template>
    <div class="chat">
        <div id="header">
            <div class="identity fl tac">
                <span class="fa fa-chevron-left" @click="$emit('local')"></span>
                <span>{{mes.nickname}}</span>
            </div>
            <div class="sAdd fr tac">
                <a href="#">
                    <i class="fa fa-ellipsis-h"></i>
                </a>
            </div>
        </div>
        <div id="main">
            <ul class="list">
                <li>
                    <div class="avatar fl">
                        <img :src="mes.avatar" alt="">
                    </div>
                    <div class="cont fl">
                        <p>俺胡汉三回来了啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
                    </div>
                </li>
                <li>
                    <div class="avatar fr">
                        <img :src="infor.avatar" alt="">
                    </div>
                    <div class="cont fr">
                        <p>你胡汉三怕不是弱智</p>
                    </div>
                </li>
                <li>
                    <div class="avatar fl">
                        <img :src="mes.avatar" alt="">
                    </div>
                    <div class="cont fl">
                        <p><img src="/img/bqb.jpg" alt=""></p>
                    </div>
                </li>
                <li>
                    <div class="avatar fr">
                        <img :src="infor.avatar" alt="">
                    </div>
                    <div class="cont fr">
                        <p>我的天,好帅</p>
                    </div>
                </li>
            </ul>
        </div>
        <div id="footer">
            <div class="voice fl">
                <span class="fa fa-wifi fa-rotate-90"></span>
            </div>
            <div class="text fl">
                <input type="text">
            </div>
            <div class="look fr">
                <span class="fa fa-smile-o"></span>
                <span class="fa fa-plus-circle"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "chat",
        data(){
            return{
                mes:this.$route.query,
                infor:{avatar:"./img/8.jpg"}
            }
        }
    }
</script>

<style scoped lang="scss">
    #header {
        height: 8vh;
        background: #ededed;
        line-height: 8vh;
        border-bottom: .5px solid #333;

        .identity {
            width: 25%;
            height: 100%;
            margin-left: 2%;
        }

        .identity span {
            margin-right: 8%;
        }

        .sAdd a {
            padding: 0 10px;
        }

        .sAdd a i {
            width: 16px;
            height: 16px;
            font-size: 16px;
            color: #000;
        }
    }

    #main {
        height: 84vh;
        background: #ededed;
        overflow: scroll;

        .list {
            margin-bottom: 3%;

            li::after {
                clear: both;
                content: '';
                display: table;
            }

            .avatar {
                text-align: center;
                width: 20%;
                height: 100%;
            }

            .avatar img {
                border-radius: 8px;
                height: 6vh;
                margin-top: 8%;
            }

            .cont {
                width: 60%;
                min-height: 7vh;
                background: #fff;
                margin-top: 2%;
            }

            .cont p {
                padding: 2% 2% 0 2%;
                letter-spacing: 2px;
                font-size: 18px;
            }

            p img {
                width: 100%;
            }
        }
    }

    #footer {
        height: 8vh;
        background: #f7f7f9;

        .voice {
            text-align: center;
            height: 8vh;
            width: 15%;
        }

        .text {
            width: 65%;
            line-height: 8vh;
        }

        .look {
            width: 20%;
            height: 8vh;
        }

        .voice span {
            width: 22px;
            line-height: 8vh;
            font-size: 22px;
        }

        .text input {
            width: 95%;
            font-size: 18px;
            height: 5vh;
            padding-left: 3%;
            border: none;
            outline: none;
        }

        .look span {
            margin-left: 5%;
            width: 30px;
            line-height: 8vh;
            font-size: 30px;
        }
    }
</style>