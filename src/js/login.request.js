jQuery(function($){
    $('#btn').on('click',function(){
        console.log(666);
        $.ajax({
            url:"../php/log.php",
            data:{
                username:$('#username').val(),
                password:$('#password').val()
            },
            success:function(data){
                if(data === 'success'){
                    location.href = '../index.html';
                    alert('登录成功！');
                }else if(data === 'fail'){
                    
                    
                    alert('帐号或密码存在问题');
                     //$('#username').addClass('danger');
                   
                }
                
            }
        })   
    })
})