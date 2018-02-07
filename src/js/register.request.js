jQuery(function($){
    $('#btns').on('click',function(){
        console.log(666);
        $.ajax({
            url:"../php/reg.php",
            data:{
                username:$('#username').val(),
                password:$('#password').val()
            },
            success:function(data){
                if(data === 'success'){
                    alert('帐号存在重新输入');
                     //$('#username').addClass('danger');
                }else if(data === 'fail'){
                    
                    location.href = 'login.html';
                    alert('注册成功！');
                   
                }
                
            }
        })   
    })
})