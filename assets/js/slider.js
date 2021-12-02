const sliders = document.querySelectorAll('.swiper-container');

sliders.forEach((el) => {
	let swiper = new Swiper(el, {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		pagination: {
			el: el.querySelector('.swiper-pagination'),
			clickable: true,
		},
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: el.querySelector('.swiper-button-next'),
			prevEl: el.querySelector('.swiper-button-prev'),
		},
	});
});
