	
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
		      breakpoint: 640,		     
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
		var bi = $('.main_banner .slick-slide a img');
		console.log(bi)
		

		$.each(bi, function (index, item) { 

			var bis = index.attr('src');
			console.log(bis);
			bis = bis.split('_');
	        console.log(bis);
			index.attr('src',bis[0]+'_'+bis[1]+'.jpg');	

		// 두 번째 매개변수로는 콜백함수인데 콜백함수의 매개변수 중 
		// 첫 번째 index는 배열의 인덱스 또는 객체의 키를 의미하고 
		// 두 번째 매개 변수 item은 해당 인덱스나 키가 가진 값을 의미합니다. var result = ''; result += index +' : ' + item.title + ', ' + item.url; console.log(result); // 0 : 다음, http://daum.net // 1 : 네이버, http://naver.com })
		});

});
	

$(window).on('resize', function(){

	
});
	