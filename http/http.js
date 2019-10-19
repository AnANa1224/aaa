const net = require('net');
const fs = require('fs');
const server = net.createServer();
var path = "";

server.on('connection',(socket)=>{
    socket.on('end',()=>{
        // console.log(`断开连接.\n\r`);
        socket.destroy();
    });
    socket.on('error',(error)=>{
        console.log(error.message);
    });
    socket.on('data',(chunk)=>{
        // console.log(chunk.toString());
        path = (""+chunk).split("\r\n")[0].split(" ");
        var cookie = (chunk.toString()).match('Cookie');
        var name = (chunk.toString()).match('username=admin&password=123456');
        // console.log(path);
        // console.log(cookie);
        // console.log(name);
        
        if(path[1] == '/'){
        var userName = getRandStr();
        var head = ok();
        socket.write(head+'<h1>welcome</h1><a href="/admin" >进入管理后台</a>');
        }else if(path[1] == '/login'){
            if(cookie !== null){
                var head = local('/admin');
                socket.write(head);
            }else{
                var head = ok();
                socket.write(head+`
<form action="admin" method="post">
<table>
    <tr>
        <td>用户名：
        </td>
        <td><input type="text" name="username">
        </td>
    </tr>
    <tr>
        <td>密    码：
        </td>
        <td><input type="password" name="password">
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <td><input type="submit">
        </td>
    </tr>
</table>
</form>`);
            }
        }else if(path[0]=="GET" && path[1] == '/admin'){
            if(cookie == null){
                var head = local();
                socket.write(head);
            }else{
                cookie = cookie.input.substr(cookie.index+17,15);
                fileName = cookie+'.txt';
                var data =fs.readFileSync(fileName);
                var head = ok();
                socket.write(head+`<h1>欢迎来到后台</h1><p>${data}</p>`);
                // fs.readFile(fileName,{flag:'r+',encoding:'utf-8'},function(err,data){
                //     if(err){
                //         console.log("bad");
                //     }else{
                //         console.log("读取成功");
                //         console.log(data);
                //         document.write(`<p>${data}</p>`);
                //     }
                // });
            }
        }else if(path[0]=="POST" && path[1] == '/admin'){
            if(name !== null){
                var userName = getRandStr();
                var head = setCookie(userName);
                fs.writeFile(`${userName}.txt`,name[0],function(err){
                    if(err){
                        console.log("bad");
                        return false;
                    }else{
                        console.log('写入成功');
                        }
                });
                socket.write(head+`<h1>欢迎来到后台</h1>`);
            }else{
                var head = local('/login');
                socket.write(head);
            }
    }
        socket.write('</body>\r\n');
        socket.write('</html>\r\n');
        socket.end('');
        
    });
});
server.on('error',(err)=>{
    console.log(err);
});
server.on('listening',()=>{
    console.log(`listening on ${server.address().address}:${server.address().port}\n\r`);
});
server.listen(8001,'127.0.0.1');//启动监听 

/**
 * 200 ok 请求头
 */
function ok(){
        var text = `HTTP/1.1 200 OK
Content-Type: text/html\n\n
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
</head>
<body>\r\n`;
    return text;
}

/**
 * 200 ok 请求头设置cookie
 */
function setCookie(userName){
    var text = `HTTP/1.1 200 OK
Set-Cookie: userName=${userName}
Content-Type: text/html\n\n
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
</head>
<body>\r\n`;
    return text;
}

/**
 * 302 ok 请求头
 */
function local(path='login'){
    var text = `HTTP/1.1 302 OK
Location: ${path}
Content-Type: text/html\n\n
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
</head>
<body>`;
    return text;
}

/**
 * 随机指定长度(len)的字符串
 * @param {长度} len 
 */
function getRandStr(len=15){
    var rndStr = '';
    for (; rndStr.length < len; rndStr += Math.random().toString(36).substr(2));
    return rndStr.substr(0, len);
}