$(document).ready(function(){

	$('.up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 450);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.up').slideDown(450);
		} else {
			$('.up').slideUp(450);
		}
	});

});
