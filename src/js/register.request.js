jQuery(function($){
    $('#btns').on('click',function(){
        console.log(666);
        $.ajax({
            url:"../api/reg.php",
            data:{
                username:$('#username').val(),
                password:$('#password').val()
            },
            success:function(data){
                if($('#username').val()===''){
                    alert('帐号为空！');
                }
                else if($('#password').val()===''){
                    alert('密码为空！');
                }
                else if($('#password').val()==$('#passwords').val()){
                    if(data === 'success'){
                    alert('帐号存在重新输入');
                    }
                    else if(data === 'fail'){
                    location.href = 'login.html';
                    alert('注册成功！');
                    }
                }
                else{
                    alert('密码不一致！');
                }    
            }
        })   
    })
})