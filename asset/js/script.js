$(function(){
    var $firstMenu = $('.menu > ul > li');
    var $submenu = $('#header .submenu_bg');
    var $hambarger = $('#header .hamMenu');
    $firstMenu.mouseover(function(){
        $submenu.stop().slideDown(200);
    }).mouseout(function(){
        $submenu.stop().slideUp(200);
    });
    $submenu.mouseover(function(){
        $submenu.stop().slideDown(200);
    }).mouseout(function(){
        $submenu.stop().slideUp(200);
    });
    $hambarger.click(function(){
        $submenu.toggle();
    });
}); 