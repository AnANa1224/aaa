<template>
    <div v-if="model=='index'" class="item">
        <li @click="$emit('localChat',{nickname:mes.nickname,avatar:mes.avatar})">
            <div class="avatar fl">
                <img v-bind:src="mes.avatar" alt="">
            </div>
            <div class="cont fl">
                <div class="time cf">
                    <p class="fl">{{mes.nickname}}</p>
                    <p class="fr">{{mes.lastTime}}</p>
                </div>
                <div class="message">
                    <p>{{mes.message}}</p>
                </div>
            </div>
        </li>
    </div>
    <div v-else-if="model=='navList'" class="lList">
        <li>
            <div class="avatar fl">
                <img v-bind:src="mes.avatar" alt="">
            </div>
            <div class="cont fl">
                <p><span class="fl">{{mes.message}}</span></p>
            </div>
        </li>
    </div>
    <div v-else-if="model=='bz'" class="lList">
        <li class="bz">{{bz}}</li>
    </div>
    <div v-else-if="model=='friendList'" class="lList">
        <li>
            <div class="avatar fl">
                <img v-bind:src="friendMes.avatar" alt="">
            </div>
            <div class="cont fl">
                <p>{{friendMes.nickname}}</p>
            </div>
        </li>
    </div>
    <div v-else-if="model=='findList'" class="fList">
        <li>
            <div v-for="mes in findMes">
                <div class="avatar fl">
                    <img v-bind:src="mes.avatar" alt="">
                </div>
                <div class="cont bb fl">
                    <p><span class="fl">{{mes.message}}</span><span class="fr fa fa-chevron-right"></span></p>
                </div>
            </div>
        </li>
    </div>
    <div v-else-if="model=='inforMes'" class="iList">
        <li>
            <div class="infor fl">
                <img :src="infor.avatar" alt="">
            </div>
            <div class="message fl">
                <h3>{{infor.nickname}}</h3>
                <p>微信号: {{infor.wxPhone}}<span class="fr fa fa-chevron-right"></span><span class="fr fa fa-qrcode"></span></p>
            </div>
        </li>
    </div>
    <div v-else-if="model=='inforList'" class="iList">
        <li>
            <div v-for="mes in inforList">
                <div class="avatar fl">
                    <img v-bind:src="mes.avatar" alt="">
                </div>
                <div class="cont fl">
                    <p><span class="fl">{{mes.message}}</span><span class="fr fa fa-chevron-right"></span></p>
                </div>
            </div>
        </li>
    </div>
</template>

<script>
    export default {
        name: "Main",
        props: {
            model:String,
            bz:String,
            mes:Object,
            friendMes:Object,
            findMes:Array,
            infor:Object,
            inforList:Array
        }
    }
</script>

<style scoped lang="scss">
    .list .item li{
        height: 8vh;
        margin-bottom: 1px;
        .avatar{
            text-align: center;
            width: 20%;
            height: 100%;
        }
        .avatar img{
            border-radius: 8px;
            height: 80%;
            margin-top: 8%;
        }
        .cont{
            width: 78%;
            height: 100%;
            border-bottom: 1px solid #e4e4e2;
        }
        .cont .time{
            margin-top: 4%;
        }
        .cont .time p:first-of-type{
            width: 80%;
            text-align: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            letter-spacing:2px;
        }
        .cont .time p:last-of-type{
            color: #ababab;
            margin-right: 5%;
            letter-spacing:2px;
        }
        .cont .message{
            color: #aaa;
            margin-top: 2%;
        }
        .cont .message p {
            text-align: left;
            width: 90%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            letter-spacing: 2px;
        }
    }
    .list .lList{
        li{
            background: #fff;
        }
        li::after{clear: both; content: ''; display: table;}
        .avatar{
            text-align: center;
            width: 20%;
            height: 8vh;
            line-height: 13vh;
        }
        .avatar img{
            border-radius: 8px;
            height: 6.4vh;
            /* margin-top: 8%; */
        }
        .cont{
            width: 80%;
            height: 8vh;
            border-bottom: 1px solid #ededed;
        }
        .bz{
            text-align: left;
            height: 3vh;
            line-height: 3vh;
            padding-left: 3%;
            font-size: 12px;
            color: #676767;
            background: #ededed;
        }
        .cont p{
            text-align: left;
            height: 100%;
            line-height: 8vh;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 16px;
            letter-spacing:2px;
        }
    }
    .list .fList{
        li{
            margin-bottom: 1vh;
            background: #fff;
        }
        li::after{clear: both; content: ''; display: table; }
        li .avatar{
            text-align: center;
            width: 20%;
            height: 8vh;
            line-height: 13vh;
        }
        li .avatar img{
            border-radius: 8px;
            height: 6.4vh;
            /* margin-top: 8%; */
        }
        li .cont{
            width: 80%;
            height: 8vh;
        }
        li div:last-of-type .cont{
            border-bottom: none;
        }
        .bb{
            border-bottom: 1px solid #ededed;
        }
        .cont p{
            height: 100%;
            line-height: 8vh;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            letter-spacing:2px;
        }
        .cont p span:last-of-type{
            height: 8vh;
            line-height: 8vh;
            color: #ababab;
            margin-right: 2%;
        }
    }
    .list .iList{
        li{
            margin-bottom: 1.5vh;
            background: #fff;
        }
        li::after{clear: both; content: ''; display: table; }
        .infor{
            text-align: center;
            width: 30%;
            height: 15vh;
        }
        .infor img{
            border-radius: 8px;
            height: 10vh;
            margin-top: 6%;
        }
        .message{
            width: 70%;
            height: 8vh;
        }
        .message h3{
            margin-bottom: 2vh;
            letter-spacing:5px;
        }
        .message p{
            height: 3vh;
            line-height: 3vh;
            color: #939393;
        }
        .message p span{
            height: 3vh;
            line-height: 3vh;
            font-size: 13px;
            color: #ababab;
            margin-right: 2%;
            margin-left: 2%;
        }
        .avatar{
            text-align: center;
            width: 20%;
            height: 8vh;
            line-height: 13vh;
        }
        .avatar img{
            border-radius: 8px;
            height: 6.4vh;
            /* margin-top: 8%; */
        }
        .cont{
            width: 80%;
            height: 8vh;
            border-bottom: 1px solid #ededed;
        }
        li div:last-of-type .cont{
            border-bottom: none;
        }
        .cont p{
            height: 100%;
            line-height: 8vh;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            letter-spacing:2px;
        }
        .cont p span:last-of-type{
            height: 8vh;
            line-height: 8vh;
            color: #ababab;
            margin-right: 2%;
        }
    }
</style>