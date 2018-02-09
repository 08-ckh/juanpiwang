
$(document).ready(function(){
    var oCarList = document.getElementById('carList');
    var oSubPrice = oCarList.nextElementSibling;
    var btnClear = document.getElementById('btnClear');
    var goodslist = Cookie.get('goodslist');

    console.log(goodslist);
    if(goodslist.length===0){
            goodslist = [];
        }else{
            goodslist = JSON.parse(goodslist);
        }

    $('.cartnum').text(goodslist.length);

    render();
    function render(){
            var total = 0;
            var ul = document.createElement('ul');
            console.log(goodslist.qty);
            ul.innerHTML = goodslist.map(function(item){
                console.log(item);
                total += item.price*item.qty;
                return '<li data-id="'+item.id+'">'+
                    '<img id="car_img" src="'+item.src+'">'+
                    '<h4>'+item.name+'</h4>'+
                    '<p class="price"><span>'+item.price+'&times;'+item.qty+'</span></p>'+
                    '<span class="btn-close">&times;</span>'
                '</li>';
            }).join('');

            oCarList.innerHTML = '';
            oCarList.appendChild(ul);
            oSubPrice.innerHTML = '总计：' + total.toFixed(2);
    }

    btnClear.onclick = function(){
            var now = new Date();
            now.setDate(now.getDate()-10);
            document.cookie = 'goodslist=null;expires='+now.toUTCString();
            render();
    }

    oCarList.onclick = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;

            if(target.className === 'btn-close'){
                var id = target.parentNode.getAttribute('data-id');
                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist.splice(i,1);
                        break;
                    }
                }
                Cookie.set('goodslist',JSON.stringify(goodslist));
                render();
            }
    }
});