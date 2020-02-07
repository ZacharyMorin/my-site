const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	});
});

// Slick JS
$(document).ready(function() {
	$('.logo-section').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		arrows: true,
		prevArrow: '<i class="fas fa-arrow-alt-circle-left"></i>',
		nextArrow: '<i class="fas fa-arrow-alt-circle-right"></i>',
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true
				}
			},
			{
				breakpoint: 726,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
});
