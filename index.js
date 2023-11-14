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



// Popup Register-Form
document.addEventListener('DOMContentLoaded', function() {
    const popupForm = document.querySelector('#popupForm')
    const closePopupBtn = document.querySelector('#closePopupBtn')
    
    
    setTimeout(() => {
        popupForm.style.display='block'
    }, 6000);
    
    closePopupBtn.addEventListener('click',function(){
        popupForm.style.display = 'none'
    })
})


// Course page register-btn
let registerNow = () => {
    const popupForm = document.querySelector('#popupForm')
    const closePopupBtn = document.querySelector('#closePopupBtn')
    popupForm.style.display='block'
}





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



// Hero-Section Carousel
var swiper = new Swiper(".myCarSwiper", {
    slidesPerView: "1",
    // cssMode: true,
    // spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




// Testimonials
var swiper = new Swiper(".mySwiper", {
    // effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".nextBtn",
        prevEl: ".prevBtn",
    },
});