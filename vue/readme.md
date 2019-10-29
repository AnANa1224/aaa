html
js  -> dom
    找对象 document.getElementById()
    改属性  name.value = "jack"
    改css

jQuery
vue.js



https://cn.vuejs.org/

1. 下载得到一个 vue.js文件

app.message = "new" html中的内容跟着变

input怎么办



1. 静态html

```
    <div id="app">
        <table>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>sex</td>
            </tr>
            <tr>
                <td>1</td>
                <td>jack</td>
                <td>男</td>
            </tr>
        </table>
    </div>
```

2. 将数据换成从vue中获取

```
        var app = new Vue({
            el: '#app',
            data: {
                users: [
                    {"id":1, "username": "jack", "sex":1},
                    {"id":2, "username": "mary", "sex":0},
                ]
            }
        })
```


```
    <div id="app">
        <table>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>sex</td>
            </tr>
            <tr v-for="user in users">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.sex == 0?'女':'男'}}</td>
            </tr>
        </table>
    </div>
```

3. 获取服务器数据

注释掉 data中的测试数据

```
var app = new Vue({
            el: '#app',
            data: {
                users: [
                    //{"id":1, "username": "jack", "sex":1},
                    //{"id":2, "username": "mary", "sex":0},
                ]
            },
            mounted(){

                // this.users=[
                //     {"id":1, "username": "jack", "sex":1},
                //     {"id":2, "username": "mary", "sex":0},
                // ]

                // console.log([
                //     {"id":1, "username": "jack", "sex":1},
                //     {"id":2, "username": "mary", "sex":0},
                // ])

                //var _this = this;
                
                $.ajax({
                    method:"get",
                    dataType: "json",
                    url:"http://127.0.0.1:8888/mock.php/user",
                    success: (res)=>{
                        //console.log(res)
                        //_this.users = res
                        this.users = res
                    }
                })
            }
        })
```


```

        <div>新增</div>
        <div>
            <div>username<input type="text" v-model="userForCreate.username"></div>
            <div>sex <input type="text" v-model="userForCreate.sex"></div>
            <div><button @click="add()">提交</button></div>
        </div>
```

```
var app = new Vue({
            el: '#app',
            data: {
                users: [
                    //{"id":1, "username": "jack", "sex":1},
                    //{"id":2, "username": "mary", "sex":0},
                ],
                userForCreate:{
                    username:"",
                    sex:""
                }
            },
            mounted(){

                // this.users=[
                //     {"id":1, "username": "jack", "sex":1},
                //     {"id":2, "username": "mary", "sex":0},
                // ]

                // console.log([
                //     {"id":1, "username": "jack", "sex":1},
                //     {"id":2, "username": "mary", "sex":0},
                // ])

                //var _this = this;
                
                $.ajax({
                    method:"get",
                    dataType: "json",
                    url:"http://127.0.0.1:8888/mock.php/user",
                    success: (res)=>{
                        //console.log(res)
                        //_this.users = res
                        this.users = res
                    }
                })
            },
            methods:{
                add(){
                    //表单验证
                    if(this.userForCreate.username.length==0){
                        alert("请输入用户名")
                        return
                    }

                    if(this.userForCreate.sex.length==0){
                        alert("请输入性别")
                        return
                    }

                    $.ajax({
                        method:"post",
                        data: this.userForCreate,
                        dataType: "json",
                        url:"http://127.0.0.1:8888/mock.php/user/create",
                        success: (res)=>{
                        console.log(res)
                        }
                    })

                }
            }
        })
```