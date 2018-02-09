jQuery(function($){
    $('#btn').on('click',function(){
        $.ajax({
            url:"../api/log.php",
            data:{
                username:$('#username').val(),
                password:$('#password').val()
            },
            success:function(data){
                if($('#username').val()===''){
                    alert('帐号为空！');
                } 
                else if($('#password').val()===''){
                    location.href = '../index.html';
                    alert('密码为空！');
                }
                else if(data === 'success'){
                    location.href = '../index.html';
                    alert('登录成功！');
                }
                else if(data === 'fail'){
                    alert('帐号或密码存在问题'); 
                }
                
            }
        })   
    })
})