

document.addEventListener('DOMContentLoaded',function(){
    var ul = document.querySelector('#main_main');
    var page = document.querySelector('.page');

/*获取数量*/
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
/*获取数量结束*/


    let pageNo = 1;
    let qty = 24;
    let arr_status = [200,304];

    let xhr = new XMLHttpRequest();

    xhr.onload = ()=>{
            if(arr_status.indexOf(xhr.status)!=-1){
                let res = JSON.parse(xhr.responseText);
                console.log(res);

                ul.innerHTML = res.data.map(item=>{
                    return `
                        <li class="main_li" data-id="${item.id}"><a>
                        <div class="main_dv1">
                            <img src="../img/${item.picture}" height="100%" width="100%" alt="" />
                        </div>
                        <div class="main_dv2">
                            <span class="main_dv2_span1"><em>￥</em>${item.discount}
                            </span>
                            <span class="main_dv2_span2"><em>￥</em>${item.price}
                            </span>
                        </div>
                        <h3>${item.name}</h3>
                        </a>
                        </li>`
                }).join('')

                // 处理分页
                let pageQty = Math.ceil(res.total/res.qty);

                page.innerText = '';
                for(let i=1;i<=pageQty;i++){
                    let span = document.createElement('span');
                    span.innerText = i;
                    if(i===res.pageNo){
                        span.className = 'pg-prev';
                    }
                    page.appendChild(span);
                }
            }
    }

    xhr.open('post','../php/list.php');
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(`pageNo=${pageNo}&qty=${qty}`);


    // 切换分页
    page.onclick = function(e){
            if(e.target.tagName.toLowerCase() === 'span'){
                pageNo = e.target.innerText*1;
                xhr.open('post','../php/list.php'); 
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                xhr.send(`pageNo=${pageNo}&qty=${qty}`);
            }
    }      
});