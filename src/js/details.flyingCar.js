/* 
* @Author: Marte
* @Date:   2018-02-06 11:35:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-07 10:47:22
*/

(function(){
	let totalBtn1 = 0,
		totalBtn2 = 0;
	function clickBtn() {
		$('#button').on('click',function () {
			let img=$('#img1');
			console.log(img);
			let flyImg = img.clone().css({
				'opacity':'0.6'
			});
			$('.main').append(flyImg);
			flyImg.css({
				'z-index':999,
				'border':'3px solid #fff',
				'position': 'absolute',
				'height' : img.height() + 'px',
				'width' : img.width() + 'px',
				'top' : img.offset().top +'px',
				'left' : img.offset().left + 'px'
			})
			flyImg.animate({
				'width' : 50 + 'px',
				'height' : 50 + 'px',
				'border-radius' : 100 + '%'
			},function(){
				let	t = $('#btn1-add').offset().top+20;
				flyImg.animate({
					'top':t,
					'left':($(document).width()-$('.car').width()) + 'px',
					'height':0 +'px',
					'width' :0+'px',
				},1500,function(){
					flyImg.remove();
				})
			});
		})
	}
	clickBtn();
})();