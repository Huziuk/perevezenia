
if (window.innerWidth <= 768) {
	const elements = document.querySelectorAll('[data-aos');
	Array.from(elements).forEach(element => {
		element.setAttribute('data-aos', "fade-in");
	})

	const footer = document.querySelector("footer");
	footer.removeAttribute("data-aos");
}

const prevText = document.querySelectorAll(".preview-text");
if (prevText) {
	prevText.forEach(element => {
		splitText(element);
	})
}

const letters = document.querySelectorAll(".letter");
if (letters) {
	Array.from(letters).forEach((element, index) => {
		element.setAttribute("data-aos-delay", index * 50)
	});

	const prevSubTitle = document.querySelector('.preview__sub-title')
	if (prevSubTitle) {
		prevSubTitle.setAttribute("data-aos-delay", letters.length * 50)
	}

	const prevBtn = document.querySelector('.preview-button');
	if (prevBtn) {
		prevBtn.setAttribute("data-aos-delay", letters.length * 50)
	}
}

const imageText = document.querySelector(".image-text");
if (imageText) {
	splitText(imageText, "letter2")

	const letter2 = document.querySelectorAll('.letter2');

	if (letter2) {
		Array.from(letter2).forEach((element, index) => {
			element.setAttribute("data-aos-delay", index * 50)
		});
	}

}

AOS.init({
	// Global settings:
	disable: "false", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 150, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 600, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

if (document.querySelector(".my-slider")) {
	var slider = tns({
		container: '.my-slider',
		items: 1,
		// mode: "gallery"
		gutter: 50,
		controlsPosition: false,
		controlsText: ["", ""],
		navPosition: false,
		speed: 500,
		autoplay: true,
		rewind: true
	});

	slider.play();
}


const mobileNav = document.querySelector(".mobile-nav");
const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const mobileNavCloseBtn = document.querySelector(".close-mobile-nav");

if (mobileNavBtn) {
	mobileNavBtn.addEventListener("click", () => {
		mobileNav.classList.remove("d-none")
	})
	mobileNavCloseBtn.addEventListener("click", () => {
		mobileNav.classList.add("d-none")
	})
}


//  Functions 

function splitText(el, className = "letter") {

	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
		return `<div class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, '<div  data-aos="fade-in" class="' + className + '">$&</div>') +
			`</div>`;
	});
}
