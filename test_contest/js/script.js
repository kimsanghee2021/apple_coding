//첫번째 해야할 일 
//1. 상품을 먼저 제이쿼리 ui로 움직일 수 잇게 짜기 
//2. 인풋박스에 텍스트 입력시 그 제품만 노출시키기 
//3. 상품을 끌고가서 장바구니에 놓았을때 그 부분에 상품이 담게 하기 
//4. 상품의 갯수를 추가하거나 뺴면 금액이 변경되게 하기 

$(document).ready(function(){
    start();
});



function start(){
    var products = [];

    //데이터 넣는 아작스 
    getProducts();
}

function getProducts(){
    $.ajax({
        url : './json/store.json',
        type: 'GET',
    }).done(function(data){
        console.log(data.products[0].brand_name);
    });
}


