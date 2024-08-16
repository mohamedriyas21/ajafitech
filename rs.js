// JavaScript for Navbar
let header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Assuming you want to change the icon on click
    navbar.classList.toggle('active'); // Toggle navbar visibility
}

window.onscroll = () => {
    // Close the navbar when scrolling
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
