//첫번째 해야할 일 
//1. 상품을 먼저 제이쿼리 ui로 움직일 수 잇게 짜기 
//2. 인풋박스에 텍스트 입력시 그 제품만 노출시키기 
//3. 상품을 끌고가서 장바구니에 놓았을때 그 부분에 상품이 담게 하기 
//4. 상품의 갯수를 추가하거나 뺴면 금액이 변경되게 하기 

$(document).ready(function(){
    start();
    $( ".product_list" ).sortable();
    getProducts();
});



function start(){
    var products = [];
}

function getProducts(){
    $.ajax({
        url : './json/store.json',
        type: 'GET',
    }).done(function(data){
        //console.log(data.products[0].brand_name);
        var productsArr = [data.products];
        var $photo = productsArr[0].photo;
        console.log($photo);
        
        function checkSserch(productsArr){
            return productsArr == $('#search').val();
        }
        function serchResult(){
            document.querySelector('.product_list li').innerHTML = productsArr.filter(checkSserch);
        }

        var 장바구니상품 = $(`
                        <li>
                            <figure>
                                <img src="images/${photo}" alt="${product_name}">
                            </figure>
                            <figcaption>
                            <h3>${product_name}</h3>
                            <p>${brand_name}</p>
                            </figcaption>
                            <p>${price}</p>
                        </li>
        `);

        function product_list(){
            for(var i =0; i > $('.product_list li').length; i++){
                $(this).append(장바구니상품());
            }
        }

    });
}

