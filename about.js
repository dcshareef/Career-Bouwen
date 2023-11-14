// Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector('header')

let isSticky = false;

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    if (isSticky) {
        header.style.position = 'static';
        isSticky = false;
    } else {
        header.style.position = 'sticky';
        isSticky = true;
    }
});


// Fixed-Contact-Buttons
let wrapper = document.querySelector('#fixed-btns-wrapper');
let whatsApp = document.querySelector('.whatsapp img');
let dial = document.querySelector('.dial img');
let text = document.querySelector('.text img');
let isButtonsVisible = false; // Initial state

wrapper.addEventListener('click', function() {
if (isButtonsVisible) {
    // Hide the buttons
    whatsApp.style.display = 'none';
    dial.style.display = 'none';
    text.style.display = 'none';
} else {
    // Show the buttons
    whatsApp.style.display = 'block';
    dial.style.display = 'block';
    text.style.display = 'block';
}
isButtonsVisible = !isButtonsVisible;
});