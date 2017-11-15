/*Initial Slick Slider*/


;
(function ($) {
	"use strict";
	/*Isotope*/
	$(document).ready(function () {
		const $elements = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true
		});

		$('.grid__btn').on('click', function () {
			var filterValue = $(this).attr('data-filter');
			console.log(this);
			$elements.isotope({
				filter: filterValue
			});
		});

		$('.grid__btn').on('click', function () {
			$('.grid__filters').find('.grid__btn--checked').removeClass('grid__btn--checked');
			$(this).addClass('grid__btn--checked');
			console.log(this);
		});
	});
	/* Isotop*/
	$(".navlist").on("click","a", function (event) {
  event.preventDefault();
  $('html, body').animate({
   scrollTop: $($(this).attr('href')).offset().top
 }, 500);
  $(".navlist").find('.navlist__item__link--active').removeClass('navlist__item__link--active');
  $( this ).addClass('navlist__item__link--active');
});

$(".scroll-to").on("click", function (event) {
  event.preventDefault();
  $('html, body').animate({
   scrollTop: $($(this).attr('href')).offset().top
 }, 1000);
});


	/*Slider*/
	$(function () {
		$('.team__slider').slick({
			dots: true
		});
	});
	$('.testimonials__slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		slidesToShow: 1,
		arrows: false
	});
	/*slider*/

/*MAP*/
	function initMap() {
		var map;
		var mapBox = $('#map')[0];

		var myCenter = {
			lat: 46.584328,
			lng: 30.7811913
		};
		map = new google.maps.Map(mapBox, {
			zoom: 7,
			center: {
				lat: 46.4598865,
				lng: 30.5717046
			}
		});
		var marker = new google.maps.Marker({
			position: myCenter,
			icon: {
				url: 'https://beetroot.se/wp-content/uploads/2016/04/cropped-favicon-150x150.png?x17685',
				scaledSize: new google.maps.Size(76, 76)
			},
			map: map,
			title: 'Home'
		});



	}


	$(window).on('load', function () {
		initMap();
	});
})(jQuery);
