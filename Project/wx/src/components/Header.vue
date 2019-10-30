<template>
    <div id="header">
        <div class="identity fl tac">{{title}}</div>
        <div class="sAdd fr tac">
            <a href="">
<!--                <i class="fa fa-search"></i>-->
                <i v-if="icon[0]!=''" v-bind:class="icon[0]"></i>
            </a>
            <a href="">
<!--                <i class="fa fa-plus-circle"></i>-->
                <i v-bind:class="icon[1]"></i>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props:{
            title:String,
            // icon:Object
            icon:Array
        }
    }
</script>

<style scoped lang="scss">
    #header{
        height: 8vh;
        background: #ededed;
        line-height: 8vh;
        .identity{
            width: 15%;
            height: 100%;
            margin-left: 2%;
        }
        .sAdd a{
            padding: 0 10px;
        }
        .sAdd a i {
            display: inline-block;
            width: 16px;
            height: 16px;
            font-size: 16px;
            color: #000;
        }
    }
</style>