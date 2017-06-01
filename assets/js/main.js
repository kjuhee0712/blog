	
$(document).ready(function(){

	//윈도우 10까지는 MSIE 윈도우 11부터는 Trident/를 사용한다.
	var ua = window.navigator.userAgent;
		if(ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0){ 
			document.body.className="ie";
	}

	//브라우저 사이즈에 따라 배너 작동
	var bw=$(window).width();
	if(bw > 1024){

		$('.main_banner').slick({
		    infinite: true,
	        centerMode: true,
	        centerPadding: '120px',
	        slidesToShow: 3,
	        slidesToScroll: 3
		});		

	}else{

		$('.main_banner').slick({
		    infinite: true,
	        centerMode: true,
	        centerPadding: '120px',
	        slidesToShow: 2,
	        slidesToScroll: 1
		});	

	}
	
	//이미지 높이에 따라 텍스트박스 높이 조절
	$('.main_banner .slick-slide dl').hiehgt($('.main_banner .slick-slide a img').height());  
	

});
	