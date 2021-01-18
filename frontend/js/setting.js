$(document).ready(function() {
    $(".single-item").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        infinite: true,
        cssEase: 'linear',
        fade: true,
        arrows: false,
        dots: false,
    });
});

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    responsive: [{
        breakpoint: 580,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }

    }]
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    focusOnSelect: true
});

$(document).scroll(function() {
    if ($("#nav ").offset().top > 120) {
        $("#nav ").addClass("nav-scroll");
    } else {
        $("#nav ").removeClass("nav-scroll");
    }
});