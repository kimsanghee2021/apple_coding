$(function(){
    var $firstMenu = $('.menu > ul > li');
    var $submenu = $('.menu > ul > li ul.submenu');
    var $submenuBg = $('#header:after');
    $firstMenu.mouseover(function(){
        $submenu.stop().slideDown(200);
        $submenuBg.stop().slideDown(200);
    }).mouseout(function(){
        $submenu.stop().slideUp(200);
        $submenuBg.stop().slideUp(200);
    });
});