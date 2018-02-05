/* 
* @Author: Marte
* @Date:   2018-02-03 17:28:15
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-03 17:57:30
*/

document.addEventListener('DOMContentLoaded',function(){
    // 轮播图效果
            let carousel = document.querySelector('.top_wrap_carousel');
            let ul = carousel.firstElementChild;

            // 图片的数量
            let length = ul.children.length;

            // 图片的宽度
            let imgWidth = 700;

            // 初始索引值（默认显示第一张图片）
            let index = 0;

            // 切换图片定时器
            let timer;

            // 动画定时器
            let animationTimer;


            // 图片切换
            timer = setInterval(autoPlay,3000);


            // 添加前后按钮
            let btnNext = document.createElement('span');
            btnNext.className = 'next';
            btnNext.innerHTML = '&gt;';
            let btnPrev = document.createElement('span');
            btnPrev.className = 'prev';
            btnPrev.innerHTML = '&lt;';

            carousel.appendChild(btnPrev);
            carousel.appendChild(btnNext);


            // 添加页码
            var page = document.createElement('div');
            page.className = 'page';
            for(var i=0;i<length;i++){
                var span = document.createElement('span');
                span.innerText = i+1;
                // 给当前页码添加高连
                if( i === index){
                    span.className = 'active';
                }

                page.appendChild(span);
            }
            carousel.appendChild(page);


            // 初始化
            showImg();

            
            carousel.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;

                // 前后按钮
                if(target.className == 'next'){
                    index++;
                    showImg();
                }else if(target.className == 'prev'){
                    index--;
                    showImg();
                }

                // 点击页码
                else if(target.parentNode.className === 'page'){
                    index = target.innerText-1;
                    showImg();
                }
            }


            // 鼠标移入移出
            carousel.onmouseenter = function(){
                clearInterval(timer);
            }
            carousel.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }

            // 定时器函数
            function autoPlay(){
                index++;

                showImg();
            }

            // 动画函数
            function showImg(){
                if(index>=length){
                    index=0;
                }else if(index<0){
                    index = length - 1;
                }

                // 目标值
                let target = -index*imgWidth;

                // 清除之前的定时器
                clearInterval(animationTimer);

                animationTimer = setInterval(()=>{
                    // 获取当前top值
                    let current = ul.offsetLeft;//0=>-320

                    let speed = (target-current)/10;//-0.5=>-1,0.5=>1

                    speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

                    current += speed;

                    if(current == target){
                        clearInterval(animationTimer);
                        current = target;
                    }

                    ul.style.left = current + 'px';
                    
                },30);

                // 高亮页码
                // 先清除所有高亮，再给当前添加高亮
                for(var i=0;i<length;i++){  
                    page.children[i].className = '';
                }
                page.children[index].className = 'active';
            }




   // 下面图形的效果
    function mainCenter(){
        var col=document.querySelectorAll('.col');
        for(var i=0;i<col.length;i++){
            var timer;
            // 鼠标进来
            col[i].onmouseenter=function(){
                var link=this.children[1];//console.log(link)
                clearInterval(this.timer);
                this.timer=setInterval(function(){
                    var current = link.offsetTop;//console.log(current);
                    var target= 76;//console.log(target)
                    var speed=Math.ceil(target/10);
                    if(current - target<=76){
                        clearInterval(this.timer);
                        current=target;
                    }
                    link.style.top=target-speed+'px';
                },30);
            }
            // 鼠标离开
            col[i].onmouseleave=function(){
                var link=this.children[1];//console.log(links)
                clearInterval(this.timer);
                this.timer=setInterval(function(){
                    var top= link.offsetTop;//console.log(top)
                    var speed=Math.ceil((133-top)/10);
                    if(top>=133){
                        clearInterval(this.timer);
                        top=133-speed;
                    }
                    link.style.top=top+speed+'px';
                },30);
            }
        }

    }

    mainCenter();  
});