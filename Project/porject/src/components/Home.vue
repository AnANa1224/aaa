<template>
    <div class="hello">
        <table cellpadding="0" cellspacing="0"  id="table">
            <caption>{{title}}</caption>
            <tr>
                <th>id</th>
                <th>用户名</th>
                <th>性别</th>
                <th>操作</th>
            </tr>
            <tr v-for="user in users">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.sex==0?"男":"女"}}</td>
                <td>
                    <span @click="edit(user.id)">编辑</span>
                    <span @click="del(user.id)">删除</span>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        name: 'Home',
        data(){
            return {
                users: [],
            }
        },
        props: {
            title:String
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                $.ajax({
                    url: "http://127.0.0.1:8888/mock.php/user",
                    dataType: "json",
                    success: (res)=>{
                        this.users = res;
                    }
                })
            },
            del(id){
                if (confirm('您确定要删除吗?')) {
                    $.ajax({
                        url: "http://127.0.0.1:8888/mock.php/user/delete?id="+id,
                        type: "post",
                        dataType: "json",
                        success: (res)=>{
                            alert("删除成功");
                            this.init()
                        },
                        error: (res)=>{
                            alert("删除失败");
                        }
                    })
                }
            },
            edit(id){
                this.$router.push({path:'/edit',query: {id:id}})
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    table{margin: 100px auto;}
    th{background: #ccc;width: 100px;}
    td{text-align: center;background: #eee;}
    span{cursor: pointer;margin-right: 5px;margin-left: 5px;}
</style>
