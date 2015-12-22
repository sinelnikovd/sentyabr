$(document).ready(function() {

	/*if($('input[data-inputmask]').length > 0) {
		$('input[data-inputmask]').mask("+7 (999) 999-99-99");
	}*/

	var owlmain = $('.main-section-2-carousel .items-carousel').owlCarousel({
		loop:true,
		nav:false,
		items: 1
	})

	$('.main-section-2-carousel .nav-carousel-prev').click(function() {
		owlmain.trigger('prev.owl.carousel');
	})

	$('.main-section-2-carousel .nav-carousel-next').click(function() {
		owlmain.trigger('next.owl.carousel');
	})


	var owlshmot = $('.boottom-carousel .items-carousel').owlCarousel({
		loop:true,
		nav:false,
		items: 1
	})

	$('.boottom-carousel .nav-carousel-prev').click(function() {
		owlshmot.trigger('prev.owl.carousel');
	})

	$('.boottom-carousel .nav-carousel-next').click(function() {
		owlshmot.trigger('next.owl.carousel');
	})

	var owls4 = $('.main-section-4-carousel .items-carousel').owlCarousel({
		loop:true,
		nav:false,
		items: 1
	})

	$('.main-section-4-carousel .nav-carousel-prev').click(function() {
		owls4.trigger('prev.owl.carousel');
	})

	$('.main-section-4-carousel .nav-carousel-next').click(function() {
		owls4.trigger('next.owl.carousel');
	})





	//SVG Fallback
	/*if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};*/

});
