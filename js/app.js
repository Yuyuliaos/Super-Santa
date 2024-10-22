window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    let parallaxLeft = document.querySelector('.parallax-left');
    let parallaxRight = document.querySelector('.parallax-right');

    if (parallaxLeft) {
        parallaxLeft.style.transform = 'translateX(' + scrollPosition * -0.3 + 'px)';
    }

    if (parallaxRight) {
        parallaxRight.style.transform = 'translateX(' + scrollPosition * 0.3 + 'px)';
    }
});


const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visible");
    console.log("clicked");
});

close.addEventListener("click", () => {
    nav.classList.remove("visible");
});
