


$(function(){
    var $menuList = $('#top_menu ul li');
    var $contents = $('#contents > div');

    $menuList.click(function(e){
        e.preventDefault();
        
        var $idx = $(this).index();
        var $section = $contents.eq($idx).offset().top;
        $('html,body').stop().animate({scrollTop : $section},400);
        console.log($section);
    });
    $(window).scroll(function(){
        $contents.each(function(){
            if($(this).offset().top <= $(window).scrollTop()){
                var $idx = $(this).index();
                $menuList.removeClass('on');
                $menuList.eq($idx).addClass('on');
            }
        });
    });
});


