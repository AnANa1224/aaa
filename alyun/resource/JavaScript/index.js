var num = 0;
var banner = $('#banner img')
var lis = $('#btn ul li');
var timer;

lis.eq(num).css('backgroundColor','#ff6700');
// 轮播图
timer = setInterval(function(){
    num >= 4 ? num = 0 : num++;
    // console.log(num)
    rotation(num)
},3000);
// 轮播图按钮
lis.on('click',function(){
    // 清除定时器
    clearInterval(timer);
    num = $(this).html();
    // 更改指定banner
    rotation(num);
    // 重新启动定时器
    timer = setInterval(function(){
        num >= 4 ? num = 0 : num++;
        // console.log(num)
        rotation(num)
    },3000);
});
/**
 * 修改banner
 * @param  {number} num 轮播图编号
 */
function rotation(num){
    banner.css('display','none');
    // banner.eq(num).css('display','block');
    banner.eq(num).fadeIn(300);
    lis.removeAttr('style');
    lis.eq(num).css('backgroundColor','#ff6700');
}
// 如果token存在,免登陆
var token = localStorage.getItem('token');
var chunk;
// console.log(token);
if (token) {
    $.ajax({
        url: "http://playground.it266.com/profile",
        type: 'GET',
        data: {
            token,token
        },
        dataType: "json",
        success: function(data){
            chunk = data.data;
        },
        async: false,
        error: function(){
            alert('请求失败');
        }
    });
    var html = $(`<div class="top login-top">
            <img src="${chunk.avatar}" width="50" alt="">
            <h4>Hi jack</h4>
            <p>
                <a href="#">控制台</a>
                <span>备案专区</span>
            </p>
        </div>
        <div class="bottom">
            <ul>
                <li>
                    <span>0</span>
                    <p>待付款</p>
                </li>
                <li>
                    <span>0</span>
                    <p>待续费</p>
                </li>
                <li>
                    <span>${chunk.point}</span>
                    <p>积分</p>
                </li>
                <li>
                    <span>0</span>
                    <p>代金券</p>
                </li>
                <li>
                    <span>${chunk.balance}</span>
                    <p>账户余额</p>
                </li>
                <li>
                    <span>${chunk.message}</span>
                    <p>站内信</p>
                </li>
            </ul>
        </div>`);
    $('#content .right').append(html);
}else{
    var html = $(`<div class="top">
            <img src="resource/img/infor.png" width="50" alt="">
            <h4>Hi!欢迎来到阿里云</h4>
            <p>
                <a href="./login.html">登录</a>
                <a href="">注册</a>
            </p>
        </div>
        <div class="bottom">
            <a href="">全民云计算</a>
            <span>丨</span>
            <a href="">免费试用</a>
        </div>`);
    $('#content .right').append(html);
}