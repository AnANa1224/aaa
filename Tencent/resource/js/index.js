// 网页下拉框
$('.more-txt').on('mouseover',function(){
    $('.nav-sub').css('display','block');
});
$('.nav-sub').on('mouseover',function(){
    $('.nav-sub').css('display','block');
});
$('.nav-sub').on('mouseout',function(){
    $('.nav-sub').css('display','none');
});
$('.searchSelected').on('mouseover',function(){
    $('.searchWy').css('backgroundPosition','0 -30px');
    $('.searchTab').css('display','block');
});
$('.searchMenu').on('mouseout',function(){
    $('.searchWy').css('backgroundPosition','0 -0');
    $('.searchTab').css('display','none');
});
$('.searchTab').on('mouseover',function(){
    $(this).css('display','block');
});
$('.searchTab ul li').on('mouseover',function(){
    $('.searchTab ul li').removeClass('warning');
    $(this).addClass('warning');
});
// 轮播图

var num = 0;
var banner = $('.list img');
var lis = $('.dot span');
var timer;

timer = setInterval(function(){
    num >= 2 ? num = 0 : num++;
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
        num >= 2 ? num = 0 : num++;
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
    banner.eq(num).css('display','block');
    // banner.eq(num).fadeIn(100);
    lis.removeAttr('class');
    lis.eq(num).attr('class','active');
}

// main
$('.col-1 .head h2 a').on('mouseover',function(){
    $('.head h2 .tit').removeAttr('class')
    $(this).attr('class','tit');
});
$('.col-1 .head h2 a').eq(0).on('mouseover',function(){
    $('.tab-new-01').css('display','block');
    $('.tab-new-02').css('display','none');
});
$('.col-1 .head h2 a').eq(1).on('mouseover',function(){
    $('.tab-new-01').css('display','none');
    $('.tab-new-02').css('display','block');
});
$('a').on('mouseover',function(){
    var color = $(this).css('color');
    $(this).css('color','#0c82ff');
    $(this).on('mouseout',function(){
        $(this).css('color',color);
    });
});
$('.product').on('mouseover',function(){
    $('.prod-more-btn').css('backgroundColor','#0f82ff');
    $('#btn-icon').addClass('move-btn-icon');
});
$('.product').on('mouseout',function(){
    $('.prod-more-btn').css('backgroundColor','#FFF');
    $('#btn-icon').removeClass('move-btn-icon');
});
$('.prod-more-btn').on('click',function(){
    if ( parseInt($('.prod-more').css('width')) == 0) {
        $('.prod-more').attr('dis','true');
        $('#btn-icon').addClass('open-btn-icon');
        $('.prod-more').animate({
            width: '337px',
            left: '-337px',
        },100);
    }else{
        $('#btn-icon').removeClass('open-btn-icon');
        $('#btn-icon').removeClass('move-btn-icon');
        $('.prod-more').animate({
            width: '0px',
            left: '0px',
        },100);
    }
});
$('.prod-more .list').on('mouseover',function(){
    $('#btn-icon').addClass('open-btn-icon');
});
$('body').on('mousemove',function(){
    if ($('.prod-more').attr('dis') == 'true' && $('.prod-more-btn').css('backgroundColor') == 'rgb(255, 255, 255)' ) {
        $('.prod-more').removeAttr('dis')
        $('#btn-icon').removeClass('open-btn-icon');
        $('#btn-icon').removeClass('move-btn-icon');
        $('.prod-more').animate({
            width: '0px',
            left: '0px',
        },100);
    }
});