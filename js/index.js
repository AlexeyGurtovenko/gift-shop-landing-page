
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = nav.querySelectorAll('.nav__item');
const body = document.querySelector('body');

const navHandler = () => {
    nav.classList.toggle('nav-active');
    body.classList.toggle('lock');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `flyIn 0.5s ease forwards ${index / 7 + 0.3}s`
        }
    });

    burger.classList.toggle('toggle');

}

burger.addEventListener('click', () => {
    navHandler();
})

nav.addEventListener('click', () => {
    if (nav.classList.contains('nav-active')) {
        navHandler();
    }
})