let navLinks = document.querySelector(".nav-links");
let searchForm = document.querySelector(".search-form");
let loginForm = document.querySelector(".login-form");
let contactForm = document.querySelector(".contact-form");
let favoritesForm = document.querySelector(".favorites-form");


document.querySelector("#menu-btn").onclick = () => {
    navLinks.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactForm.classList.remove('active');
    favoritesForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle("active");
    navLinks.classList.remove('active');
    loginForm.classList.remove('active');
    contactForm.classList.remove('active');
    favoritesForm.classList.remove('active');
}

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle('active');
    navLinks.classList.remove('active');
    searchForm.classList.remove('active');
    contactForm.classList.remove('active');
    favoritesForm.classList.remove('active');
}

document.querySelector('#contact-btn').onclick = () => {
    contactForm.classList.toggle("active");
    navLinks.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    favoritesForm.classList.remove('active');
}

document.querySelector('#favorites-btn').onclick = () => {
    favoritesForm.classList.toggle("active");
    contactForm.classList.remove('active');
    navLinks.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navLinks.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactForm.classList.remove('active');
    favoritesForm.classList.remove('active');
}

var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});