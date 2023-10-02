const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

let currentSection = 0;
const sections = document.querySelectorAll('section');
const lineL1 = document.getElementById('lineL1');
const lineL2 = document.getElementById('lineL2');
const header = document.querySelector('.header');
const links = document.getElementById('links');
window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0 && currentSection < sections.length - 1) {
    currentSection++;
  } else if (event.deltaY < 0 && currentSection > 0) {
    currentSection--;
  } else {
    return; // If neither condition is met, we're at the top or bottom.
  }

  if (currentSection % 2 === 0) {  // Check if the section number is even
    lineL1.classList.remove('solid-color');
    lineL2.classList.remove('solid-color');
    lineR1.classList.remove('solid-color');
    lineR2.classList.remove('solid-color');
    boxL1.classList.remove('solid-color');
    boxL2.classList.remove('solid-color');
    boxR1.classList.remove('solid-color');
    boxR2.classList.remove('solid-color');
    header.classList.remove('text-color-change');
    links.classList.remove('links-color-change');

  } else {
    lineL1.classList.add('solid-color');
    lineL2.classList.add('solid-color');
    lineR1.classList.add('solid-color');
    lineR2.classList.add('solid-color');
    boxL1.classList.add('solid-color');
    boxL2.classList.add('solid-color');
    boxR1.classList.add('solid-color');
    boxR2.classList.add('solid-color');
    header.classList.add('text-color-change');
    links.classList.add('links-color-change');
  }

  window.scrollTo({
    top: sections[currentSection].offsetTop,
    behavior: 'smooth'
  });
});

window.onload = function () {
	resumeFragment();

	pages = document.getElementsByClassName("page");
	loadPage("main");

	setTimeout(function () {
		flip_text(document.getElementById("cycle"));
	}, 1000);
}

function flip_text(t) {

	let time = getTransitionDuration(t) * 1000;
	let delay = parseFloat(t.dataset.delay);
	const states = JSON.parse(t.dataset.states);
	const avgStatesLength = states.reduce((a, b) => a + b.length, 0) / states.length;
	const maxStatesLength = Math.max(...states.map(x => x.length));

	let currentTextIndex = states.indexOf(t.textContent);

	t.style.transform = "scaleY(0)";
	t.style.transformOrigin = "top";


	setTimeout(function () {
		currentTextIndex = (currentTextIndex + 1 >= states.length) ? 0 : currentTextIndex + 1;
		t.textContent = states[currentTextIndex];

		t.style.padding = `0 ${(maxStatesLength - t.textContent.length) / 2 + 1}ch`
		t.style.transform = "scaleY(1)";
		t.style.transformOrigin = "bottom";
	}, time)

	setTimeout(function () {
		flip_text(t);
	}, delay)
}

function loadPage(pageName) {
	for (let i = 0; i < pages.length; i++) {
		pages[i].classList.remove("active-page");
		if (pages[i].id != pageName) {
			pages[i].classList.add("hidden");
		} else {
			// Load next page
			document.getElementById(pageName).classList.remove("hidden");
			document.getElementById(pageName).classList.add("active-page");
		}
	}
}

function getTransitionDuration(element) {
	return parseFloat(getComputedStyle(element).transitionDuration.substring(0,
		getComputedStyle(element).transitionDuration.indexOf("s")));
}

function resumeFragment() {
	// Check if the URL has the fragment '#resume'
	if (window.location.hash === '#resume') {
		// Find the element with ID 'resume' and click it
		const resumeElement = document.getElementById('resume');
		if (resumeElement) {
			resumeElement.click();
		}
		}
}