const net = require('net');
const server = net.createServer();
const clients = {};//保存客户端的连接
var client = null;//当前客户连接
var uid = 0;
server.on('connection',(socket)=>{
    //启动心跳机制
    var isOnline = !0;
    var keepAliveTimer = socket.timer = setInterval(()=>{
        if(!isOnline){
            client = socket;
            quit(socket.nick);
            return;
        }
        if(socket.writable){
            isOnline = !1;
            socket.write('::');
        }else{
            client = socket;
            quit(socket.nick);
        }
    },3000);
    socket.on('end',()=>{
        // console.log(`断开连接.\n\r`);
        socket.destroy();
    });
    socket.on('error',(error)=>{
        console.log(error.message);
    });
    socket.on('data',(chunk)=>{
        client = socket;
        var msg = JSON.parse(chunk.toString());
        if(msg.cmd=='keep'){
            isOnline = !0;
            return;
        }
        dealMsg(msg);
    });
});
server.on('error',(err)=>{
    console.log(err);
});
server.on('listening',()=>{
    console.log(`listening on ${server.address().address}:${server.address().port}\n\r`);
});
server.listen(3000,'127.0.0.1');//启动监听
/**
 * 处理用户信息
 */
function dealMsg(msg){
    const cmd = msg.cmd;
    const funs = {
        'login':login,
        'chat':chat,
        'quit':quit,
        'exit':quit
    };
    if(typeof funs[cmd] !== 'function') return !1;
    funs[cmd](msg);
}
/**
 * 释放连接资源
 */
function freeConn(conn){
    conn.end();
    delete clients[conn.uuid];
    conn.timer&&clearInterval(conn.timer);
}
/**
 * 用户首次进入聊天室
 */
function login(msg){
    var uuid = '';
    uuid = getRndStr(15)+(++uid);//产生用户ID
    client.write(`欢迎你，${msg.nick}：这里总共有${Object.keys(clients).length}个小伙伴在聊天.\r\n`)
    client.nick = msg.nick;
    client.uuid = uuid;
    clients[uuid] = client;
    console.log(`${msg.nick} 进入了聊天室.`);
    broadcast(`系统：${msg.nick} 进入了聊天室.`);

}
/**
 * 广播消息
 */
function broadcast(msg){
    Object.keys(clients).forEach((uuid)=>{
        if((clients[uuid]!=client)& clients[uuid].writable){
            clients[uuid].write(msg);
        }
    });
}
/**
 * 私聊信息
 * */
function sentToUser(toUser,text,myUser){
    let toSocket=null;
    //便利查询私聊的用户，存在则将此uuid赋予toSocket
    Object.keys(clients).forEach((uuid)=>{
        if(clients[uuid].nick === toUser){
	        toSocket = clients[uuid];
	    }
    });
    //如果私聊的用户存在则单独给用户发信息，如果不存在，给自己终端返回信息
    if (toSocket) {
        toSocket.write(text);
    }else{
        Object.keys(clients).forEach((uuid)=>{
            if(clients[uuid].nick === myUser){
                toSocket = clients[uuid];
            }
        });
        toSocket.write(`对不起，该用户不存在！\r\n`);
    }
}
/**
 * 退出聊天室
 */
function quit(nick){
    var message = `系统：${nick} 退出了聊天室.`;
    console.log(`${nick} 退出聊天室`)
    broadcast(message);
    freeConn(client);
}
/**
 * 信息处理
 */
function chat(msg){
    // 如果是quit 或者 exit  则退出聊天室
    if(msg.msg.toLowerCase()=='quit'||msg.msg.toLowerCase()=='exit'){
        quit(msg.nick);
        return ;
    }
    //私聊      @aa:你好阿！
    let flag = msg.msg.substr(0,1);
	if(flag == '@'){
        let t = msg.msg.split(':');
        let text = `${msg.nick} 对你说：${t[1]}`;
        let myUser = msg.nick;
	    let toUser=t[0].substr(1); 
	    sentToUser(toUser,text,myUser);
	}else{
        var message = `${msg.nick} 说：${msg.msg}`;
        broadcast(message);
    }
}   
/**
 * 随机指定长度(len)的字符串
 */
function getRndStr(len=1){
    var rndStr = '';
    for (; rndStr.length < len; rndStr += Math.random().toString(36).substr(2));
    return rndStr.substr(0, len);
}
