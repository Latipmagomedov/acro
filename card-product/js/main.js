$(document).ready(function () {
    $('.card-product__slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.card-product__slider-bottom'
    });

    $('.card-product__slider-bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.card-product__slider-top',
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        arrows: false,
    });

})

