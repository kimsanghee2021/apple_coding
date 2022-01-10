
$(document).ready(function(){
    //리스트 순서 변경하기
    $( ".product_list" ).sortable();
    getProducts();
});

//배열 불러오기
function getProducts(){
    $.ajax({
        url : './json/store.json',
        type: 'GET',
    }).done(function(data){
        //제아슨파일 안에 있는 배열 불러오기
         console.log(data.products[0].product_name);
        var $product_list = $(data.products).filter(function(name){
            return name[2];
        });
        console.log($product_list);
        // if($product_list == $('#search').val()){
        //     $('h2').css({color:'red'});
        // }





        // console.log($photo);
    });
}

