
let searchForm = document.querySelector(".search-form");
let navLinks = document.querySelector(".nav-links");

document.querySelector("#menu-btn").onclick = () =>{
    navLinks.classList.toggle('active');
    searchForm.classList.remove('active');
}

document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle('active');
    navLinks.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    navLinks.classList.remove('active');
}