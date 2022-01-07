$(function(){
    $('.d_flex li a').click(function(){
        $(this).parents('li').addClass('active').siblings().removeClass('active');
    });
});
