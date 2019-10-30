<template>
    <table>
        <caption>{{mes.title}}</caption>
        <tr>
            <td>用户名:</td>
            <td v-if="mes.method=='edit'"><input type="text" v-model="user.username"></td>
            <td v-else-if="mes.method=='show'"><input type="text"  v-model="user.username"></td>
            <td v-else><input type="text"  v-model="create.username"></td>
        </tr>
        <tr>
            <td>姓　别:</td>
            <td v-if="mes.method=='edit'"><input type="text" v-model="user.sex"></td>
            <td v-else-if="mes.method=='show'"><input type="text"  v-model="user.sex"></td>
            <td v-else><input type="text"  v-model="create.sex"></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <button v-if="mes.method=='edit'" @click="doEdit(user.id)">{{mes.operation}}</button>
                <button v-else-if="mes.method=='show'">{{mes.operation}}</button>
                <button v-else @click="add()">{{mes.operation}}</button>
                <button @click="$emit('alt',1)">{{mes.operation}}</button>
            </td>
        </tr>
    </table>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "AE",
        data(){
            return {
                user: [],
                create: {
                    username:"",
                    sex:""
                },
            }
        },
        props: {
            title:String,
            operation:String,
            edit:String,
            mes:Object
        },
        mounted() {
            var id = this.$route.query.id
            if (id!=''){
                $.ajax({
                    url: "http://127.0.0.1:8888/mock.php/user/get?id="+id,
                    dataType: "json",
                    success: (res)=>{
                        this.user = res;
                    }
                })
            }
        },
        methods: {
            doEdit(id){
                if(this.user.username.length==0){
                    alert("请输入用户名")
                    return
                }
                if(this.user.sex!=0&&this.user.sex!=1){
                    alert("请输入性别0或1")
                    return
                }
                $.ajax({
                    url: "http://127.0.0.1:8888/mock.php/user/update?id="+this.user.id,
                    type: "post",
                    data: this.user,
                    dataType: "json",
                    success: (res)=>{
                        alert("修改成功");
                    },
                    error: (res)=>{
                        alert("修改失败");
                    }
                })
            },
            add(){
                if(this.create.username.length==0){
                    alert("请输入用户名")
                    return false;
                }
                if(this.create.sex!=0&&this.create.sex!=1){
                    alert("请输入性别0或1")
                    return false;
                }
                $.ajax({
                    url: "http://127.0.0.1:8888/mock.php/user/create",
                    type: "post",
                    data: this.create,
                    dataType: "json",
                    success: (res)=>{
                        alert("新增成功");
                    },
                    error: (res)=>{
                        alert("新增失败");
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    table{margin: 100px auto;}
</style>