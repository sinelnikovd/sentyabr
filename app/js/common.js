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


	var owlpr = $('.product .carousel .items-carousel').owlCarousel({
		loop:true,
		nav:false,
		items: 1
	})

	$('.product .carousel .nav-carousel-prev').click(function() {
		owlpr.trigger('prev.owl.carousel');
	})

	$('.product .carousel .nav-carousel-next').click(function() {
		owlpr.trigger('next.owl.carousel');
	})

	if($('div').is(".location-lang"))
		$.magnificPopup.open({
			items: {
			src: '.location-lang',
			type: 'inline'
			}
		});

	//$('.cSelect').customSelect();

	$('.sumoselect').SumoSelect({placeholder: 'Выберите категорию'});





	//SVG Fallback
	/*if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};*/

});
