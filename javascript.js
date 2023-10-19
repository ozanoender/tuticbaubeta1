/*------------------Galerie Bilder Effekt ----------------*/

function setupGallery(galleryElement) {
	const images = galleryElement.querySelectorAll('.image-wrapper img');
	let currentIndex = 0;

	function showImage(index) {
		if (index < 0) {
			index = images.length - 1;
		} else if (index >= images.length) {
			index = 0;
		}

		images.forEach((img, i) => {
			if (i === index) {
				img.classList.add('active');
			} else {
				img.classList.remove('active');
			}
		});

		currentIndex = index;
	}

	const prevButton = galleryElement.querySelector('.prev');
	const nextButton = galleryElement.querySelector('.next');

	prevButton.addEventListener('click', () => {
		showImage(currentIndex - 1);
	});

	nextButton.addEventListener('click', () => {
		showImage(currentIndex + 1);
	});

	showImage(currentIndex);
}

const galleries = document.querySelectorAll('.galleryContainer');
galleries.forEach(setupGallery);




/*----------------Scroll Funktion --------------------- */

function smoothScroll(target, duration) {
	var targetElement = document.querySelector(target);
	var targetPosition = targetElement.offsetTop;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var scrollY = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, scrollY);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	// Easing-Funktion für einen sanften Scroll-Effekt
	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);
}

/*------------- Event-Listener für das Klicken auf die Header-Links----------*/
var headerLinks = document.querySelectorAll('header a');
headerLinks.forEach(function (link) {
	link.addEventListener('click', function (event) {
		event.preventDefault();
		var target = this.getAttribute('href');
		var duration = 800; // Dauer des Scroll-Effekts in Millisekunden
		smoothScroll(target, duration);
	});
});



/*--------------------------BURGER MENU------------------------*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}));