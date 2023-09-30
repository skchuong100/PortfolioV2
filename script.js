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
