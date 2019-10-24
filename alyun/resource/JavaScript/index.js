// 如果token存在,免登陆
var token = localStorage.getItem('token');
var chunk;
// console.log(token);
if (token !== null) {
    $('#content .login-right').css('display','block');
    $('#content .right').css('display','none');
    $.ajax({
        url: "http://playground.it266.com/profile",
        type: 'GET',
        data: {
            token,token
        },
        dataType: "json",
        success: function(data){
            chunk = data.data;
            $('.avatar').attr('src',chunk.avatar);
            $('.point').html(chunk.point);
            $('.balance').html(chunk.balance);
            $('.message').html(chunk.message);
        },
        async: true,
        error: function(){
            alert('请求失败');
        }
    });
}else{
    $('#content .login-right').css('display','none');
    $('#content .right').css('display','block');
}


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
// 登录弹框
$('#dologin').on('click',function(){
    $('#login').css('display','block');
    return false;
});
// 右上关闭
$('.close').on('click',function(){
    $('#login').css('display','none');
});
// 提交表单验证数据
$('form').on('submit',function(){
    var username = $('input').eq(0).val();
    var password = $('input').eq(1).val();
    // console.log(username, password);
    // 信息正确,存token,重定向至首页,失败则提示
    if (username && password) {
        $.ajax({
            url: "http://playground.it266.com/login",
            type: 'POST',
            data: {
                username: username,
                password: password
            },
            dataType: "json",
            success: function(data){
                var tokens = data.data.token;
                if (tokens) {
                    localStorage.setItem('token',tokens);
                    $(location).attr('href', './index.html');
                }else{
                    $('.notice').css('display','block');
                    return false;
                }
            },
            async: true,
            error: function(){
                
            }
        });
    }
    return false;
});
// 再次输入表单时,清除提示
$('input').on('keydown',function(){
    $('.notice').css('display','none');
});