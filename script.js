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
  } else {
    lineL1.classList.add('solid-color');
    lineL2.classList.add('solid-color');
  }

  window.scrollTo({
    top: sections[currentSection].offsetTop,
    behavior: 'smooth'
  });
});
