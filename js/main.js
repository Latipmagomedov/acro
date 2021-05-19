$(document).ready(function () {

    // Menu open
    document.querySelector('.menu-icon-wrapper').addEventListener('click', () => {
        document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
        document.querySelector('.header__nav').classList.toggle('menu-toggle');

        let headerNavLink = document.querySelector('.header__nav-link');

        headerNavLink.classList.toggle('nav-active');
    });


    $(".owl-carousel-header").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: true
    });


    $(".owl-bestsellers-slider").owlCarousel({
        loop: true,
        items: 4,
        margin: 7,
        nav: true,
        dots: true,

        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
                margin: 0,
            },
            800:{
                items:4,
            }
        }
    });



});