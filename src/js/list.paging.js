jQuery(function($){
    var $ul=$('#main_main');
    console.log(666);
    $.ajax({
        url:"../php/goodss.php",
        dataType:'json',
        success:function(data){
            console.log(data);  
            $ul.html(data.map(item=>{
                    return `<li ><a href="html/details.html">
                                <div class="main_dv1">
                                    <img src="../img/${item.picture}" height="100%" width="100%" alt="" />
                                </div>
                                <div class="main_dv2">
                                    <span class="main_dv2_span1">
                                        <em>￥</em>
                                        ${item.discount}
                                    </span>
                                    <span class="main_dv2_span2">
                                        <em>￥</em>
                                        ${item.price}
                                    </span>
                                </div>
                                <h3>${item.name}</h3>
                    </a>
                    </li>`
            }).join(''))
        }
    })
    $('.pg-next').on('click',function(){

        var $ul=$('#main_main');
        console.log(666);
        $.ajax({
        url:"../php/list.php",
        dataType:'json',
        data:{
            page:$('.pg-2').val(),
        },
        success:function(data){
            console.log(data);  
            $ul.html(data.map(item=>{
                    return `<li ><a href="html/details.html">
                                <div class="main_dv1">
                                    <img src="../img/${item.picture}" height="100%" width="100%" alt="" />
                                </div>
                                <div class="main_dv2">
                                    <span class="main_dv2_span1">
                                        <em>￥</em>
                                        ${item.discount}
                                    </span>
                                    <span class="main_dv2_span2">
                                        <em>￥</em>
                                        ${item.price}
                                    </span>
                                </div>
                                <h3>${item.name}</h3>
                    </a>
                    </li>`
            }).join(''))
        }
        })
        $('.pg-1').css({
            'background':'#fff',
            'color':'#000',
            'box-shadow':'1px 1px 3px rgba(204, 204, 204, 0.7)'
        });
        $('.pg-2').css({
            'background':'red',
            'color':'#fff'
        })


    })


    $('.pg-prev').on('click',function(){

        var $ul=$('#main_main');
        console.log(666);
        $.ajax({
        url:"../php/goodss.php",
        dataType:'json',
        data:{
            page:$('.pg-1').val(),
        },
        success:function(data){
            console.log(data);  
            $ul.html(data.map(item=>{
                    return `<li ><a href="html/details.html">
                                <div class="main_dv1">
                                    <img src="../img/${item.picture}" height="100%" width="100%" alt="" />
                                </div>
                                <div class="main_dv2">
                                    <span class="main_dv2_span1">
                                        <em>￥</em>
                                        ${item.discount}
                                    </span>
                                    <span class="main_dv2_span2">
                                        <em>￥</em>
                                        ${item.price}
                                    </span>
                                </div>
                                <h3>${item.name}</h3>
                    </a>
                    </li>`
            }).join(''))
        }
        })
        $('.pg-2').css({
            'background':'#fff',
            'color':'#000',
            'box-shadow':'1px 1px 3px rgba(204, 204, 204, 0.7)'
        });
        $('.pg-1').css({
            'background':'red',
            'color':'#fff'
        })


    })
})