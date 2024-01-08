// create nav bar section scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Fix: Check if the element exists before accessing classList
            let currentNavLink = document.querySelector('header nav a[href*=' + id + ']');
            if (currentNavLink) {
                currentNavLink.classList.add('active');
            }
        }
    });

    // create nav bar section sticky
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Fix: Define menubar and navbar
    let menubar = document.querySelector('#menu');
    let navbar = document.querySelector('.navbar');
    menubar.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// create a toggle changer
menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// create a text changer
    var typed = new Typed('.textline',{
            strings:["Frontend Developer","UI/UX Design","Backend Developer"],
            typespeed:100,
            backspeed:100,
            backDelay:1000,
            loop:true,
    })