jQuery(function($){
    var $ul=$('#main_main');
    console.log($ul);
        $.ajax({
            url:"php/goodss.php",
            dataType:'json',
            success:function(data){
                
                
                $ul.html(data.map(item=>{
                    return `<li ><a href="html/list.html">
                                <div class="main_dv1">
                                    <img src="${item.picture}" height="100%" width="100%" alt="" />
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
})