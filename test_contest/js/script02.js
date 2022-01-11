
var type = "";
var prtText = $("#search").val();



$(document).ready(function(){
    //리스트 순서 변경하기
    $( ".product_list" ).sortable();
});

$.ajax({
    url : './json/store.json',
    type: 'GET',
}).done(function(data){
    //제이슨파일 안에 있는 배열 불러오기
    const proucts = data.products;

    for(var i = 0; i < proucts.length; i++){
        $('.product_list').append(
            `<li>
                <figure><img src="images/${proucts[i].photo}" alt="${proucts[i].product_name}"></figure>
                <figcaption>
                    <h3>${proucts[i].product_name}</h3>
                    <p>${proucts[i].brand_name}</p>
                </figcaption>
                <span>${proucts[i].price}</span>
            </li>`            
        );
        const text = proucts[i].product_name;
        const splitTxt = text.split('');
    };

    sortProdcuts();
});


    function product_name1(){
        type = "search";
        
        //배열 불러오기
        $.ajax({
            url : './json/store.json',
            type: 'GET',
        }).done(function(data){
            //제이슨파일 안에 있는 배열 불러오기
            const proucts = data.products;

            function sortProdcuts(){
                $('.product_list li').remove();
                for(var i = 0; i < proucts.length; i++){
                    const text = proucts[i].product_name;
                    const splitTxt = text.split('');
                    
                    $('.product_list').append(
                        `<li>
                            <figure><img src="images/${proucts[i].photo}" alt="${proucts[i].product_name}"></figure>
                            <figcaption>
                                <h3>${proucts[i].product_name}</h3>
                                <p>${proucts[i].brand_name}</p>
                            </figcaption>
                            <span>${proucts[i].price}</span>
                        </li>`            
                    );
                    console.log(splitTxt);
                };
            };

            sortProdcuts();
        });
    }
    //물어보고 싶은것 
    // 1. sortProdcuts()함수는 제품을 불러오는것으로 활용하고 이 함수로 이프문을써서 함수 재활용이 가능한지?
    // 2. sortProdcuts()함수 안에  splitTxt으로 배열의 제목 텍스트를 다 잘라놨는데 이걸로 이프문을써서 prtText와 동일한 텍스트가 있다면
    // 노출되게 하는것이 가능한지? 지금 내가 했을떄는 일단 함수를 각각 만들고 작업을 했을때 에러가 나서 왜그러는지를 모르겠다.....샹
    // 최종 - sortProdcuts()는 그냥 제품만 불러오고 온전한 상태로 둔다음 또다른 함수로 만들어서 그 함수안에서 이프문으로 만약에를 했을 시 
    // 뜯어 고칠 수 있도록 하고 싶다. 



