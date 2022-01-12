
var proucts_arr = [];

// $('#search').change(function(){
//     searchVal = $(this).val();
//     prodcut_filter(searchVal);
// });

$(document).ready(function(){
    //리스트 순서 변경하기
    product_data();
    $( ".product_list" ).sortable();
});


//배열 불러오기
function product_data(){
    $.ajax({
        url : './json/store.json',
        type: 'GET',
    }).done(
    function(data){

        //제이슨파일 안에 있는 배열 불러오기
        proucts_arr = data.products;
        
            // 제품 필터 
            function prodcut_filter(){
                var searchVal = $('#search').val();
                const fliterArray = proucts_arr.filter(function(x){
                    //console.log(x.product_name);
                return x.product_name.includes(searchVal);
            }); 

            if(fliterArray.length > 0){
                $('.product_list li').remove();
                for(var i = 0; i < proucts_arr.length; i++){
                    $('.product_list').append(
                        `<li>
                            <figure><img src="images/${fliterArray[i].photo}" alt="${fliterArray[i].product_name}"></figure>
                            <figcaption>
                                <h3>${fliterArray[i].product_name}</h3>
                                <p>${fliterArray[i].brand_name}</p>
                            </figcaption>
                            <span>${fliterArray[i].price}</span>
                        </li>`            
                    );
                };
            } else{
                alert('제품이 없습니다.');
                $('#search').val('');
            }
        };
    prodcut_filter();
    });
}




