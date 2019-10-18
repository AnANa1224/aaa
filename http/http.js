const net = require('net');
const server = net.createServer();
server.on('connection',(socket)=>{
    socket.on('end',()=>{
        // console.log(`断开连接.\n\r`);
        socket.destroy();
    });
    socket.on('error',(error)=>{
        console.log(error.message);
    });
    socket.on('data',(chunk)=>{
        console.log(chunk.toString());
        socket.write('HTTP/1.1 200 OK\r\nDate: Mon, 27 Jul 2009 12:28:53 GMT\r\nServer: Apache\r\nLast-Modified: Wed, 22 Jul 2009 19:15:56 GMT\r\nETag: "34aa387-d-1568eb00"\r\nAccept-Ranges: bytes\r\nContent-Length: 51\r\nVary: Accept-Encoding\r\nContent-Type: text/plain');
        socket.end();
    });
});
server.on('error',(err)=>{
    console.log(err);
});
server.on('listening',()=>{
    console.log(`listening on ${server.address().address}:${server.address().port}\n\r`);
});
server.listen(8001,'127.0.0.1');//启动监听   GET /hello.txt HTTP/1.1\r\nUser-Agent: curl/7.16.3 libcurl/7.16.3 OpenSSL/0.9.7l zlib/1.2.3\r\nHost: localhost:8001\r\nAccept-Language: en, mi\n\n\r\nhaha\r\n