
$(document).ready(function(){
    var goodslist = [];

    var cookies = document.cookie;
        cookies = cookies.split('; ');
        cookies.forEach(function(item){
        var arr = item.split('=');
        if(arr[0] === 'goodslist'){
            goodslist = JSON.parse(arr[1]);
        }
    });
    $('.cartnum').text(goodslist.length);


    $('.car_top').on('click','li',function(){
        location.href="../html/car.html";
    })


    $('#button').on('click',function(){
        var pa = location.search;
        var params = pa.slice(2).split('$');
        var nums = $('#amount').attr('value');
        var goodss={};
        goodss.qty=nums;
            params.forEach(function(item){
                var arr = item.split('=');
                goodss[arr[0]]= decodeURI(arr[1]);
            });
        
        console.log(goodss);

        var currentLi = $('goods_show');
        
        var id = goodss.id;console.log(id); 
        for(var i=0;i<goodslist.length;i++){
            if(goodslist[i].id === id){
                goodslist[i].qty++;
                break;
            }
        }
        if(i===goodslist.length){
            goodslist.push(goodss);
        }
        document.cookie = 'goodslist='+JSON.stringify(goodslist);
    })
});
