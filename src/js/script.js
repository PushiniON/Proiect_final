// Inaltimea NavBar in "px"
let navBarHeight = document.querySelector('.sticky-top').offsetHeight;

// Lista de sectii 
let navLinks = document.querySelectorAll('.navbar-link');

for (const section of navLinks) {
	section.style.scrollMarginTop = navBarHeight + 'px';
}