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
        $submenu.fadeToggle(200)
    });
    /* 카카오 지도 */
    new daum.roughmap.Lander({
		"timestamp" : "1637379629912",
		"key" : "285gr",
		"mapWidth" : "1440",
		"mapHeight" : "600"
	}).render();
}); 


