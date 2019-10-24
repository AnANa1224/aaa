var token = localStorage.getItem('token');
// console.log(token);
// 如果token存在,则重定向至首页
if (token) {
    $(location).attr('href', './index.html');
}
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
                var token = data.data.token;
                localStorage.setItem('token',token);
                $(location).attr('href', './index.html');
            },
            async: true,
            error: function(){
                $('.notice').css('display','block');
                return false;
                alert('请求失败');
            }
        });
        return false;
    }
});
// 再次输入表单时,清除提示
$('input').on('keydown',function(){
    $('.notice').css('display','none');
});