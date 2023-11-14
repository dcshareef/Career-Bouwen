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



// Form-Validation
let validateForm = (event) => {
    let fname = document.contactForm.fName.value.trim();
    let lname = document.contactForm.lName.value.trim();
    let phone = document.contactForm.phone.value.trim();
    let email = document.contactForm.email.value.trim();
    let nameError = document.querySelector('#fnameError');
    let phoneError = document.querySelector('#phoneError');
    let emailError = document.querySelector('#emailError');

    if (fname === "" && lname== "") {
        nameError.innerHTML = "Name is required";
        document.contactForm.fName.style.borderColor='red'
        document.contactForm.fName.focus();
        event.preventDefault()
        return false;
    }
    if (email == ""){
        emailError.innerHTML='email is required'
        document.contactForm.email.style.borderColor='red'
        document.contactForm.email.focus();
        event.preventDefault();
        return false;
    }
    if (phone === "") {
        phoneError.innerHTML = 'Please enter your number';
        document.contactForm.phone.style.borderColor='red'
        document.contactForm.phone.focus();
        event.preventDefault();
        return false;
    }else if (phone.length!=10) {
        phoneError.innerHTML = 'please enter a valid number';
        document.contactForm.phone.focus();
        event.preventDefault();
        return false;
    }

    // If all validations pass, return true to allow form submission
    return true;
}

// Clear error messages when the user starts typing
document.addEventListener('DOMContentLoaded', function () {
    let nameInput = document.querySelector('input[name="fName"]');
    let nameError = document.querySelector('#fnameError');
    
    let phoneInput = document.querySelector('input[name="phone"]');
    let phoneError = document.querySelector('#phoneError');

    let emailInput = document.querySelector('input[name="email"]');
    let emailError = document.querySelector('#emailError');
    
    nameInput.addEventListener('input', function () {
        nameError.innerHTML = '';
        this.style.borderColor = 'grey';
    });
    phoneInput.addEventListener('input', function () {
        phoneError.innerHTML = '';
        this.style.borderColor = 'grey';
    });
    emailInput.addEventListener('input', function () {
        emailError.innerHTML = '';
        this.style.borderColor = 'grey';
    });
});