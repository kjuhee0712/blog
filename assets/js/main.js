	
$(document).ready(function(){

	//윈도우 10까지는 MSIE 윈도우 11부터는 Trident/를 사용한다.
	var ua = window.navigator.userAgent;
		if(ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0){ 
			document.body.className="ie";
	}

	$('.main_banner').slick({
		    infinite: true,
	        centerMode: true,
	        centerPadding: '120px',
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        autoplay: true,
	        responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 680,		     
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        centerMode: false,
		        arrows: false,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 480,		     
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        centerMode: false,
		        arrows: false,
		        infinite: true
		      }
		    }
		]
	});	

	//브라우저 사이즈에 따라 작동
	var bw=$(window).width();

	if(bw > 1024){	
			
	}else{

	}

	var $footer_btn = $('a.btn_top, a.btn_home, a.btn_menu');
	
	$('a.btn_top').hide(); // 탑 버튼 숨김

			 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) { // 스크롤 내릴 표시
			$('a.btn_top').fadeIn();
		} else {
			$('a.btn_top').fadeOut();
		}
	});


	$('a.btn_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);  // 탑 이동 스크롤 속도
		return false;
	});

	$('.footer_btn.btn_home').click(function () {
		$('.header_bg').animate({ 'width': 'toggle' }, 500);
	});	

});
	

$(window).on('resize', function(){

	
});
	