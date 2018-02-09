jQuery(function($){

    console.log(666);
    $("#main_main").on('click','.main_li',function(){ 
        console.log(this)
        let picture =$(this).children().children().children('img').attr('src');
        let name = $(this).children().children('h3').text();
        let price = $(this).find('.main_dv2_span1').text().slice(1,3);
        let discount = $(this).find('.main_dv2_span2').text().slice(1,4);
        let id = $(this).attr('data-id');

        var goods=[];
        goods.push(id,name,picture,price,discount);

        console.log(goods);

        var params = "?";
        params += 'id='+id+'$name='+encodeURI(name)+'$price='+price+'$src='+picture+'$discount='+discount;

        window.location.href="../html/details.html?"+params;
    });


});

